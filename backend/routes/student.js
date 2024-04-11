import express from 'express';
import zod from 'zod';
import pool from '../database.js';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import authMiddleware from "../middleware.js";
import moment from 'moment/moment.js';

dotenv.config();

const router = express.Router();
router.use(express.json());
const JWT_SECRET = process.env.JWT_SECRET;
const regex = /^[a-zA-Z]+$/;

const signupBody = zod.object({
    rollno: zod.string().min(1),
    password: zod.string(),
    firstName: zod.string().regex(regex),
    lastName: zod.string()
})

router.post("/signup", async(req,res)=>{
    const {success, data, error} = signupBody.safeParse(req.body)
    if(!success){
        return res.status(411).json({
            message: "Incorrect inputs",
            error: error.message
        })
    }

    const [existingUser] = await pool.query(`SELECT * FROM STUDENT WHERE rollno= ?`, [req.body.rollno]);

    if (existingUser.length > 0) {
        return res.status(411).json({
            message: "Email already taken/Incorrect inputs"
        })
    }

    try {
        await pool.query(`INSERT INTO STUDENT(rollno, password, firstname, lastname)
            VALUES(?,?,?,?)`, [req.body.rollno, req.body.password, req.body.firstName, req.body.lastName]);
    
        const userId = req.body.rollno;
        
        const token = jwt.sign({
            userId
        }, JWT_SECRET);
    
        res.json({
            message: "User created successfully",
            token: token
        });
    } catch (error) {
        console.error("Error creating user:", error);
        if (error.code === 'ER_DUP_ENTRY') {
            // MySQL error code for duplicate entry
            res.status(411).json({
                message: "Username already exists"
            });
        } else {
            res.status(500).json({
                message: "Error creating user"
            });
        }
    }
    
})

const signinBody = zod.object({
    rollno: zod.string(),
	password: zod.string()
})

router.post("/signin", async (req, res) => {
    const { success } = signinBody.safeParse(req.body)
    if (!success) {
        return res.status(411).json({
            message: "Incorrect Inputs"
        })
    }

    const [user] = await pool.query(`SELECT * FROM STUDENT WHERE rollno= ?
    AND password= ?`, [req.body.rollno, req.body.password]);

    if (user.length > 0) {
        const userId = req.body.rollno;
        
        const token = jwt.sign({
            userId
        }, JWT_SECRET);
  
        res.json({
            token: token
        })
        return;
    }

    
    res.status(411).json({
        message: "No data found please sign up"
    })
})

router.get("/token", authMiddleware, async (req, res) => {
    try {
        const [rows, fields] = await pool.query(
            "SELECT firstname, lastname, rollno FROM STUDENT WHERE rollno = ?",
            [req.userId]
        );

        if (rows.length > 0) {
            const { firstname, lastname, rollno } = rows[0];
            // Do something with the retrieved data
            res.status(200).json({ firstname, lastname, rollno });
        } else {
            res.status(404).json({ message: "Student not found",
        id: req.user.Id });
        }
    } catch (error) {
        console.error("Error executing SQL query:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

const applyBody = zod.object({
    firstname: zod.string(),
    lastname: zod.string(),
    cgpa: zod.number(),
    bday: zod.string(),
    gender: zod.string(),
    pemail: zod.string().email(),
    email: zod.string().email(),
    pname: zod.string(),
    phno: zod.string(),
    rollno: zod.string()
})

router.post("/apply", async(req,res)=>{
    const {success, data, error} = applyBody.safeParse(req.body)
    if(!success){
        return res.status(411).json({
            message: "Incorrect inputs",
            error: error.message
        })
    }

    try {
        const formattedBday = moment(req.body.bday, "DD-MM-YYYY").format("YYYY-MM-DD");

        await pool.query(`UPDATE STUDENT SET cgpa=?, bday=?, gender=?, pemail=?, email=?, pname=?, phno=? WHERE rollno=?`, 
        [req.body.cgpa, formattedBday, req.body.gender, req.body.pemail, req.body.email, req.body.pname, req.body.phno, req.body.rollno]);

        res.json({
            message: "Application submitted successfully",
        });
    } catch (error) {
        console.error("Error creating user:", error);
        if (error.code === 'ER_DUP_ENTRY') {
            // MySQL error code for duplicate entry
            res.status(411).json({
                message: "Username already exists"
            });
        } else {
            res.status(500).json({
                message: "Error creating user"
            });
        }
    }
})



export default router;
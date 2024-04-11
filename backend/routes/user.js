import express from 'express';
import zod from 'zod';
import pool from '../database.js';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

dotenv.config();

const router = express.Router();
router.use(express.json());
const JWT_SECRET = process.env.JWT_SECRET;

const signupBody = zod.object({
    username: zod.string().email(),
    password: zod.string(),
    firstName: zod.string(),
    lastName: zod.string()
})

router.post("/signup", async(req,res)=>{
    const {success, data, error} = signupBody.safeParse(req.body)
    if(!success){
        return res.status(411).json({
            message: "Incorrect Inputs",
            error: error.message
        })
    }

    const [existingUser] = await pool.query(`SELECT * FROM ADMIN WHERE username= ?`, [req.body.username]);

    if (existingUser.length > 0) {
        return res.status(411).json({
            message: "Wrong username or password"
        })
    }

    try {
        await pool.query(`INSERT INTO ADMIN(username, password, firstname, lastname)
            VALUES(?,?,?,?)`, [req.body.username, req.body.password, req.body.firstName, req.body.lastName]);
    
        const userId = req.body.username;
        
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
            res.status(509).json({
                message: "Error creating user"
            });
        }
    }
    
})

const signinBody = zod.object({
    username: zod.string().email(),
	password: zod.string()
})

router.post("/signin", async (req, res) => {
    const { success } = signinBody.safeParse(req.body)
    if (!success) {
        return res.status(411).json({
            message: "Incorrect inputs"
        })
    }

    const [user] = await pool.query(`SELECT * FROM ADMIN WHERE username= ?
    AND password= ?`, [req.body.username, req.body.password]);

    if (user.length > 0) {
        const token = jwt.sign({
            userId: user._id
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

router.use("/filter-cgpa" ,async(req, res)=>{
    try{
        const [rows] = await pool.query(`SELECT * FROM APPLIED ORDER BY cgpa DESC`);

        if(rows.length>0){
            res.status(200).json(rows);
        }else {
            res.status(404).json({ message: "Student not found"});
        }
    } catch (error) {
        console.error("Error executing SQL query:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
})

router.use("/filter-bday" ,async(req, res)=>{
    try{
        const [rows] = await pool.query(`SELECT * FROM APPLIED ORDER BY bday`);

        if(rows.length>0){
            res.status(200).json(rows);
        }else {
            res.status(404).json({ message: "Student not found"});
        }
    } catch (error) {
        console.error("Error executing SQL query:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
})

export default router;
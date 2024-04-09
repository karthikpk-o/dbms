import express from 'express';
import zod from 'zod';
import pool from '../database.js';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

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


export default router;
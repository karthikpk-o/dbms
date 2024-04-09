import express from 'express';
import userRouter from './user.js';
import studentRouter from './student.js';

const router = express.Router();
router.use(express.json())

router.use("/user", userRouter)
router.use("/student", studentRouter)

export default router;
import express from 'express';
import cors from 'cors';
import rootRouter from './routes/index.js';

const app = express();
const PORT = 3000;
app.use(cors());
app.use("/api/v1", rootRouter);
app.use(express.json());


app.listen(3000, ()=>{
    console.log(`Server listening on port ${PORT}`);
})

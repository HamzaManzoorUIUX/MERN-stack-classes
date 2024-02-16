require('dotenv').config()
import mongoose from 'mongoose';
import express, { Express } from 'express';
import BlogPostModel from './models/schema';
const server: Express = express()
server.use(express.json())
const PORT = process.env.PORT || 5000
mongoose.connect(process.env.MONGODB_QUERY || "")
    .then(() => console.log('Connected!'));
const abc = (req: any, res: any,next:any) => {
    console.log('request', req);
    console.log('response', res);
}

server.get('/', abc, (req, res) => {
    const data = req.body
    BlogPostModel.create(data).then((res) => console.log(res)).catch((err) => console.log(err))
})

server.get('/', abc, (req, res) => {
    const data = req.body
    BlogPostModel.create(data).then((res) => console.log(res)).catch((err) => console.log(err))
})

server.listen(PORT, () => {
    console.log('working on port: ' + PORT);
})
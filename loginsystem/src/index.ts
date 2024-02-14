require('dotenv').config()
import express, { Express } from 'express';
import router from './Routes/Auth';
const server: Express = express();
const PORT=process.env.PORT||5000
server.use(express.json());
server.use('/auth',router)
server.use('*', (req, res) => {
    res.send('This end point is not available');
})

server.listen(PORT, () => {
    console.log(`listening on ${PORT}`);
    
});
require('dotenv').config()
import express, { Express } from 'express';
import router from './Routes/Auth';
import cors from 'cors'
const server: Express = express();
const PORT = process.env.PORT || 5000
server.use(express.json());
server.use(cors({
    origin:'http://localhost:3000', 
    credentials:true,            
}))
server.use('/auth', router)
server.use('*', (req, res) => {
    res.send('This end point is not available');
})
const { Sequelize } = require('sequelize');



// Option 3: Passing parameters separately (other dialects)
export const sequelize = new Sequelize('softicera', 'root', 'ali', {
    host: 'localhost',
    dialect: "mariadb"
});
server.listen(PORT, async () => {
    try {
        await sequelize.authenticate();
        console.log(`listening on ${PORT}`);
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
});
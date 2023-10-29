import { Sequelize } from "sequelize";
import dotenv from 'dotenv';

dotenv.config();

export const sequelize = new Sequelize (process.env.DATABASE, process.env.USER, process.env.PASSWORD, {
    host: process.env.HOST,
    dialect: "mysql",
    port: process.env.DB_PORT
})

export const connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log(">>> DB is connected");
    } catch (error) {
        console.error(error);
    }
}
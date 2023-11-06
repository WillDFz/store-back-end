import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const USERNAME = process.env.MONGO_USERNAME || '';
const PASSWORD = process.env.MONGO_PASSWORD || '';
const MONGO_URL = `mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.1g5w6pw.mongodb.net/?retryWrites=true&w=majority`;

const dbConnection = () => {
    mongoose
        .connect(MONGO_URL, { retryWrites: true, w: 'majority' })
        .then(() => {
            console.log('conectado no db');
        })
        .catch((error) => {
            console.log(error);
        });
    return mongoose.connection;
};


export default dbConnection;



import express from 'express';
import dotenv from 'dotenv';
import dbConnection from './config/dbConnect';
import routes from './routes';

dotenv.config();

const app = express();
routes(app);

const PORT = process.env.SERVER_PORT;
const connection = dbConnection();

connection.on('error', (error) => {
    console.log(error);
});

connection.once('open', () => {
    console.log('conexão com banco');
});

app.listen(PORT, () => {
    console.log(`conectado na porta ${PORT}`);
});

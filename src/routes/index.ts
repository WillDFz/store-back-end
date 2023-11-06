import express, { Request, Response } from 'express';
import products from './productsRoutes';

const routes = (app: express.Application) => {
    app.use(express.json(), products); 
    app.route('/products').get((req: Request, res: Response) => {
        console.log('Route / requested');
        res.status(200).send('a');
    });
};

export default routes;

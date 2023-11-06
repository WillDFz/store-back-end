import express from 'express';
import ProductController from '../controllers/productController';

const routes = express.Router();

routes.get('/products', ProductController.productList);
routes.get('/products/:id', ProductController.singleProduct);
routes.post('/products/', ProductController.createProduct);
routes.put('/products/:id', ProductController.updateProduct);

export default routes;

import product from '../models/Product';
import { Request, Response } from 'express';

class ProductController {
    static async productList(req: Request, res: Response) {
        try {
            const productList = await product.find({});
            res.status(200).json(productList);
        } catch (error) {
            console.error('Error fetching products:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    static async singleProduct(req: Request, res: Response) {
        try {
            const id = req.params.id;
            const selectedProduct = await product.findById(id);
            res.status(200).json(selectedProduct);
        } catch (error) {
            console.error('Error fetching products:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    static async createProduct(req: Request, res: Response) {
        try {
            const newProduct = await product.create(req.body);
            res.status(201).json({ message: 'produto cadastrado', product: newProduct });
        } catch (error) {
            console.error(error);
        }
    }

    static async updateProduct(req: Request, res: Response) {
        try {
            const id = req.params.id;
            await product.findByIdAndUpdate(id, req.body);
            res.status(200).json({ message: 'produto atualizado' });
        } catch (error) {
            console.error(error);
        }
    }

    static async deleteProduct(req: Request, res: Response) {
        try {
            const id = req.params.id;
            await product.findByIdAndDelete(id);
            res.status(200);
        } catch (error) {
            console.error(error);
        }
    }
}

export default ProductController;

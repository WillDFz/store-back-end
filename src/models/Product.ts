import mongoose, { Types } from 'mongoose';

interface IProduct {
    id: Types.ObjectId;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
    thumbnail: string;
    images: [string];
}

const productSchema = new mongoose.Schema<IProduct>(
    {
        id: { type: mongoose.Schema.Types.ObjectId },
        title: { type: String },
        description: { type: String },
        price: { type: Number },
        discountPercentage: { type: Number },
        rating: { type: Number },
        stock: { type: Number },
        brand: { type: String },
        category: { type: String },
        thumbnail: { type: String },
        images: { type: [String] },
    },
    { versionKey: false }
);

const product = mongoose.model('products', productSchema);

export default product;

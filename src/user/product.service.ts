import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Schema } from 'mongoose';
import { Product } from './product.dto';

@Injectable()
export class ProductService {
    constructor(@InjectModel('ProductSchema') private product: Model<Product>) {}

    getProducts(): Promise<Product[]> {
        return this.product.find().exec();
    }

    async getProduct(id: Schema.Types.ObjectId): Promise<Product>{
        return await this.product.findOne({_id: id, isActive: true});
    }

    createProduct(req: Product): Promise<Product> {
        return this.product.create(req);
    }
}

import { Body, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Schema } from 'mongoose';
import { ProductVariant, ProductVariantSchema } from './productVariant.dto';
import { Category } from '../categories/category.dto';

@Injectable()
export class ProductVariantService {
    constructor(private productVariant: Model<ProductVariant>) {}

    getProducts(): Promise<ProductVariant[]> {
        return this.productVariant.find().exec();
    }

    async getProduct(id: Schema.Types.ObjectId): Promise<ProductVariant>{
        return await this.productVariant.findOne({_id: id, isActive: true});
    }

    createProduct(@Body() req: ProductVariant): Promise<ProductVariant> {
        return this.productVariant.create(req);
    }
}

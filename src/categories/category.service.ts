import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Schema } from 'mongoose';
import { Category } from './category.dto';

@Injectable()
export class CategoryService {
    constructor(private category: Model<Category>) {}

    getCategories(): Promise<Category[]> {
        return this.category.find().exec();
    }

    async getCategory(id: Schema.Types.ObjectId): Promise<Category>{
        return await this.category.findOne({_id: id, isActive: true});
    }

    createCategory(req: Category): Promise<Category> {
        return this.category.create(req);
    }
}

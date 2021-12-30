import { Body, Controller, Get, HttpException, HttpStatus, Param, Post } from '@nestjs/common';
import { Error, Schema } from 'mongoose';
import { Category } from './category.dto';
import { CategoryService } from './category.service';

@Controller()
export class CategoryController {
    constructor(private readonly categorytService: CategoryService) { }

    @Get("/categories")
    async getDonationCenters(): Promise<Category[]> {
        return await this.categorytService.getCategories();
    }

    @Get("/category/:id")
    async getDonationCenter(@Param('id') id: Schema.Types.ObjectId): Promise<Category>{
        return await this.categorytService.getCategory(id);
    }

    @Post("/category")
    async createDonationCenter(@Body() createProductDto: Category): Promise<Category> {
        try {
            return await this.categorytService.createCategory(createProductDto);
        } catch(e: unknown){
            throw new HttpException({
                status: HttpStatus.BAD_REQUEST,
                error: (e as Error).message,
            }, HttpStatus.BAD_REQUEST);
        }
    }
}

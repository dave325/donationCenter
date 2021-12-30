import { Body, Controller, Get, HttpException, HttpStatus, Param, Post } from '@nestjs/common';
import { Error, Schema } from 'mongoose';
import { Product } from './product.dto';
import { ProductService } from './product.service';

@Controller()
export class ProductController {
    constructor(private readonly productService: ProductService) { }

    @Get("/products")
    async getDonationCenters(): Promise<Product[]> {
        return await this.productService.getProducts();
    }

    @Get("/product/:id")
    async getDonationCenter(@Param('id') id: Schema.Types.ObjectId): Promise<Product>{
        return await this.productService.getProduct(id);
    }

    @Post("/product")
    async createDonationCenter(@Body() createProductDto: Product): Promise<Product> {
        try {
            return await this.productService.createProduct(createProductDto);
        } catch(e: unknown){
            throw new HttpException({
                status: HttpStatus.BAD_REQUEST,
                error: (e as Error).message,
            }, HttpStatus.BAD_REQUEST);
        }
    }
}

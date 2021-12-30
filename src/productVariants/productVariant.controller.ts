import { Body, Controller, Get, HttpException, HttpStatus, Param, Post } from '@nestjs/common';
import { Error, Schema } from 'mongoose';
import { ProductVariant } from './productVariant.dto';
import { ProductVariantService } from './productVariant.service';

@Controller()
export class ProductVariantController {
    constructor(private readonly productVariantService: ProductVariantService) { }

    @Get("/productVariants")
    async getDonationCenters(): Promise<ProductVariant[]> {
        return await this.productVariantService.getProducts();
    }

    @Get("/productVariant/:id")
    async getDonationCenter(@Param('id') id: Schema.Types.ObjectId): Promise<ProductVariant>{
        return await this.productVariantService.getProduct(id);
    }

    @Post("/productVariant")
    async createDonationCenter(@Body() createProductVariantDto: ProductVariant): Promise<ProductVariant> {
        try {
            if(createProductVariantDto)
            return await this.productVariantService.createProduct(createProductVariantDto);
        } catch(e: unknown){
            throw new HttpException({
                status: HttpStatus.BAD_REQUEST,
                error: (e as Error).message,
            }, HttpStatus.BAD_REQUEST);
        }
    }
}

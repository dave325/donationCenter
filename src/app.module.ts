import { ProductVariantController } from './productVariants/productVariant.controller';
import { ProductController } from './products/product.controller';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DonationCenterSchema } from './donationCenter/DonationCenter.dto';
import { DonationCenterController } from './donationCenter/donationCenter.controller';
import { DonationCenterService } from './donationCenter/donationCenter.service';
import { ProductSchema } from './products/product.dto';
import { ProductService } from './products/product.service';
import { ProductVariantSchema } from './productVariants/productVariant.dto';
import { ProductVariantService } from './productVariants/productVariant.service';
import { CategoryController } from './categories/category.controller';
import { CategoryService } from './categories/category.service';
import { CategorySchema } from './categories/category.dto';

@Module({
  imports: [MongooseModule.forRoot(`mongodb://root:rootpassword@mongo:27017`), MongooseModule.forFeature([
    { name: 'DonationCenterSchema', schema: DonationCenterSchema },
    { name: 'ProductSchema', schema: ProductSchema },
    { name: 'ProductVariantSchema', schema: ProductVariantSchema },
    { name: 'CategorySchema', schema: CategorySchema }

  ])],
  controllers: [AppController, DonationCenterController, ProductController, ProductVariantController, CategoryController],
  providers: [AppService, DonationCenterService, ProductService, ProductVariantService, CategoryService],
})
export class AppModule { }

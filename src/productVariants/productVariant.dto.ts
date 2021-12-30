import { Product } from './../products/product.dto';
import * as mongoose from 'mongoose';
import { Document } from 'mongoose';
import { Category,CategoryModel } from '../categories/category.dto';


export interface ProductVariant {
  name: String,
  product: mongoose.Schema.Types.ObjectId | Product,
  category: mongoose.Schema.Types.ObjectId | Category,
  isActive: Boolean,
  inStock: Boolean,
  quantity: Number
}

export const ProductVariantSchema = new mongoose.Schema<ProductVariant>({
  name: {
    type: String,
    required: true
  },
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ProductSchema',
    required: true
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'CategorySchema',
  },
  isActive: {
    type: Boolean,
    required: true
  },
  inStock: {
    type: Boolean,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  }

});
ProductVariantSchema.pre('save', async function () {
  console.log(CategoryModel, this.category)
  const a = await CategoryModel.find({_id: this.category}).exec()
  console.log(a)
  if (this.category && !CategoryModel.count(this.category)) {
    throw new Error('invalid Category')
  }
});


export const ProductVariantModel = mongoose.model<ProductVariant>('ProductVariant', ProductVariantSchema);

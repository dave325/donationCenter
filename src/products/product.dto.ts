import * as mongoose from 'mongoose';
import { Document } from 'mongoose';


export const ProductSchema = new mongoose.Schema({
  sku: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  donationCenter: {
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'DonationCenter',
    required: true
  },
  isActive: {
    type: Boolean,
    required: true
  },
  inStock: {
    type: Boolean,
    required: true
  }

});

export type Product = typeof ProductSchema & Document;

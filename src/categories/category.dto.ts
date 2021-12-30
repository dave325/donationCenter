import * as mongoose from 'mongoose';
import { Document } from 'mongoose';
import { DonationCenter } from '../donationCenter/DonationCenter.dto';

export interface Category {
  name: String,
  donationCenter: mongoose.Schema.Types.ObjectId | DonationCenter,
  isActive: Boolean
}

export const CategorySchema = new mongoose.Schema<Category>({
  name: {
    type: String,
    required: true
  },
  donationCenter: {
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'DonationCenterSchema'
  },
  isActive: {
    type: Boolean,
    required: true
  }

});

export const CategoryModel = mongoose.model<Category>('Category', CategorySchema);

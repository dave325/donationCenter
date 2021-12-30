import * as mongoose from 'mongoose';
import { Address, AddressSchema } from '../database/schemas/Address.schema'


export interface DonationCenter {
  name: String,
  isActive: Boolean,
  address: Address
}
export const DonationCenterSchema = new mongoose.Schema<DonationCenter>({
  name: {
    type: String,
    required: true
  },
  isActive: {
    type: Boolean,
    required: true
  },
  address: AddressSchema,
});

export const DonationCenterModel = mongoose.model<DonationCenter>('DonationCenter', DonationCenterSchema);

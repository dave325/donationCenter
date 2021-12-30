import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Schema } from 'mongoose';
import { DonationCenter } from './DonationCenter.dto';

@Injectable()
export class DonationCenterService {
    constructor(@InjectModel('DonationCenterSchema') private donationCenter: Model<DonationCenter>) {}

    getDonationCenters(): Promise<DonationCenter[]> {
        return this.donationCenter.find().exec();
    }

    async getDonationCenter(id: Schema.Types.ObjectId): Promise<DonationCenter>{
        return await this.donationCenter.findOne({_id: id, isActive: true});
    }

    createDonationCenter(req: DonationCenter): Promise<DonationCenter> {
        return this.donationCenter.create(req);
    }
}

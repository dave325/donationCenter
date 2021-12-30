import { Body, Controller, Get, HttpException, HttpStatus, Param, Post } from '@nestjs/common';
import { Error, Schema } from 'mongoose';
import { DonationCenter } from './DonationCenter.dto';
import { DonationCenterService } from './donationCenter.service';

@Controller()
export class DonationCenterController {
    constructor(private readonly donationCenterService: DonationCenterService) { }

    @Get("/donationCenters")
    async getDonationCenters(): Promise<DonationCenter[]> {
        return await this.donationCenterService.getDonationCenters();
    }

    @Get("/donationCenter/:id")
    async getDonationCenter(@Param('id') id: Schema.Types.ObjectId): Promise<DonationCenter>{
        return await this.donationCenterService.getDonationCenter(id);
    }

    @Post("/donationCenter")
    async createDonationCenter(@Body() createDonationCenterDto: DonationCenter): Promise<DonationCenter> {
        console.group(createDonationCenterDto)
        try {
            return await this.donationCenterService.createDonationCenter(createDonationCenterDto);
        } catch(e: unknown){
            throw new HttpException({
                status: HttpStatus.BAD_REQUEST,
                error: (e as Error).message,
            }, HttpStatus.BAD_REQUEST);
        }
    }
}

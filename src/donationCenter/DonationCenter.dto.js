"use strict";
exports.__esModule = true;
exports.DonationCenterModel = exports.DonationCenterSchema = void 0;
var mongoose = require("mongoose");
var Address_schema_1 = require("../database/schemas/Address.schema");
exports.DonationCenterSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    isActive: {
        type: Boolean,
        required: true
    },
    address: Address_schema_1.AddressSchema
});
exports.DonationCenterModel = mongoose.model('DonationCenter', exports.DonationCenterSchema);

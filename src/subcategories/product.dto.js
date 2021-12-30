"use strict";
exports.__esModule = true;
exports.ProductSchema = void 0;
var mongoose = require("mongoose");
exports.ProductSchema = new mongoose.Schema({
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

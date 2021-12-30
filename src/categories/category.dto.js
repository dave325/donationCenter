"use strict";
exports.__esModule = true;
exports.CategoryModel = exports.CategorySchema = void 0;
var mongoose = require("mongoose");
exports.CategorySchema = new mongoose.Schema({
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
exports.CategoryModel = mongoose.model('Category', exports.CategorySchema);

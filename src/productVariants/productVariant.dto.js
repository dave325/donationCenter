"use strict";
exports.__esModule = true;
exports.ProductVariantModel = exports.ProductVariantSchema = void 0;
var mongoose = require("mongoose");
var category_dto_1 = require("../categories/category.dto");
exports.ProductVariantSchema = new mongoose.Schema({
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
        ref: 'CategorySchema'
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
exports.ProductVariantSchema.pre('save', function () {
    if (this.category && !category_dto_1.CategoryModel.count(this.category)) {
        throw new Error('invalid Category');
    }
});
exports.ProductVariantModel = mongoose.model('ProductVariant', exports.ProductVariantSchema);

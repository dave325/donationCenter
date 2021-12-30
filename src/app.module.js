"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var productVariant_controller_1 = require("./productVariants/productVariant.controller");
var product_controller_1 = require("./products/product.controller");
var common_1 = require("@nestjs/common");
var mongoose_1 = require("@nestjs/mongoose");
var app_controller_1 = require("./app.controller");
var app_service_1 = require("./app.service");
var donationCenter_controller_1 = require("./donationCenter/donationCenter.controller");
var donationCenter_service_1 = require("./donationCenter/donationCenter.service");
var product_service_1 = require("./products/product.service");
var productVariant_service_1 = require("./productVariants/productVariant.service");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        (0, common_1.Module)({
            imports: [mongoose_1.MongooseModule.forRoot("mongodb://root:rootpassword@mongo:27017")],
            controllers: [app_controller_1.AppController, donationCenter_controller_1.DonationCenterController, product_controller_1.ProductController, productVariant_controller_1.ProductVariantController],
            providers: [app_service_1.AppService, donationCenter_service_1.DonationCenterService, product_service_1.ProductService, productVariant_service_1.ProductVariantService]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;

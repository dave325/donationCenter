"use strict";
exports.__esModule = true;
exports.AddressModel = exports.AddressSchema = void 0;
var mongoose = require("mongoose");
var STATES;
(function (STATES) {
    STATES["AL"] = "Alabama";
    STATES["AK"] = "Alaska";
    STATES["AZ"] = "Arizona";
    STATES["AR"] = "Arkansas";
    STATES["CA"] = "California";
    STATES["CO"] = "Colorado";
    STATES["CT"] = "Connecticut";
    STATES["DE"] = "Delaware";
    STATES["FL"] = "Florida";
    STATES["GA"] = "Georgia";
    STATES["HI"] = "Hawaii";
    STATES["ID"] = "Idaho";
    STATES["IL"] = "Illinois";
    STATES["IN"] = "Indiana";
    STATES["IA"] = "Iowa";
    STATES["KS"] = "Kansas";
    STATES["KY"] = "Kentucky";
    STATES["LA"] = "Louisiana";
    STATES["ME"] = "Maine";
    STATES["MD"] = "Maryland";
    STATES["MA"] = "Massachusetts";
    STATES["MI"] = "Michigan";
    STATES["MN"] = "Minnesota";
    STATES["MS"] = "Mississippi";
    STATES["MO"] = "Missouri";
    STATES["MT"] = "Montana";
    STATES["NE"] = "Nebraska";
    STATES["NV"] = "Nevada";
    STATES["NH"] = "New Hampshire";
    STATES["NJ"] = "New Jersey";
    STATES["NM"] = "New Mexico";
    STATES["NY"] = "New York";
    STATES["NC"] = "North Carolina";
    STATES["ND"] = "North Dakota";
    STATES["OH"] = "Ohio";
    STATES["OK"] = "Oklahoma";
    STATES["OR"] = "Oregon";
    STATES["PA"] = "Pennsylvania";
    STATES["RI"] = "Rhode Island";
    STATES["SC"] = "South Carolina";
    STATES["SD"] = "South Dakota";
    STATES["TN"] = "Tennessee";
    STATES["TX"] = "Texas";
    STATES["UT"] = "Utah";
    STATES["VT"] = "Vermont";
    STATES["VA"] = "Virginia";
    STATES["WA"] = "Washington";
    STATES["WV"] = "West Virginia";
    STATES["WI"] = "Wisconsin";
    STATES["WY"] = "Wyoming";
})(STATES || (STATES = {}));
exports.AddressSchema = new mongoose.Schema({
    address1: String,
    address2: String,
    city: String,
    state: String,
    zipCode: {
        type: String,
        "enum": STATES,
        "default": null
    }
});
exports.AddressModel = mongoose.model('Address', exports.AddressSchema);

/**
 */
"use strict";

/**
 * Brands
 *
 * @module      :: Model
 * @description :: Represent data model for the Companies
 */

//========================== Load Modules Start ==========================

//========================== Load External Modules ==========================

let mongoose = require("mongoose");

//========================== Load Internal Modules ==========================

//========================== Load Modules End ==========================

let Schema = mongoose.Schema;

/**
 * Company Schema
 */
let teacherSchema = new Schema(
    {
        teacherID: {
            type: String,
        },
        teacherName: {
            type: String
        },
        teacherContactNumber:{
            type: String
        },
        teacherCountry:{
            type: String
        },
        teacherEmailID: {
            type: String
        },
        teacherSkypeID : {
            type: String
        },
        teacherUserName: {
            type : String
        }
    },
    {
        versionKey: false
    }
);

teacherSchema.methods.toJSON = function () {
    var obj = this.toObject();
    return obj;
};

teacherSchema.pre("save", function (next) {
    this.createdOn = new Date();
    next();
});

module.exports = mongoose.model("teacher", teacherSchema, "teacher");

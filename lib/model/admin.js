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
let adminSchema = new Schema(
  {
    adminID: {
        type: String,
    },
    emailAddress: {
      type: String
    },
    password:{
        type: String
    }
  },
    {
        versionKey: false
    }
);

adminSchema.methods.toJSON = function () {
  var obj = this.toObject();
  return obj;
};

adminSchema.pre("save", function (next) {
  this.createdOn = new Date();
  next();
});

module.exports = mongoose.model("admin", adminSchema, "admin");

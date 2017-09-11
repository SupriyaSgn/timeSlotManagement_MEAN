"use strict";

//========================== Load Modules Start =======================

//========================== Load external modules ====================

const _ = require('lodash'),
  mongoose = require('mongoose');

//========================== Load internal modules ====================

const Admin = require('../model/admin'),
    BaseDao = new require('../dao/baseDao'),
    adminDao = new BaseDao(Admin),
    appUtils = require('../appUtils'),
    appConstants = require('../constants'),
    uuidv4 = require('uuid/v4');


//========================== Load Modules End ==============================================

const SORT_BY = {
  name: 'profile.name',
  email: 'profile.email',
  country: 'profile.country',
  city: 'profile.city',
  address: 'profile.address',
  teamName: 'teams.profile.name'
};

//Define Projections
const PROJECTION = {
  ALL: {},
  BRAND_INFO: {
    _id: 1, brandName: 1, "variants.name": 1, "variants._id": 1
  },
  COMPANY_DETAIL: {_id: 1, profile: 1, national: 1, salesId: 1, disabled: 1},
  ID: {_id: 1}
};

//=============================Define Methods Start=================================================

function addAdmin(adminDetail) {
    adminDetail.adminID = uuidv4();
    return adminDao.save(adminDetail);
}
function adminLogin(adminDetail) {
    let emailAddress = {"emailAddress": adminDetail.emailAddress };
    return adminDao.find(emailAddress);
}
//
// function addVariantUnderBrand(brandInfo) {
//     let query = {'brandName': brandInfo.brandName};
//     let update = {'$push': {variants: {name: brandInfo.variantName, createdOn: Date.now()}}};
//
//     return brandDao.findOneAndUpdate(query, update);
// }
//
// function getBrandInfo() {
//     return brandDao.find({}, PROJECTION.BRAND_INFO);
// }
//
// function dropCollection() {
//     return Promise.all([brandDao.remove({}), purchaserDao.remove({}), stockDao.remove({}),
//                         purchaseOrderDao.remove({}), orderItemDao.remove({})]
//                       );
// }
//
// function initScript() {
//     let promiseArray = [];
//
//     // Add Bharat Uncle, Prateek Narang, Milap, Opening Stock as a Purchaser
//     let profile = [
//                     {
//                         name: appConstants.USERS.OPENING_STOCK,
//                         address: '',
//                         phone: []
//                     },
//                     {
//                       name: appConstants.USERS.BHARAT_UNCLE,
//                       address: '',
//                       phone: []
//                     },
//                     {
//                         name: appConstants.USERS.PRATEEK,
//                         address: '',
//                         phone: [9899387832]
//                     },
//                     {
//                         name: appConstants.USERS.MILAAP,
//                         address: '',
//                         phone: []
//                     }
//                 ];
//     profile.forEach(function (profileData) {
//        let newPurchaser = { profile: profileData };
//        promiseArray.push(purchaserDao.save(newPurchaser));
//     });
//
//     // TODO: Add Opening Account as a Customer
//
//     return Promise.all(promiseArray);
// }

//=============================Define Methods End=================================================

//========================== Export Module Start ==============================

module.exports = {
    addAdmin,
    adminLogin
};

//========================== Export Module End ===============================

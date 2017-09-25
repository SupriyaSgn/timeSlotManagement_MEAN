"use strict";

//========================== Load Modules Start =======================

//========================== Load external modules ====================

const _ = require('lodash'),
  mongoose = require('mongoose');

//========================== Load internal modules ====================

const Admin = require('../model/admin'),
    Teacher = require('../model/teacher'),
    BaseDao = new require('../dao/baseDao'),
    adminDao = new BaseDao(Admin),
    teacherDao = new BaseDao(Teacher),
    appUtils = require('../appUtils'),
    appConstants = require('../constants'),
    uuidv4 = require('uuid/v4');


//========================== Load Modules End ==============================================

//=============================Define Methods Start=================================================

function addAdmin(adminDetail) {
    adminDetail.adminID = uuidv4();
    return adminDao.save(adminDetail);
}
function adminLogin(adminDetail) {
    let emailAddress = {"emailAddress": adminDetail.emailAddress };
    return adminDao.findOne(emailAddress);
}
function addTeacher(details) {
    details.teacherID = uuidv4();
    return teacherDao.save(details);
}
function getTeachers() {
    return teacherDao.find();
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
    adminLogin,
    addTeacher,
    getTeachers
};

//========================== Export Module End ===============================

"use strict";

//========================== Load Modules Start =======================

//========================== Load external modules ====================

const _ = require('lodash');
const Promise = require('bluebird');

//========================== Load internal modules ====================
// Load admin service
const adminService = require('../services/adminService');

//========================== Load Modules End ==============================================
function addAdmin(adminDetail) {
    return adminService.addAdmin(adminDetail);
}
function adminLogin(loginDetail) {
    if(_.isEmpty(loginDetail) || !loginDetail.emailAddress){
        return Promise.reject("Parameter Missing");
    }else{
        return adminService.adminLogin(loginDetail);
    }
}
function validateAdmin(adminDetail) {
    return adminService.validateAdmin(adminDetail);
}
function addTeacher(teacherDetail) {
    return adminService.addTeacher(teacherDetail);
}
function getTeachers() {
    return adminService.getTeachers();
}
//========================== Export Module Start ==============================

module.exports = {
    addAdmin,
    adminLogin,
    validateAdmin,
    addTeacher,
    getTeachers
};

//========================== Export Module End ===============================

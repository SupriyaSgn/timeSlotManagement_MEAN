"use strict";

//========================== Load Modules Start =======================


//========================== Load internal modules ====================

// Load company dao
const adminDao = require("../dao/adminDao");
const _ = require("lodash");
const emailConfig = require("../email/emailHandler"),
    shortid = require('shortid');

//========================== Load Modules End ==============================================

function addAdmin(adminDetail) {
    return adminDao.addAdmin(adminDetail);
}
function adminLogin(loginDetail) {
    return adminDao.adminLogin(loginDetail);
}
function validateAdmin(adminDetail) {
    return adminDao.adminLogin(adminDetail);
}
function addTeacher(teacherDetail) {
    let successMsg;
    teacherDetail.teacherUserName = shortid.generate() ;
    return emailConfig.sendEmail(teacherDetail).then(function (result) {
        if(result){
            successMsg = result;
        }
    }).then(function (res) {
        if(successMsg == "success"){
            return adminDao.addTeacher(teacherDetail);
        }
    });
   // return adminDao.addTeacher(teacherDetail);
}
function getTeachers() {
    return adminDao.getTeachers();
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

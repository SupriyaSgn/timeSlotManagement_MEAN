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
    return adminService.adminLogin(loginDetail);
}

//========================== Export Module Start ==============================

module.exports = {
    addAdmin,
    adminLogin
};

//========================== Export Module End ===============================

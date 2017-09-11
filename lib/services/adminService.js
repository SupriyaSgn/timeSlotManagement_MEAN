"use strict";

//========================== Load Modules Start =======================


//========================== Load internal modules ====================

// Load company dao
const adminDao = require("../dao/adminDao");
const _ = require("lodash");

//========================== Load Modules End ==============================================

function addAdmin(adminDetail) {
    return adminDao.addAdmin(adminDetail);
}
function adminLogin(loginDetail) {
    return adminDao.adminLogin(loginDetail);
}
//========================== Export Module Start ==============================

module.exports = {
    addAdmin,
    adminLogin
};

//========================== Export Module End ===============================

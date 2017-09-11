"use strict";

//========================== Load Modules Start =======================
const adminRouter = require("express").Router(),
    _ = require('lodash'),
    Promise = require('bluebird');

//========================== Load internal modules ====================

// Load admin facade
const adminFacade = require('../facade/adminFacade'),
    resHndlr = require('../resHandler'),
    middleware = require("../middleware"),
    validators = require("../middleware/validators"),
    constants = require('../constants');

//========================== Load Modules End ==============================================

//========================== Define Routes Start ==============================================

const pageSort = ['pageSize', 'pageNo', 'sortBy', 'sortOrder'];

adminRouter.route("/addAdmin")
    .post([],
        function (req, res) {
            let adminDetail = _.pick(req.body, ['emailAddress', 'password']);
            adminFacade.addAdmin(adminDetail)
                .then(function (result) {
                    resHndlr.sendSuccessWithMsg(res, result);
                })
                .catch(function (err) {
                    resHndlr.sendError(res, err);
                });
        });

adminRouter.route("/adminLogin")
    .get([], function (req, res) {
        let loginDetail = _.pick(req.query, ["emailAddress", "password"]);
        adminFacade.adminLogin(loginDetail)
            .then(function (result) {
                resHndlr.sendSuccessWithMsg(res, result);
            })
            .catch(function (err) {
                resHndlr.sendError(res, err);
            });
    });
//========================= Define Routes End ==============================================

//===========================Private Methods Start===========================================

//===========================Private Methods End==============================================


//========================== Export Module Start ==============================

module.exports = adminRouter;

//========================== Export Module End ===============================

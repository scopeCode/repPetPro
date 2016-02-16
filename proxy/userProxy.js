/**
 * 用户对应数据库的操作
 * Created by mo on 2016/2/16.
 */
var models      =   require('../models/models');
var sequelize   =   require('../models/index').sequelize;
var EventProxy  =   require('eventproxy');
var log4j       =   require("../lib/log4js").logger('userProxy_console');
var User        =   models.User;

/**
 * 新用户的创建
 * @param userName
 * @param pwd
 * @param callback
 * @returns {Promise|*}
 */
exports.createUser              =   function(userName,pwd,callback){
    return sequelize.transaction(function (t) {
        return User.create({
            userName    :   userName,
            userPwd     :   pwd
        }, {transaction: t}).then(function (user) {

        });
    }).then(function (result) {
        callback(result);
    }).catch(function (err) {
        log4j.error(err);
    });
};
/**
 * 模型初始化js
 * Created by mo on 2016/2/16.
 */
var config           =   require("../config").mysql;
var Sequelize        =   require('sequelize');
exports.sequelize   =   new Sequelize(config.database, config.username, config.password, config.options);
exports.Sequelize   =   Sequelize;
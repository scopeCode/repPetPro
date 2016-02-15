/**
 * 用户的全局 路由控制
 * Created by mo on 2016/2/16.
 */
var userController      =   require("./controllers/userController");
var commonController    =   require("./controllers/commonController");

module.exports = function (app) {
    app.route('/').get(commonController.v_main);
    app.route('/user/v_login').get(userController.v_login);
    app.route('/user/v_register').get(userController.v_register);
};
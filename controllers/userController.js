/**
 * 有关用户操作的 Controller
 * Created by mo on 2016/2/16.
 */
var log4js   =   require("../lib/log4js").logger("userController");
//[GET]-------------------------------------------------------------------------------------------------------------\\
exports.v_login = function (req, res, next) {
    try{
        log4js.debug("  v_login - in ");
        res.render('login');
    }catch(ex){
        next(ex);
    }
};
exports.v_register = function (req, res, next) {
    try{
        log4js.debug("  v_register - in ");
        res.render('register');
    }catch(ex){
        next(ex);
    }
};
exports.v_logout = function (req, res, next) {
    try{
        log4js.debug("  v_logout - in ");
        if(req.session && req.session.user){ req.session.user   =   null;}
        res.redirect('/user/v_login');
    }catch(ex){
        next(ex);
    }
};
//[POST]-------------------------------------------------------------------------------------------------------------\\
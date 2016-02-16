/**
 * 需要登录的请求
 * Created by mo on 2016/2/16.
 */
exports.loginRequired    =   function(req, res, next){
    if (!req.session || !req.session.user) {
        req.session.error='请先登陆';
        return res.redirect('/user/v_login');
    }
    next();
};
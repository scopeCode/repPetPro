/**
 * ��Ҫ��¼������
 * Created by mo on 2016/2/16.
 */
exports.loginRequired    =   function(req, res, next){
    if (!req.session || !req.session.user) {
        req.session.error='���ȵ�½';
        return res.redirect('/user/v_login');
    }
    next();
};
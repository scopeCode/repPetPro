/**
 * ¹«¹²µÄController
 * Created by mo on 2016/2/16.
 */
exports.v_main = function (req, res, next) {
    try{
        if(req.session && req.session.user){
            res.redirect('/user/v_index');
        }else{
            res.redirect('/user/v_login');
        }
    }catch(ex){
        next(ex);
    }
};
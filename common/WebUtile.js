/**
 * 与WEB相关的公共处理
 * Created by mo on 2016/2/16.
 */
exports.success         =   function(data){
    var json    =   {'result':1,'msg':''};
    if(data){
        json.data   =   data;
    }
    return json;
};
exports.error            =   function(msg){
    var json    =   {'result':0};
    if(msg){
        json.msg   =   msg;
    }
    return json;
};
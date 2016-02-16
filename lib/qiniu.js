/**
 * ��ţ�ϴ��Ĳ���
 * Created by mo on 2016/2/16.
 */
var qiniu   = require('qiniu');
var fs      = require("fs");
var  qn = {};
var config ={
    ACCESS_KEY:'YYFZ8Mv3gARmlE8-MDc-zj8Yp0p__SoQj6u_Vjuc',
    SECRET_KEY:'Qpmmt-jax55bZxWVC0lLmE__QJgEAfAyGG1CUkVZ',
    BUCKETNAME:'baby',
};
qiniu.conf.ACCESS_KEY = config.ACCESS_KEY;
qiniu.conf.SECRET_KEY = config.SECRET_KEY;
/***
 * ��ţ�ϴ��ļ�
 * @param key       ������ �ļ�����   Ҳ������ img/�ļ���
 * @param filePath  ����ֱ�ӻ�ȡ
 * @param success   �ɹ��ص�����
 * @param error     ʧ�ܻص�����
 */
qn.putFile = function(key,filePath,_config,success,error){
    //���û���趨 ����Ĭ��
    config = extend(config,_config);
    success = success || function(){};
    error = error || function(){};

    var putPolicy = new qiniu.rs.PutPolicy(config.BUCKETNAME);
    var extra = new qiniu.io.PutExtra();
    var token = putPolicy.token();
    try{
        qiniu.io.putFile(token,key,filePath,extra,function(err, ret){
            if(!err) {
                deleteFile(filePath);
                success(ret);
            }
            else {
                error(err);
            }
        });
    }catch(ex){
        error(ex);
    }
};
qn.putWithoutKey = function(filePath,_config,success,error){
    //���û���趨 ����Ĭ��
    config = extend(config,_config);
    success = success || function(){};
    error = error || function(){};

    var putPolicy = new qiniu.rs.PutPolicy(config.BUCKETNAME);
    var extra = new qiniu.io.PutExtra();
    var token = putPolicy.token();
    try{
        //(uptoken, loadFile, extra, onret)
        qiniu.io.putFileWithoutKey(token,filePath,extra,function(err, ret){
            if(!err) {
                deleteFile(filePath);
                success(ret);
            }
            else {
                error(err);
            }
        });
    }catch(ex){
        error(ex);
    }
};
function extend(destination, source) {
    for (var property in source)
        destination[property] = source[property];
    return destination;
}
//ɾ����ʱ�ļ�
function deleteFile(url){
    fs.exists(url,function(exists){
        if(exists){
            fs.unlink(url, function(){});
        }
    });
}
module.exports = qn;
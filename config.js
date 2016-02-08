/**
 * Created by mo on 2016/2/8.
 * 系统级别的配置信息
 */
var path = require('path');
var config = {

    debug: true,
    site_static_host        :           '',// 静态文件存储域名
    host                    :           'localhost',
    //mysql     配置，默认是本地
    mysql                   :{
        database:'baby',
        username:'root',
        password:'root',
        options:{
            host:'127.0.0.1',
            port:'3306',
            dialect : 'mysql',
            timezone:'+08:00',
            pool: {
                max: 5,
                min: 0,
                idle: 10000
            },
            define: {
                freezeTableName: true,
                timestamps:false
            },
            isolationLevel: Sequelize.Transaction.ISOLATION_LEVELS.SERIALIZABLE
        }//option end
    },
    //mongo     配置，默认是本地
    mongodb                 :           'mongodb://127.0.0.1/pets_club_dev',
    // redis    配置，默认是本地
    redis_host              :           '127.0.0.1',
    redis_port              :           6379,
    redis_db                :           0,
    //session   配置信息
    session_secret          :           'pets_club_secret',
    session_time            :           1000*60*10,
    auth_cookie_name        :           'pets_club_cookie',
    //七牛云存储的配置
    qn_access: {
        accessKey           :           'YYFZ8Mv3gARmlE8-MDc-zj8Yp0p__SoQj6u_Vjuc',
        secretKey           :           'Qpmmt-jax55bZxWVC0lLmE__QJgEAfAyGG1CUkVZ',
        bucket              :           'baby'
    },
    //监听端口
    port                    :           '80'
};
module.exports = config;
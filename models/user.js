/**
 * 用户信息模型
 * Created by mo on 2016/2/16.
 */
var mysqlCient = require('../models/index');
var User = mysqlCient.sequelize.define('user',
    {
        userName:{
            type:mysqlCient.Sequelize.STRING,
            field:"userName",
            comment:'登录的用户名,手机号,数据库提供默认的正则的验证.',
            validate:{
                is:/^(((13[0-9]{1})|(14[0-9]{1})|(15[0-9]{1})|(17[0-9]{1})|(18[0-9]{1}))+\d{8})$/
            }
        },
        userPwd:{
            type:mysqlCient.Sequelize.STRING,
            field:"userPwd",
            comment:'登录密码,MD5加密'
        },
        userNick:{
            type:mysqlCient.Sequelize.STRING,
            field:"userNick",
            comment:'用户的昵称'
        },
        sex:{
            type:mysqlCient.Sequelize.INTEGER,  //0 未知  1 男 2 女
            field:"sex",
            comment:'性别',
            defaultValue:0
        },
        birth:{
            type:mysqlCient.Sequelize.DATE,
            field:"birth",
            comment:'用户的出生日期',
            defaultValue:null
        },
        photo:{
            type:mysqlCient.Sequelize.STRING,
            field:"photo",
            comment:'用户的头像信息,除非特殊情况,一般都是hash码',
            defaultValue:'img_normal.png'
        },
        bgPhoto:{
            type:mysqlCient.Sequelize.STRING,
            field:"bgPhoto",
            comment:'用户的背景,除非特殊情况,一般都是hash码',
            defaultValue:'	01.jpg'
        },
        sign:{
            type:mysqlCient.Sequelize.STRING,
            field:"sign",
            comment:'个性签名',
            defaultValue:''
        },
        totalCnt:{
            type:mysqlCient.Sequelize.INTEGER,
            field:"totalCnt",
            comment:'个人魅力总值',
            defaultValue:0
        },
        todayCnt:{
            type:mysqlCient.Sequelize.INTEGER,
            field:"todayCnt",
            comment:'今天魅力值',
            defaultValue:0
        },
        nearUpdateDateTime:{
            type:mysqlCient.Sequelize.DATE,
            field:"nearUpdateDateTime",
            defaultValue:mysqlCient.Sequelize.NOW,
            comment:'最近一次更新时间.'
        },
        status:
        {
            type:mysqlCient.Sequelize.BOOLEAN,
            field:"status",
            defaultValue: true,
            comment:'用户状态'
        },
        created:{
            type:mysqlCient.Sequelize.DATE,
            field:"created",
            defaultValue:mysqlCient.Sequelize.NOW,
            comment:'注册的时间,注意是否是需要进行时区的设定.'
        }
    },
    {
        freezeTableName: true,  //冻结表名_使用自己设定的表名进行定义
        timestamps:false,       //排除掉,默认的 updateAt createdAt 两个字段
        tableName:'user'    //自定义表名
    }
);
exports.User        =   User;
/**
 * 系统日志模型
 * Created by mo on 2016/2/16.
 */
var mysqlCient   =   require("./index");
var SysLogger = mysqlCient.sequelize.define('sysLog',
    {
        userId:{
            type:mysqlCient.Sequelize.BIGINT,
            field:"userId",
            comment:'用户表的主键ID'
        },
        type:{
            type:mysqlCient.Sequelize.STRING,
            field:"type",   //1：注册  2：登录 3：
            comment:'日志类型'
        },
        content:{
            type:mysqlCient.Sequelize.STRING(1024),
            field:"content",
            comment:'日志内容'
        },
        created:{
            type:mysqlCient.Sequelize.DATE,
            field:"created",
            defaultValue:mysqlCient.Sequelize.NOW,
            comment:'创建时间.'
        }
    },
    {
        freezeTableName: true,  //冻结表名_使用自己设定的表名进行定义
        timestamps:false,       //排除掉,默认的 updateAt createdAt 两个字段
        tableName:'sysLog'    //自定义表名
    }
);
exports.SysLogger = SysLogger;
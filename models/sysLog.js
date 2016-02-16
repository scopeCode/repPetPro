/**
 * ϵͳ��־ģ��
 * Created by mo on 2016/2/16.
 */
var mysqlCient   =   require("./index");
var SysLogger = mysqlCient.sequelize.define('sysLog',
    {
        userId:{
            type:mysqlCient.Sequelize.BIGINT,
            field:"userId",
            comment:'�û��������ID'
        },
        type:{
            type:mysqlCient.Sequelize.STRING,
            field:"type",   //1��ע��  2����¼ 3��
            comment:'��־����'
        },
        content:{
            type:mysqlCient.Sequelize.STRING(1024),
            field:"content",
            comment:'��־����'
        },
        created:{
            type:mysqlCient.Sequelize.DATE,
            field:"created",
            defaultValue:mysqlCient.Sequelize.NOW,
            comment:'����ʱ��.'
        }
    },
    {
        freezeTableName: true,  //�������_ʹ���Լ��趨�ı������ж���
        timestamps:false,       //�ų���,Ĭ�ϵ� updateAt createdAt �����ֶ�
        tableName:'sysLog'    //�Զ������
    }
);
exports.SysLogger = SysLogger;
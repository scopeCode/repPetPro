/**
 * �û���Ϣģ��
 * Created by mo on 2016/2/16.
 */
var mysqlCient = require('../models/index');
var User = mysqlCient.sequelize.define('user',
    {
        userName:{
            type:mysqlCient.Sequelize.STRING,
            field:"userName",
            comment:'��¼���û���,�ֻ���,���ݿ��ṩĬ�ϵ��������֤.',
            validate:{
                is:/^(((13[0-9]{1})|(14[0-9]{1})|(15[0-9]{1})|(17[0-9]{1})|(18[0-9]{1}))+\d{8})$/
            }
        },
        userPwd:{
            type:mysqlCient.Sequelize.STRING,
            field:"userPwd",
            comment:'��¼����,MD5����'
        },
        userNick:{
            type:mysqlCient.Sequelize.STRING,
            field:"userNick",
            comment:'�û����ǳ�'
        },
        sex:{
            type:mysqlCient.Sequelize.INTEGER,  //0 δ֪  1 �� 2 Ů
            field:"sex",
            comment:'�Ա�',
            defaultValue:0
        },
        birth:{
            type:mysqlCient.Sequelize.DATE,
            field:"birth",
            comment:'�û��ĳ�������',
            defaultValue:null
        },
        photo:{
            type:mysqlCient.Sequelize.STRING,
            field:"photo",
            comment:'�û���ͷ����Ϣ,�����������,һ�㶼��hash��',
            defaultValue:'img_normal.png'
        },
        bgPhoto:{
            type:mysqlCient.Sequelize.STRING,
            field:"bgPhoto",
            comment:'�û��ı���,�����������,һ�㶼��hash��',
            defaultValue:'	01.jpg'
        },
        sign:{
            type:mysqlCient.Sequelize.STRING,
            field:"sign",
            comment:'����ǩ��',
            defaultValue:''
        },
        totalCnt:{
            type:mysqlCient.Sequelize.INTEGER,
            field:"totalCnt",
            comment:'����������ֵ',
            defaultValue:0
        },
        todayCnt:{
            type:mysqlCient.Sequelize.INTEGER,
            field:"todayCnt",
            comment:'��������ֵ',
            defaultValue:0
        },
        nearUpdateDateTime:{
            type:mysqlCient.Sequelize.DATE,
            field:"nearUpdateDateTime",
            defaultValue:mysqlCient.Sequelize.NOW,
            comment:'���һ�θ���ʱ��.'
        },
        status:
        {
            type:mysqlCient.Sequelize.BOOLEAN,
            field:"status",
            defaultValue: true,
            comment:'�û�״̬'
        },
        created:{
            type:mysqlCient.Sequelize.DATE,
            field:"created",
            defaultValue:mysqlCient.Sequelize.NOW,
            comment:'ע���ʱ��,ע���Ƿ�����Ҫ����ʱ�����趨.'
        }
    },
    {
        freezeTableName: true,  //�������_ʹ���Լ��趨�ı������ж���
        timestamps:false,       //�ų���,Ĭ�ϵ� updateAt createdAt �����ֶ�
        tableName:'user'    //�Զ������
    }
);
exports.User        =   User;
/**
 * 针对系统控制台的日志打印
 * Created by mo on 2016/2/15.
 */
var log4js = require('log4js');

exports.logger  =   function(name){
    name = name||'pet_debug';
    var logger = log4js.getLogger(name);
    logger.setLevel('DEBUG');
    return logger;
}
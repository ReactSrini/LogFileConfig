//npm install log4js
// Reading properties for log file from Config.json
  var config=require('./Config.json') ;
  var logFileType  = config.logFileType ; // type="file"
  var logLevel     = config.logLevel;
  var maxFileSize  = config.maxLogSize ; //Max size allowed for log file , in bytes
  var noOfBackups  = config.backups ; // number of backup files to be maintained

//Assiging currentdate as foldername, reading folder path and file name from config file
  var dt = new Date();
  var logFileName = `${config.folderPath}/${dt.getDate()}_${dt.getMonth()+1}_${dt.getFullYear()}/${config.logFileName}`;

//Assigning properties for log file
  const log4js=require('log4js');
  log4js.configure(
    {
     appenders: { Logger: { type: logFileType, filename: logFileName, maxLogSize: maxFileSize, backups : noOfBackups   } },
     categories: { default: { appenders: ['Logger'], level: logLevel } } // info or warn orr error
    });

  const logger = log4js.getLogger('Logger');
  logger.info('Reading logger poperties from config file');
    
  console.log(`Log file has been created in  ${logFileName}`) ;
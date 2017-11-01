const colors = require('colors');

class Logger {
  static logerr(msg) {
    const now = new Date().toString();
    const fmtString = `[Producer][${now}]`;
    console.log(fmtString.red, msg);  
  }
  
  static loginfo(msg) {
    const now = new Date().toString();
    const fmtString = `[Producer][${now}]`;
    console.log(fmtString.green, msg);    
  }
  
  static logwarn(msg) {
    const now = new Date().toString();
    const fmtString = `[Producer][${now}]`;
    console.log(fmtString.yellow, msg);
  }
}

module.exports = Logger;
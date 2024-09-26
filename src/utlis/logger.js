// utils.js

// Define different log levels
const LOG_LEVELS = {
  log: 'LOG',
  info: 'INFO',
  warn: 'WARN',
  error: 'ERROR',
  debug: 'DEBUG',
};

// Customizable print function
const print = (message, level = 'log', component = 'General') => {
  if (__DEV__ || level === 'error') {
    // Always log errors, even in production
    const timestamp = new Date().toISOString(); // Add timestamp

    switch (level) {
      case 'log':
        console.log(
          `[${LOG_LEVELS.log}] [${timestamp}] [${component}]:`,
          message,
        );
        break;
      case 'info':
        console.info(
          `[${LOG_LEVELS.info}] [${timestamp}] [${component}]:`,
          message,
        );
        break;
      case 'warn':
        console.warn(
          `[${LOG_LEVELS.warn}] [${timestamp}] [${component}]:`,
          message,
        );
        break;
      case 'error':
        console.error(
          `[${LOG_LEVELS.error}] [${timestamp}] [${component}]:`,
          message,
        );
        break;
      case 'debug':
        console.debug(
          `[${LOG_LEVELS.debug}] [${timestamp}] [${component}]:`,
          message,
        );
        break;
      default:
        console.log(
          `[${LOG_LEVELS.log}] [${timestamp}] [${component}]:`,
          message,
        );
    }
  }
};

export default print;

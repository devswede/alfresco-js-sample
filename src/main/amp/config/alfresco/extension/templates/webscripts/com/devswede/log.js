/*globals logger */
/**
 * Core logging support
 */


/**
 * Log namespace
 */
devswede.log = (function(logger) {

  /**
   * Log debug messages
   * @param {string} msg The log message.
   * @private
   */
  function _log(msg) {
    if (logger.isDebugLoggingEnabled) {
      logger.debug(msg);
    }
  }

  /**
   * Log information messages
   * @param {string} msg The log message.
   * @private
   */
  function _info(msg) {
    if (logger.isInfoLoggingEnabled) {
      logger.info(msg);
    }
  }

  /**
   * Log error messages
   * @param {string} msg The log message.
   * @private
   */
  function _error(msg) {
    if (logger.isErrorLoggingEnabled) {
      logger.error(msg);
    }
  }

  //Module interface
  return {
    log: _log,
    info: _info,
    error: _error
  };

})(logger);

/*globals model, status, jsonUtils */
/**
 * Core Api functions
 */


/**
 * Root devswede namespace
 */
devswede = devswede || {};


/**
 * Api namespace
 */
devswede.api = (function(model, status, jsonUtils) {

  /**
   * Parse and send error response.
   * @param {Object} err Error thrown.
   * @private
   */
  function sendErrorResponse(err) {
    if (err.httpCode) {
      status.code = err.httpCode;
    } else {
      status.code = 500;
    }
    status.message = jsonUtils.encodeJSONString(err.message);
    if (status.code >= 500) {
      // Server error
      devswede.log.error('Server error (' + status.code + '): ' + status.message);
    } else {
      // Request error
      devswede.log.info('Invalid request (' + status.code + '): ' + status.message);
    }
    status.redirect = true;
  }

  /**
   * Parse and send response.
   * @param {string} code Http response Code.
   * @param {string} message Response message.
   * @param {string} nodeId Affected content node id.
   * @private
   */
  function sendResponse(code, message, nodeId) {
    status.code = code;
    status.message = jsonUtils.encodeJSONString(message);
    model.details = {
      id: nodeId
    };
    devswede.log.log('Response sent (' + status.code + '): ' + status.message);
    status.redirect = true;
  }

  // Module interface
  return {
    sendResponse: sendResponse,
    sendErrorResponse: sendErrorResponse
  };

})(model, status, jsonUtils);

/*globals model */
/**
 * Core devswede errors
 */


/**
 * Errors namespace
 */
devswede.errors = (function(model) {

  //Reserved http error codes
  var HTTP_CODES = {
    jsonParse: 400,
    validation: 400,
    notFound: 404
  };

  function jsonParseError() {
    this.name = 'JsonParseError';
    this.message = ('Malformed JSON request body');
    this.httpCode = HTTP_CODES.jsonParse;
    model.details = {
      type: this.name
    };
  }
  jsonParseError.prototype = new Error();

  function notFoundError(message, id) {
    this.name = 'NotFoundError';
    this.message = (message || '');
    this.httpCode = HTTP_CODES.notFound;
    model.details = {
      type: this.name,
      id: id
    };
  }
  notFoundError.prototype = new Error();

  function validationError(message, field) {
    this.name = 'ValidationError';
    this.message = (message || '');
    this.httpCode = HTTP_CODES.validation;
    model.details = {
      type: this.name,
      field: field
    };
  }
  validationError.prototype = new Error();

  //Module interface
  return {
    JsonParseError: jsonParseError,
    NotFoundError: notFoundError,
    ValidationError: validationError
  };

})(model);

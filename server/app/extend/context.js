'use strict';

module.exports = {
  success(data = {}) {
    this.body = {
      success: true,
      data,
    };
  },

  fail(message = '', data) {
    this.body = {
      success: false,
      message,
      data,
    };
  },
};

const addon = require('../build/Release/node_mac_oslog.node');
const util = require('node:util');
exports.os_log_with_type = os_log_with_type;
exports.os_log = os_log;
exports.os_log_info = os_log_info;
exports.os_log_debug = os_log_debug;
exports.os_log_error = os_log_error;
exports.os_log_fault = os_log_fault;
exports.OS_LOG_TYPE_DEFAULT = 0x00;
exports.OS_LOG_TYPE_INFO = 0x01;
exports.OS_LOG_TYPE_DEBUG = 0x02;
exports.OS_LOG_TYPE_ERROR = 0x10;
exports.OS_LOG_TYPE_FAULT = 0x11;
function os_log_with_type(type, fmt, ...args) {
  const s = util.format(fmt, ...args);
  return addon.os_log_with_type(type, s);
}
function os_log(fmt, ...args) {
  const s = util.format(fmt, ...args);
  return addon.os_log(s);
}
function os_log_info(fmt, ...args) {
  const s = util.format(fmt, ...args);
  return addon.os_log_info(s);
}
function os_log_debug(fmt, ...args) {
  const s = util.format(fmt, ...args);
  return addon.os_log_debug(s);
}
function os_log_error(fmt, ...args) {
  const s = util.format(fmt, ...args);
  return addon.os_log_error(s);
}
function os_log_fault(fmt, ...args) {
  const s = util.format(fmt, ...args);
  return addon.os_log_fault(s);
}

const addon = require('../build/Release/node_oslog.node');
const util = require('node:util');

type OS_LOG_TYPE_DEFAULT = 0x00;
type OS_LOG_TYPE_INFO = 0x01;
type OS_LOG_TYPE_DEBUG = 0x02;
type OS_LOG_TYPE_ERROR = 0x10;
type OS_LOG_TYPE_FAULT = 0x11;

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

type OSLogType =
  | OS_LOG_TYPE_DEFAULT
  | OS_LOG_TYPE_INFO
  | OS_LOG_TYPE_DEBUG
  | OS_LOG_TYPE_ERROR
  | OS_LOG_TYPE_FAULT;

type log_error = string | undefined;

function os_log_with_type(
  type: OSLogType,
  fmt: string,
  ...args: any[]
): log_error {
  const s = util.format(fmt, ...args);
  return addon.os_log_with_type(type, s);
}
function os_log(fmt: string, ...args: any[]): log_error {
  const s = util.format(fmt, ...args);
  return addon.os_log(s);
}
function os_log_info(fmt: string, ...args: any[]): log_error {
  const s = util.format(fmt, ...args);
  return addon.os_log_info(s);
}
function os_log_debug(fmt: string, ...args: any[]): log_error {
  const s = util.format(fmt, ...args);
  return addon.os_log_debug(s);
}
function os_log_error(fmt: string, ...args: any[]): log_error {
  const s = util.format(fmt, ...args);
  return addon.os_log_error(s);
}
function os_log_fault(fmt: string, ...args: any[]): log_error {
  const s = util.format(fmt, ...args);
  return addon.os_log_fault(s);
}

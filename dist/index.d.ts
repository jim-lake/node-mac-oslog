declare const addon: any;
declare const util: any;
type OS_LOG_TYPE_DEFAULT = 0x00;
type OS_LOG_TYPE_INFO = 0x01;
type OS_LOG_TYPE_DEBUG = 0x02;
type OS_LOG_TYPE_ERROR = 0x10;
type OS_LOG_TYPE_FAULT = 0x11;
type OSLogType =
  | OS_LOG_TYPE_DEFAULT
  | OS_LOG_TYPE_INFO
  | OS_LOG_TYPE_DEBUG
  | OS_LOG_TYPE_ERROR
  | OS_LOG_TYPE_FAULT;
type log_error = string | undefined;
declare function os_log_with_type(
  type: OSLogType,
  fmt: string,
  ...args: any[]
): log_error;
declare function os_log(fmt: string, ...args: any[]): log_error;
declare function os_log_info(fmt: string, ...args: any[]): log_error;
declare function os_log_debug(fmt: string, ...args: any[]): log_error;
declare function os_log_error(fmt: string, ...args: any[]): log_error;
declare function os_log_fault(fmt: string, ...args: any[]): log_error;

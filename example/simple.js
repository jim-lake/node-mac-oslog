const {
  os_log_with_type,
  os_log,
  os_log_info,
  os_log_debug,
  os_log_error,
  os_log_fault,
  OS_LOG_TYPE_DEFAULT,
  OS_LOG_TYPE_INFO,
  OS_LOG_TYPE_DEBUG,
  OS_LOG_TYPE_ERROR,
  OS_LOG_TYPE_FAULT,
} = require('../dist/index');

_test(os_log, 'NODE_OS_LOG_SIMPLE_TEST: default os_log call');
_test(os_log_info, 'NODE_OS_LOG_SIMPLE_TEST: default os_log_info call');
_test(os_log_debug, 'NODE_OS_LOG_SIMPLE_TEST: default os_log_debug call');
_test(os_log_error, 'NODE_OS_LOG_SIMPLE_TEST: default os_log_error call');
_test(os_log_fault, 'NODE_OS_LOG_SIMPLE_TEST: default os_log_fault call');
_test(
  os_log,
  'NODE_OS_LOG_SIMPLE_TEST: default os_log call with args',
  1,
  'foo'
);

_test_type(
  OS_LOG_TYPE_DEFAULT,
  'NODE_OS_LOG_SIMPLE_TEST: log with type default'
);
_test_type(OS_LOG_TYPE_INFO, 'NODE_OS_LOG_SIMPLE_TEST: log with type info');
_test_type(OS_LOG_TYPE_DEBUG, 'NODE_OS_LOG_SIMPLE_TEST: log with type debug');
_test_type(OS_LOG_TYPE_ERROR, 'NODE_OS_LOG_SIMPLE_TEST: log with type error');
_test_type(OS_LOG_TYPE_FAULT, 'NODE_OS_LOG_SIMPLE_TEST: log with type fault');

function _test(func, ...args) {
  console.log('_test:', ...args);
  const err = func(...args);
  if (err) {
    console.log('_test error:', err);
  }
}
function _test_type(type, ...args) {
  console.log('_test_type:', type, ...args);
  const err = os_log_with_type(type, ...args);
  if (err) {
    console.log('_test_type error:', err);
  }
}

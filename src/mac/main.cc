#include <napi.h>
#include <os/log.h>
#include <string>

using namespace Napi;

static Value LogWithType(const Napi::CallbackInfo &info) {
  const Napi::Env env = info.Env();
  Value ret = env.Undefined();

  if (info.Length() < 2) {
    ret = String::New(env, "Expected 2 arguments");
  } else if (!info[0].IsNumber()) {
    ret = String::New(env, "Expected number arg 0");
  } else if (!info[1].IsString()) {
    ret = String::New(env, "Expected string arg 1");
  } else {
    const os_log_type_t type =
        (os_log_type_t)info[0].As<Number>().Uint32Value();
    const auto log_line = info[1].As<String>().Utf8Value();
    os_log_with_type(OS_LOG_DEFAULT, type, "%{public}s", log_line.c_str());
  }
  return ret;
}
static Value _log_with_type(const Napi::CallbackInfo &info,
                            os_log_type_t type) {
  const Napi::Env env = info.Env();
  Value ret = env.Undefined();

  if (info.Length() < 1) {
    ret = String::New(env, "Expected 1 argument");
  } else if (!info[0].IsString()) {
    ret = String::New(env, "Expected string arg 0");
  } else {
    const auto log_line = info[0].As<String>().Utf8Value();
    os_log_with_type(OS_LOG_DEFAULT, type, "%{public}s", log_line.c_str());
  }
  return ret;
}
static Value LogDefault(const Napi::CallbackInfo &info) {
  return _log_with_type(info, OS_LOG_TYPE_DEFAULT);
}
static Value LogInfo(const Napi::CallbackInfo &info) {
  return _log_with_type(info, OS_LOG_TYPE_INFO);
}
static Value LogDebug(const Napi::CallbackInfo &info) {
  return _log_with_type(info, OS_LOG_TYPE_DEBUG);
}
static Value LogError(const Napi::CallbackInfo &info) {
  return _log_with_type(info, OS_LOG_TYPE_ERROR);
}
static Value LogFault(const Napi::CallbackInfo &info) {
  return _log_with_type(info, OS_LOG_TYPE_FAULT);
}
Object Init(Napi::Env env, Object exports) {
  printf("OS_LOG_TYPE_DEBUG: %d\n", OS_LOG_TYPE_DEBUG);
  printf("OS_LOG_TYPE_INFO: %d\n", OS_LOG_TYPE_INFO);
  printf("OS_LOG_TYPE_DEFAULT: %d\n", OS_LOG_TYPE_DEFAULT);
  printf("OS_LOG_TYPE_ERROR: %d\n", OS_LOG_TYPE_ERROR);
  printf("OS_LOG_TYPE_FAULT: %d\n", OS_LOG_TYPE_FAULT);

  exports.Set("os_log_with_type", Function::New(env, LogWithType));
  exports.Set("os_log", Function::New(env, LogDefault));
  exports.Set("os_log_info", Function::New(env, LogInfo));
  exports.Set("os_log_debug", Function::New(env, LogDebug));
  exports.Set("os_log_error", Function::New(env, LogError));
  exports.Set("os_log_fault", Function::New(env, LogFault));
  return exports;
}
NODE_API_MODULE(NODE_GYP_MODULE_NAME, Init)

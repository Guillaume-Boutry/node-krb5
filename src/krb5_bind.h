#include <napi.h>
#include <krb5.h>
//For debug
#include <iostream>
#include <assert.h>


Napi::Value _krb5_build_principal(const Napi::CallbackInfo& info);
Napi::Value _krb5_cc_default(const Napi::CallbackInfo& info);
Napi::Value _krb5_cc_get_name_sync(const Napi::CallbackInfo& info);
Napi::Value _krb5_cc_initialize(const Napi::CallbackInfo& info);
Napi::Value _krb5_cc_initialize_sync(const Napi::CallbackInfo& info);
Napi::Value _krb5_free_context(const Napi::CallbackInfo& info);
Napi::Value _krb5_get_default_realm(const Napi::CallbackInfo& info);
Napi::Value _krb5_init_context(const Napi::CallbackInfo& info);

// @ts-ignore
/* eslint-disable */
import { request } from "@/utils/http";

/** 图形验证码 图形验证码 POST /public/base/captcha */
export async function Captcha(
  body: API.Captcha,
  options?: { [key: string]: any }
) {
  return request<API.Response>("/public/base/captcha", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: body,
    ...(options || {}),
  });
}

/** 初始化数据 初始化数据 GET /public/base/init_data */
export async function InitData(options?: { [key: string]: any }) {
  return request<API.Response>("/public/base/init_data", {
    method: "GET",
    ...(options || {}),
  });
}

/** 获取用户配置 GET /user/user_config */
export async function getUserUserConfig(options?: { [key: string]: any }) {
  return request<API.Response>("/user/user_config", {
    method: "GET",
    ...(options || {}),
  });
}

/** 修改用户配置 PUT /user/user_config */
export async function putUserUserConfig(
  body: API.UserConfig,
  options?: { [key: string]: any }
) {
  return request<string>("/user/user_config", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    data: body,
    ...(options || {}),
  });
}

/** 设置用户配置 POST /user/user_config */
export async function postUserUserConfig(
  body: API.UserConfig,
  options?: { [key: string]: any }
) {
  return request<string>("/user/user_config", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: body,
    ...(options || {}),
  });
}

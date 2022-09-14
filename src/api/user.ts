// @ts-ignore
/* eslint-disable */
import {request} from "@/utils/http";

/** 用户登录 POST /public/base/login */
export async function postPublicBaseLogin(
    body: API.LoginRequest,
    options?: { [key: string]: any }
) {
  return request<API.Response & {
      code?: number;
      data?: API.User;
      msg?: string;
      success?: boolean;
  }>("/public/base/login", {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
      },
      data: body,
      ...(options || {}),
  });
}

/** 用户注册 POST /public/base/register */
export async function postPublicBaseRegister(
    body: API.User,
    options?: { [key: string]: any }
) {
    return request<API.Response & {
        code?: number;
        data?: API.User;
        msg?: string;
        success?: boolean;
    }>("/public/base/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        data: body,
        ...(options || {}),
    });
}

// @ts-ignore
/* eslint-disable */
import {request} from '@/utils/http';

/** 用户登录 POST /public/base/login */
export async function postLogin(body: API.LoginRequest, options?: { [key: string]: any }) {
    return request<API.Response & { code?: number; data?: API.SysUser; msg?: string }>(
        '/public/base/login',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            data: body,
            ...(options || {}),
        },
    );
}

/** 用户注册 POST /public/base/register */
export async function postRegister(body: API.SysUser, options?: { [key: string]: any }) {
    return request<API.Response & { code?: number; data?: API.SysUser; msg?: string }>(
        '/public/base/register',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            data: body,
            ...(options || {}),
        },
    );
}

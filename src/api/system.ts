// @ts-ignore
/* eslint-disable */
import {request} from '@/utils/http';

/** 图形验证码 图形验证码 POST /public/base/captcha */
export async function Captcha(body: API.Captcha, options?: { [key: string]: any }) {
    return request<API.Response>('/public/base/captcha', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        data: body,
        ...(options || {}),
    });
}

/** 初始化数据 初始化数据 GET /public/base/init_data */
export async function InitData(options?: { [key: string]: any }) {
    return request<API.Response>('/public/base/init_data', {
        method: 'GET',
        ...(options || {}),
    });
}

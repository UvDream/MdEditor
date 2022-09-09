// @ts-ignore
/* eslint-disable */
import {request} from '@/utils/http';

/** 创建账本 POST /ledger/create */
export async function postLedgerCreate(body: API.Ledger, options?: { [key: string]: any }) {
    return request<API.Response & { code?: number; data?: API.Ledger; msg?: string; success?: boolean }>('/ledger/create', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        data: body,
        ...(options || {}),
    });
}

/** 删除账本 DELETE /ledger/delete */
export async function deleteLedger__openAPI__delete(
    // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
    params: API.deleteLedger_openAPI_deleteParams,
    options?: { [key: string]: any },
) {
    return request<API.Response & { code?: number; msg?: string; success?: boolean }>(
        '/ledger/delete',
        {
            method: 'DELETE',
            params: {
                ...params,
            },
            ...(options || {}),
        },
    );
}

/** 获取账本详情 GET /ledger/detail */
export async function getLedgerDetail(
    // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
    params: API.getLedgerDetailParams,
    options?: { [key: string]: any },
) {
    return request<API.Response & { code?: number; data?: API.Ledger; msg?: string; success?: boolean }>('/ledger/detail', {
        method: 'GET',
        params: {
            ...params,
        },
        ...(options || {}),
    });
}

/** 获取账本列表 GET /ledger/list */
export async function getLedgerList(
    // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
    params: API.getLedgerListParams,
    options?: { [key: string]: any },
) {
    return request<API.Response & { code?: number; data?: API.Ledger[]; msg?: string; success?: boolean }>('/ledger/list', {
        method: 'GET',
        params: {
            ...params,
        },
        ...(options || {}),
    });
}

/** 更新账本 PUT /ledger/update */
export async function putLedgerUpdate(body: API.Ledger, options?: { [key: string]: any }) {
    return request<API.Response & { code?: number; data?: API.Ledger; msg?: string; success?: boolean }>('/ledger/update', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        data: body,
        ...(options || {}),
    });
}

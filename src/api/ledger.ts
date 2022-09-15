// @ts-ignore
/* eslint-disable */
import {request} from "@/utils/http";

/** 创建账单 POST /ledger/bill/create */
export async function postLedgerBillCreate(
    body: API.Bill,
    options?: { [key: string]: any }
) {
    return request<API.Response & {
        code?: number;
        data?: API.Bill;
        msg?: string;
        success?: boolean;
    }>("/ledger/bill/create", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        data: body,
        ...(options || {}),
    });
}

/** 删除账单 DELETE /ledger/bill/delete */
export async function deleteLedgerBill__openAPI__delete(
    // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
    params: API.deleteLedgerBill_openAPI_deleteParams,
    options?: { [key: string]: any }
) {
    return request<API.Response & { code?: number; msg?: string; success?: boolean }>("/ledger/bill/delete", {
        method: "DELETE",
        params: {
            ...params,
        },
        ...(options || {}),
    });
}

/** 获取账单列表 GET /ledger/bill/list */
export async function getLedgerBillList(options?: { [key: string]: any }) {
    return request<API.Response & {
        code?: number;
        data?: API.Bill[];
        msg?: string;
        success?: boolean;
    }>("/ledger/bill/list", {
        method: "GET",
        ...(options || {}),
    });
}

/** 更新账单 PUT /ledger/bill/update */
export async function putLedgerBillUpdate(
    body: API.Bill,
    options?: { [key: string]: any }
) {
    return request<API.Response & {
        code?: number;
        data?: API.Bill;
        msg?: string;
        success?: boolean;
    }>("/ledger/bill/update", {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        data: body,
        ...(options || {}),
    });
}

/** 创建账本分类 POST /ledger/category/create */
export async function postLedgerCategoryCreate(
    body: API.LedgerCategory,
    options?: { [key: string]: any }
) {
    return request<API.Response & {
        code?: number;
        data?: API.LedgerCategory;
        msg?: string;
        success?: boolean;
    }>("/ledger/category/create", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        data: body,
        ...(options || {}),
    });
}

/** 删除账本分类 DELETE /ledger/category/delete */
export async function deleteLedgerCategory__openAPI__delete(
    // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
    params: API.deleteLedgerCategory_openAPI_deleteParams,
    options?: { [key: string]: any }
) {
    return request<API.Response & { code?: number; msg?: string; success?: boolean }>("/ledger/category/delete", {
        method: "DELETE",
        params: {
            ...params,
        },
        ...(options || {}),
    });
}

/** 获取账本分类列表 GET /ledger/category/list */
export async function getLedgerCategoryList(
    // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
    params: API.getLedgerCategoryListParams,
    options?: { [key: string]: any }
) {
    return request<API.Response & {
        code?: number;
        data?: API.LedgerCategory[];
        msg?: string;
        success?: boolean;
    }>("/ledger/category/list", {
        method: "GET",
        params: {
            ...params,
        },
        ...(options || {}),
    });
}

/** 更新账本分类 PUT /ledger/category/update */
export async function putLedgerCategoryUpdate(
    body: API.LedgerCategory,
    options?: { [key: string]: any }
) {
    return request<API.Response & {
        code?: number;
        data?: API.LedgerCategory;
        msg?: string;
        success?: boolean;
    }>("/ledger/category/update", {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        data: body,
        ...(options || {}),
    });
}

/** 创建账本 POST /ledger/create */
export async function postLedgerCreate(
    body: API.Ledger,
    options?: { [key: string]: any }
) {
    return request<API.Response & {
        code?: number;
        data?: API.Ledger;
        msg?: string;
        success?: boolean;
    }>("/ledger/create", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        data: body,
        ...(options || {}),
    });
}

/** 删除账本 DELETE /ledger/delete */
export async function deleteLedger__openAPI__delete(
    // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
    params: API.deleteLedger_openAPI_deleteParams,
    options?: { [key: string]: any }
) {
    return request<API.Response & { code?: number; msg?: string; success?: boolean }>("/ledger/delete", {
        method: "DELETE",
        params: {
            ...params,
        },
        ...(options || {}),
    });
}

/** 获取账本列表 GET /ledger/list */
export async function getLedgerList(options?: { [key: string]: any }) {
    return request<API.Response & {
        code?: number;
        data?: API.Ledger[];
        msg?: string;
        success?: boolean;
    }>("/ledger/list", {
        method: "GET",
        ...(options || {}),
    });
}

/** 创建账本标签 POST /ledger/tag/create */
export async function postLedgerTagCreate(
    body: API.LedgerTag,
    options?: { [key: string]: any }
) {
    return request<API.Response & {
        code?: number;
        data?: API.LedgerTag;
        msg?: string;
        success?: boolean;
    }>("/ledger/tag/create", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        data: body,
        ...(options || {}),
    });
}

/** 删除账本标签 DELETE /ledger/tag/delete */
export async function deleteLedgerTag__openAPI__delete(
    // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
    params: API.deleteLedgerTag_openAPI_deleteParams,
    options?: { [key: string]: any }
) {
    return request<API.Response & { code?: number; msg?: string; success?: boolean }>("/ledger/tag/delete", {
        method: "DELETE",
        params: {
            ...params,
        },
        ...(options || {}),
    });
}

/** 获取账本标签列表 GET /ledger/tag/list */
export async function getLedgerTagList(options?: { [key: string]: any }) {
    return request<API.Response & {
        code?: number;
        data?: API.LedgerTag[];
        msg?: string;
        success?: boolean;
    }>("/ledger/tag/list", {
        method: "GET",
        ...(options || {}),
    });
}

/** 更新账本标签 PUT /ledger/tag/update */
export async function putLedgerTagUpdate(
    body: API.LedgerTag,
    options?: { [key: string]: any }
) {
    return request<API.Response & {
        code?: number;
        data?: API.LedgerTag;
        msg?: string;
        success?: boolean;
    }>("/ledger/tag/update", {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        data: body,
        ...(options || {}),
    });
}

/** 更新账本 PUT /ledger/update */
export async function putLedgerUpdate(
    body: API.Ledger,
    options?: { [key: string]: any }
) {
    return request<API.Response & {
        code?: number;
        data?: API.Ledger;
        msg?: string;
        success?: boolean;
    }>("/ledger/update", {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        data: body,
        ...(options || {}),
    });
}

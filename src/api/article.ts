// @ts-ignore
/* eslint-disable */
import {request} from '@/utils/http';

/** 创建文章 POST /article/create */
export async function postArticleCreate(body: API.Article, options?: { [key: string]: any }) {
    return request<API.Response>('/article/create', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        data: body,
        ...(options || {}),
    });
}

/** 删除文章 DELETE /article/delete */
export async function deleteArticle__openAPI__delete(
    // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
    params: API.deleteArticle_openAPI_deleteParams,
    options?: { [key: string]: any },
) {
    return request<API.Response>('/article/delete', {
        method: 'DELETE',
        params: {
            ...params,
        },
        ...(options || {}),
    });
}

/** 查询文章详情 GET /article/detail */
export async function getArticleDetail(
    // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
    params: API.getArticleDetailParams,
    options?: { [key: string]: any },
) {
    return request<API.Response>('/article/detail', {
        method: 'GET',
        params: {
            ...params,
        },
        ...(options || {}),
    });
}

/** 查询文章历史记录 GET /article/history */
export async function getArticleHistory(
    // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
    params: API.getArticleHistoryParams,
    options?: { [key: string]: any },
) {
    return request<API.Response>('/article/history', {
        method: 'GET',
        params: {
            ...params,
        },
        ...(options || {}),
    });
}

/** 查询文章 GET /article/list */
export async function getArticleList(
    // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
    params: API.getArticleListParams,
    options?: { [key: string]: any },
) {
    return request<API.Response>('/article/list', {
        method: 'GET',
        params: {
            ...params,
        },
        ...(options || {}),
    });
}

/** 修改文章 PUT /article/update */
export async function putArticleUpdate(body: API.Article, options?: { [key: string]: any }) {
    return request<API.Response>('/article/update', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        data: body,
        ...(options || {}),
    });
}

/** 查询文章详情 GET /public/base/detail */
export async function getPublicBaseDetail(
    // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
    params: API.getPublicBaseDetailParams,
    options?: { [key: string]: any },
) {
    return request<API.Response>('/public/base/detail', {
        method: 'GET',
        params: {
            ...params,
        },
        ...(options || {}),
    });
}

/** 查询文章markdown内容 GET /public/base/md */
export async function getPublicBaseMd(
    // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
    params: API.getPublicBaseMdParams,
    options?: { [key: string]: any },
) {
    return request<API.Response>('/public/base/md', {
        method: 'GET',
        params: {
            ...params,
        },
        ...(options || {}),
    });
}

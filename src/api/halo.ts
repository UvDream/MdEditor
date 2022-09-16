// @ts-ignore
/* eslint-disable */
import { request } from '@/utils/http';

/** 获取分类 GET /halo/category */
export async function getHaloCategory(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getHaloCategoryParams,
  options?: { [key: string]: any },
) {
  return request<API.Response>('/halo/category', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 保存文章 POST /halo/save */
export async function postHaloSave(
  body: API.ArticleHaloResponse,
  options?: { [key: string]: any },
) {
  return request<API.Response>('/halo/save', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取标签 GET /halo/tags */
export async function getHaloTags(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getHaloTagsParams,
  options?: { [key: string]: any },
) {
  return request<API.Response>('/halo/tags', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取token GET /halo/token */
export async function getHaloToken(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getHaloTokenParams,
  options?: { [key: string]: any },
) {
  return request<API.Response>('/halo/token', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

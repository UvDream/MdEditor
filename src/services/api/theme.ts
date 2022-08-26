// @ts-ignore
/* eslint-disable */
import { request } from '@/utils/http';

/** 主题创建 主题创建 POST /theme/create */
export async function postThemeCreate(body: API.Theme, options?: { [key: string]: any }) {
  return request<API.Response>('/theme/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 主题删除 主题删除 DELETE /theme/delete */
export async function deleteTheme__openAPI__delete(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteTheme_openAPI_deleteParams,
  options?: { [key: string]: any },
) {
  return request<API.Response>('/theme/delete', {
    method: 'DELETE',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 主题详情 主题详情 GET /theme/detail */
export async function getThemeDetail(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getThemeDetailParams,
  options?: { [key: string]: any },
) {
  return request<API.Response>('/theme/detail', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 主题列表 主题列表 GET /theme/list */
export async function getThemeList(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getThemeListParams,
  options?: { [key: string]: any },
) {
  return request<API.Response>('/theme/list', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 查询公开主题 查询公开主题 GET /theme/public */
export async function getThemePublic(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getThemePublicParams,
  options?: { [key: string]: any },
) {
  return request<API.Response>('/theme/public', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 主题更新 主题更新 PUT /theme/update */
export async function putThemeUpdate(body: API.Theme, options?: { [key: string]: any }) {
  return request<API.Response>('/theme/update', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

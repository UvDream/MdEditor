// @ts-ignore
/* eslint-disable */
import { request } from '@/utils/http';

/** 创建Category 创建Category POST /category/create */
export async function postCategoryCreate(body: API.Category, options?: { [key: string]: any }) {
  return request<API.Response>('/category/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除Category 删除Category DELETE /category/delete */
export async function deleteCategory__openAPI__delete(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteCategory_openAPI_deleteParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.Response>('/category/delete', {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 查询Category 查询Category GET /category/list */
export async function getCategoryList(options?: { [key: string]: any }) {
  return request<API.Response>('/category/list', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 修改Category 修改Category PUT /category/update */
export async function putCategoryUpdate(body: API.Category, options?: { [key: string]: any }) {
  return request<API.Response>('/category/update', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

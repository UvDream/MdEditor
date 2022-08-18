// @ts-ignore
/* eslint-disable */
import { request } from '@/utils/http';

/** 文件删除 DELETE /file/delete/${param0} */
export async function deleteFile__openAPI__deleteId(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteFile_openAPI_deleteIdParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<string>(`/file/delete/${param0}`, {
    method: 'DELETE',
    params: {
      ...queryParams,
    },
    ...(options || {}),
  });
}

/** 文件列表 GET /file/list */
export async function getFileList(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getFileListParams,
  options?: { [key: string]: any },
) {
  return request<string>('/file/list', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 文件上传 POST /file/upload */
export async function postFileUpload(body: {}, file?: File, options?: { [key: string]: any }) {
  const formData = new FormData();

  if (file) {
    formData.append('file', file);
  }

  Object.keys(body).forEach((ele) => {
    const item = (body as any)[ele];

    if (item !== undefined && item !== null) {
      formData.append(
        ele,
        typeof item === 'object' && !(item instanceof File) ? JSON.stringify(item) : item,
      );
    }
  });

  return request<string>('/file/upload', {
    method: 'POST',
    data: formData,
    requestType: 'form',
    ...(options || {}),
  });
}

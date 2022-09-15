// @ts-ignore
/* eslint-disable */
import {request} from "@/utils/http";

/** 创建tag 创建tag POST /tag/create */
export async function postTagCreate(
    body: API.Tag,
    options?: { [key: string]: any }
) {
    return request<API.Response>("/tag/create", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        data: body,
        ...(options || {}),
    });
}

/** 删除tag 删除tag DELETE /tag/delete */
export async function deleteTag__openAPI__delete(
    // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
    params: API.deleteTag_openAPI_deleteParams,
    options?: { [key: string]: any }
) {
    const {id: param0, ...queryParams} = params;
    return request<API.Response>("/tag/delete", {
        method: "DELETE",
        params: {...queryParams},
        ...(options || {}),
    });
}

/** 查询tag 查询tag GET /tag/list */
export async function getTagList(options?: { [key: string]: any }) {
    return request<API.Response>("/tag/list", {
        method: "GET",
        ...(options || {}),
    });
}

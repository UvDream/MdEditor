import request from "@/api/request";

export const OtherApi = {
    fileList: (params: Object) => {
        return request({
            url: "/file/list",
            method: "GET",
            params,
        })
    },
    deleteFile:(params:Object)=>{
        return request({
            url: "/file/delete",
            method: "DELETE",
            params,
        })
    },
    themeList: (params: Object) => {
        return request({
            url: "/theme/list",
            method: "GET",
            params,
        })
    },
    publicTheme:(params: Object) => {
        return request({
            url: "/theme/public",
            method: "GET",
            params,
        })
    },
    themeDetail: (params: Object) => {
        return request({
            url: "/theme/detail",
            method: "GET",
            params,
        })
    }
}

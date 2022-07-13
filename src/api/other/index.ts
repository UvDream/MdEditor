import request from "@/api/request";

export const OtherApi = {
    fileList: (params: Object) => {
        return request({
            url: "/file/list",
            method: "GET",
            params,
        })
    }
}

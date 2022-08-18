import request, {ResponseType} from "@/utils/request";

export const ArticleApi = {
    list: (params: object) => {
        return request({
            url: "/article/list",
            method: "GET",
            params,
        });
    },
    history: (params: object) => {
        return request({
            url: "/article/history",
            method: "GET",
            params,
        });
    },
    detail: (params: object) => {
        return request({
            url: "/article/detail",
            method: "GET",
            params,
        });
    },
    create: (data: Object) => {
        return request({
            url: "/article/create",
            method: "POST",
            data,
        })
    },
    update: (data: Object) => {
        return request({
            url: "/article/update",
            method: "PUT",
            data,
        })
    },
    delete: (params: Object) => {
        return request({
            url: "/article/delete",
            method: "DELETE",
            params,
        })
    },
    tagList: (params: object) => {
        return request({
            url: "/tag/list",
            method: "GET",
            params,
        })
    },
    categoryList: (params: object) => {
        return request({
            url: "/category/list",
            method: "GET",
            params,
        })
    }
}


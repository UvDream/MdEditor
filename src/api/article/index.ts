import request from "../request";

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
    detail:(params:object)=>{
        return request({
            url: "/article/detail",
            method: "GET",
            params,
        });
    }
}

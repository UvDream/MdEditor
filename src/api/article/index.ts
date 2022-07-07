import request from "../request";

export const ArticleApi={
    list: (params: object) => {
        return request({
            url: "/article/list",
            method: "GET",
            params,
        });
    },
}

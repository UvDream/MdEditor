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
    detail: (params: object) => {
        return request({
            url: "/article/detail",
            method: "GET",
            params,
        });
    }
}

export interface ArticleDetailType {
    uuid: string,
    title: string,
    status: string,
    slug: string,
    editor_type: string,
    summary: string,
    thumbnail: string,
    disable_comments: boolean,
    word_count: number,
    md_content: string,
    html_content: string,
    comment_count: number,
    tags_id: [],
    categories_id: [],
    is_top: boolean,
    auth_id: string,
    tags: [],
    categories: [],
    visits: number,
    likes: number,
    author:[]
}


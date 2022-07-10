import request, {ResponseType} from "../request";

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
            method: "POST",
            data,
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
export const SaveArticleApi = (data: ArticleDetailType) => {
    return new Promise(async (resolve, reject) => {
        if (data.uuid) {
            const res: ResponseType = await ArticleApi.update(data) as ResponseType
            res.code == 200 && resolve(res)
        } else {
            const res: ResponseType = await ArticleApi.create(data) as ResponseType
            res.code == 200 && resolve(res)
        }
    })
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
    author: []
}


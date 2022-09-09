import {Message} from "@arco-design/web-react";
import axios from "axios";

export type treeItem = {
    title: string;
    value: string;
    key: string;
    children?: treeItem[];
};
//获取halo token
export const GetToken = async (url: string, username: string, password: string) => {
    const res = await axios.post(url + "/login", {username: username, password: password})
    const result = res.data
    if (result.status === 200) {
        localStorage.setItem("halo-token", result.data.access_token)
        return result.data.access_token
    }
    return ""
}

const url = "https://" + localStorage.getItem("halo-url") + "/api/admin"
const token = localStorage.getItem("halo-token")
//获取halo 标签
export const GetTags = async () => {
    // @ts-ignore
    const {data} = await axios.get(url + "/tags", {headers: {"Admin-Authorization": token}})
    if (data.status === 200) {
        return data.data
    }
}

//获取halo 分类
export const GetCategories = async () => {
    // @ts-ignore
    const {data} = await axios.get(url + "/categories", {headers: {"Admin-Authorization": token}})
    if (data.status === 200) {
        return getTreData(data.data)
    }
}
type HaloArticle = {
    title: string;
    originalContent: string;
    slug: string;
    summary: string;
    status: string;
    content: string;
    md_content: string;
}
//提交文章
export const PostArticle = async (article: HaloArticle) => {
    //@ts-ignore
    const {data} = await axios.post(url + "/posts", article, {headers: {"Admin-Authorization": token}})
    if (data.status === 200) {
        Message.success("同步成功!")
    }
}

const getTreData = (data: any) => {
    let arr: Array<treeItem> = [];
    data.forEach((item: any) => {
        if (item.parentId === 0) {
            let obj: treeItem = {
                children: getChildren(item.id, data),
                title: item.name,
                value: item.id,
                key: item.id,
            };
            arr.push(obj);
        }
    });
    return arr
};
const getChildren = (id: string, data: any) => {
    const arr: Array<treeItem> = [];
    data.forEach((item: any) => {
        if (item.parentId === id) {
            let obj: treeItem = {
                children: getChildren(item.id, data),
                title: item.name,
                value: item.id,
                key: item.id,
            };
            arr.push(obj);
        }
    });
    return arr
};
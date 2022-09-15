import {Message} from "@arco-design/web-react";
import axios from "axios";
import {useDispatch} from "react-redux";
import {SetArticleDetail} from "@/store/article";
import {postArticleCreate, putArticleUpdate} from "@/api/article";
import {changeState} from "@/store/save-state";

export type treeItem = {
    title: string;
    value: string;
    key: string;
    children?: treeItem[];
};
const url = "https://" + localStorage.getItem("halo-url") + "/api/admin";
let token = localStorage.getItem("halo-token");
//获取halo token
export const GetToken = async (
    url: string,
    username: string,
    password: string
) => {
    const res = await axios.post(url + "/login", {
        username: username,
        password: password,
    });
    const result = res.data;
    if (result.status === 200) {
        localStorage.setItem("halo-token", result.data.access_token);
        token = result.data.access_token;
        return result.data.access_token;
    }
    return "";
};

//获取halo 标签
export const GetTags = async () => {
    try {
        const {data} = await axios.get(url + "/tags", {
            // @ts-ignore
            headers: {"Admin-Authorization": token},
        });
        if (data.status === 200) {
            return data.data;
        }
    } catch (e) {
        console.log(e, "11");
        localStorage.removeItem("halo-token");
    }
};

//获取halo 分类
export const GetCategories = async () => {
    try {
        const {data} = await axios.get(url + "/categories", {
            // @ts-ignore
            headers: {"Admin-Authorization": token},
        });
        if (data.status === 200) {
            return getTreData(data.data);
        }
    } catch (e) {
        localStorage.removeItem("halo-token");
    }
};
type HaloArticle = {
    id?: string;
    title: string;
    originalContent: string;
    slug: string;
    summary: string;
    status: string;
    content: string;
    md_content: string;
    halo_id: string;
};
// const dispatch = useDispatch();

//提交文章
export const PostArticle = async (article: HaloArticle) => {
    console.log(article, "1111");
    if (article.id) {
        const {data} = await axios.put(
            url + "/posts/" + article.id,
            article,
            //@ts-ignore
            {headers: {"Admin-Authorization": token}}
        );
        return processing_results(data, true);
    } else {
        const {data} = await axios.post(url + "/posts", article, {
            //@ts-ignore
            headers: {"Admin-Authorization": token},
        });
        return processing_results(data, false);
    }
};

function processing_results(data: any, edit: boolean) {
    if (data.status === 200) {
        console.log(data);
        Message.success(edit ? "编辑同步成功!" : "同步成功!");
        return data.data.id;
    } else if (data.status === 401) {
        localStorage.removeItem("halo-token");
    }
    return ""
}

export const saveArticle = (data: API.Article) => {
    return new Promise(async (resolve, reject) => {
        if (data.id) {
            console.log("更新文章", data);
            const res = (await putArticleUpdate(data)) as unknown as API.Response;
            if (res.code === 200) {
                Message.success("修改成功");
                resolve(true);
            }
        } else {
            console.log("保存文章", data);
            const res = (await postArticleCreate(data)) as unknown as API.Response;
            if (res.code === 200) {
                Message.success("保存成功");
                // @ts-ignore
                articleListRef.current.getList();
                resolve(true);
            }
        }
    });
};

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
    return arr;
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
    return arr;
};

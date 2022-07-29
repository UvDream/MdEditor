import request from "../request";

export const UserApi = {
    login: (data: object) => {
        return request({
            url: "/public/base/login",
            method: "POST",
            data,
        });
    },
    upload: (data: object) => {
        return request({
            url: "/file/upload",
            method: "POST",
            data,
        });
    },
    register: (data: Object) => {
        return request({
            url: "/public/base/register",
            method: "POST",
            data,
        })
    }
}

export interface UserInfo {
    uuid: string
    user_name: string
    nick_name: string
    phone: string
    email: string
    avatar: string
}

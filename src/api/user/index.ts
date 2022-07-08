import request from "../request";

export const UserApi = {
    login: (data: object) => {
        return request({
            url: "/public/base/login",
            method: "POST",
            data,
        });
    },
}

export interface UserInfo {
    uuid: string
    user_name: string
    nick_name: string
    phone: string
    email: string
    avatar: string
}

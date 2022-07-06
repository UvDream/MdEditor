import request from "../request";

export const UserApi={
    login: (data: object) => {
        return request({
            url: "/public/base/login",
            method: "POST",
            data,
        });
    },
}

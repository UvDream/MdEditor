//api接口地址
let baseUrl = "http://127.0.0.1:8989";
//编辑器部署地址
let frontEndUrl = "https://uvdream.cn/editor";
if (process.env.NODE_ENV === "development") {
    baseUrl = "http://localhost:8989";
} else if (process.env.NODE_ENV === "production") {
    baseUrl = "https://uvdream.cn/v2";
}
export default {
    method: "post",
    // 基础url前缀
    baseURL: baseUrl,
    // 请求头信息
    headers: {
        "Content-Type": "application/json;charset=UTF-8",
    },
    // 参数
    data: {},
    // 设置超时时间
    timeout: 10000,
    // 携带凭证
    withCredentials: false,
    // 返回数据类型
    responseType: "json",
    //前端部署地址
    frontEndUrl,
};

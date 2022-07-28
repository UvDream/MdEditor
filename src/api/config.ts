let  baseUrl= 'http://127.0.0.1:8989';
if (process.env.NODE_ENV==='development') {
    baseUrl = 'http://localhost:8989';
}else if (process.env.NODE_ENV==='production') {
    baseUrl = 'http://124.223.8.237:8989';
}
export default {
    method: "post",
    // 基础url前缀
    baseURL: baseUrl,
    // 请求头信息
    headers: {
        "Content-Type": "application/json;charset=UTF-8",
        "x-token":localStorage.getItem('token')||"token"
    },
    // 参数
    data: {},
    // 设置超时时间
    timeout: 10000,
    // 携带凭证
    withCredentials: false,
    // 返回数据类型
    responseType: "json"
};

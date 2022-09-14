import axios, {AxiosResponse} from "axios";
import config from "@/config";
import {Message} from "@arco-design/web-react";

interface IRequest {
    <T = any>(url: string, opts: any): Promise<AxiosResponse<T>>;

    <T = any>(url: string, opts: any): Promise<T>;

    <T = any>(url: string, opts: any): Promise<T>;

    <T = any>(url: string): Promise<T>;

    <T = any>(url: string): Promise<any>;
}

const request: IRequest = (url: string, opts: any = {method: "GET"}) => {
    return new Promise((resolve, reject) => {
        let token = localStorage.getItem("token");
        if (token) {
            //@ts-ignore
            config.headers["x-token"] = token;
        }
        let service = axios.create({
            baseURL: config.baseURL,
            timeout: config.timeout,
            headers: config.headers,
            withCredentials: config.withCredentials,
        });
        service.interceptors.request.use(
            (config) => {
                return config;
            },
            (error) => {
                return Promise.reject(error);
            }
        );

        service.interceptors.response.use(
            (response) => {
                let data;
                if (response.data == undefined) {
                    data = response.request.responseText;
                } else {
                    data = response.data;
                }
                switch (data.code) {
                    case 50000:
                        Message.error("未登录,请先登录!");
                        localStorage.removeItem("user");
                        localStorage.removeItem("token");
                        break;
                    case 50001:
                        Message.error("授权过期,请重新登录!");
                        localStorage.removeItem("user");
                        localStorage.removeItem("token");
                        break;
                    default:
                }
                return data;
            },
            (err) => {
                if (err?.response.status) {
                    switch (err.response.status) {
                        case 400:
                            err.message = "请求错误";
                            break;
                        case 401:
                            err.message = "未授权，请登录";
                            break;
                        case 403:
                            err.message = "拒绝访问";
                            break;
                        case 404:
                            err.message = `请求地址出错: ${err.response.config.url}`;
                            break;
                        case 408:
                            err.message = "请求超时";
                            break;
                        case 500:
                            err.message = "服务器内部错误";

                            break;
                        case 501:
                            err.message = "服务未实现";
                            break;
                        case 502:
                            err.message = "网关错误";
                            break;
                        case 503:
                            err.message = "服务不可用";
                            break;
                        case 504:
                            err.message = "网关超时";
                            break;
                        case 505:
                            err.message = "HTTP版本不受支持";
                            break;
                        default:
                    }
                }
                return reject(err); //返回错误信息
            }
        );
        if (!opts.url) {
            opts.url = url;
        }
        service(opts)
            .then((res) => {
                //@ts-ignore
                resolve(res);
            })
            .catch((err) => {
                reject(err);
            });
    });
};
export {request};

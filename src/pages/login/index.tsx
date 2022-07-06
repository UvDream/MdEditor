/*
 * @Author: wangzhongjie
 * @Date: 2022-04-26 22:32:09
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2022-04-26 22:32:10
 * @Description:
 * @Email: UvDream@163.com
 */
import "./index.less"
import Login from "@/pages/login/login";
import Register from "@/pages/login/register";
import {useState} from "react";

export default function LoginPage() {
    const [status, setStatus] = useState(true);
    return (
        <div className={"login-page"}>
            {
                status ? <Login/> : <Register/>
            }
        </div>
    );
}

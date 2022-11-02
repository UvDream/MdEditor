/*
 * @Author: wangzhongjie
 * @Date: 2022-04-26 22:32:09
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2022-04-26 22:32:10
 * @Description:
 * @Email: UvDream@163.com
 */
import "./index.less";
import Login from "@/pages/login/login";
import Register from "@/pages/login/register";
import {useState} from "react";
import RetrievePassword from "@/pages/login/retrieve-password";

export default function LoginPage() {
    const [status, setStatus] = useState<Number>(0);
    return (
        <div className={"login-page"}>
            {status == 0 && (
                <Login
                    onSwitch={(num) => {
                        setStatus(num);
                    }}
                />
            )}
            {status == 1 && (
                <Register
                    onSwitch={() => {
                        setStatus(0);
                    }}
                />
            )}
            {
                status === 2 && (
                    <RetrievePassword onSwitch={() => {
                        setStatus(0);
                    }}/>
                )
            }
        </div>
    );
}

/*
 * @Author: wangzhongjie
 * @Date: 2022-04-26 22:25:59
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2022-04-27 09:20:34
 * @Description:路由管理
 * @Email: UvDream@163.com
 */
import {Routes, Route} from "react-router-dom";
import HomePage from "./home";
import LoginPage from "./login";
import EditorPage from "@/pages/ediotr";

export default function IndexPage() {
    return (
        <Routes>
            <Route path="/" element={<HomePage/>}>
                <Route path="/editor" element={<EditorPage />}>
                </Route>
            </Route>
            <Route path="/login" element={<LoginPage/>}/>
        </Routes>
    );
}

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
import PreviewPage from "@/pages/preview";
import {useEffect} from "react";
import {process, tauri, app} from "@tauri-apps/api";

export default function IndexPage() {
    useEffect(() => {
        // console.log("寻找环境变量11")
        // console.log(process)
        //
        // console.log(tauri)
        // app.getName().then(res=>{
        //     console.log(res)
        // })
        // console.log(window.__TAURI__)
    }, []);
    return (
        <Routes>
            <Route path="/" element={<HomePage/>}>
                <Route path="/" element={<EditorPage/>}/>
                <Route path="/editor" element={<EditorPage/>}/>
            </Route>
            {/*手机端预览页面*/}
            <Route path="/preview" element={<PreviewPage/>}/>
            <Route path="/login" element={<LoginPage/>}/>
        </Routes>
    );
}

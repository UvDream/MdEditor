/*
 * @Author: wangzhongjie
 * @Date: 2022-04-26 22:34:36
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2022-04-26 22:34:36
 * @Description:
 * @Email: UvDream@163.com
 */
import {useEffect, useState} from "react";
import {Drawer, Grid, Layout} from "@arco-design/web-react";
import {IconOrderedList} from "@arco-design/web-react/icon";
import {Outlet} from "react-router-dom";

import "./index.less"
import {DeviceType, DeviceTypeEnum, setEditorStyle} from "@/utils";
import ArticleList from "@/pages/home/components/article-list";
import "highlight.js/styles/vs2015.css";
import TopHeader from "./components/top-header/top-header";


const Sider = Layout.Sider;
const Header = Layout.Header;
const Content = Layout.Content;
const Row = Grid.Row;
const Col = Grid.Col;
export default function HomePage(props: any) {
    //----------------------PC端处理----------------------
    //#region
    //#endregion

    //----------------------手机端逻辑处理----------------------
    //#region
    //抽屉
    const [drawerVisible, setDrawerVisible] = useState(false);
    //文章列表icon点击
    const articleListIconClick = () => {
        setDrawerVisible(!drawerVisible);
    }
    //#endregion

    useEffect(() => {
        console.log("页面加载完成")
        setEditorStyle("");
    })

    //布局组件
    function multinomialLayout() {
        if (DeviceType() === DeviceTypeEnum.PC) {
            //pc端布局
            return (
                <Layout className={"pc-layout"}>
                    <Header>
                        <TopHeader/>
                    </Header>
                    <Layout>
                        <Sider>
                            111
                        </Sider>
                        <Content className={"pc-layout-content"}>
                            <Outlet/>
                        </Content>
                    </Layout>
                </Layout>
            )
        } else if (DeviceType() === DeviceTypeEnum.MOBILE) {
            //手机端布局
            return (
                <Layout className={"mobile-layout"}>
                    <Header className={"mobile-header"}>
                        <Row className={"mobile-row"}>
                            <Col span={4} className={["flex-center", "mobile-row"]}>
                                <IconOrderedList style={{fontSize: "18px"}} onClick={articleListIconClick}/>
                            </Col>
                            <Col span={16} className={["flex-center", "mobile-row", "mobile-title"]}>
                                标题
                            </Col>
                            <Col span={4} className={["flex-center", "mobile-row"]}>
                                {/*{!previewState ? <IconEye onClick={() => {*/}
                                {/*        setPreviewState(true)*/}
                                {/*    }} style={{fontSize: "18px"}}/> :*/}
                                {/*    <IconEyeInvisible onClick={() => {*/}
                                {/*        setPreviewState(false)*/}
                                {/*    }} style={{fontSize: "18px"}}/>}*/}
                            </Col>
                        </Row>
                    </Header>
                    <Content className={"mobile-content"}>
                        {/*{previewState ? <ArticlePreview content={articleHtml}/> :*/}
                        {/*    <ArticleEditor value={articleMd} onChange={editorChange}/>}*/}
                        <Outlet/>
                    </Content>
                </Layout>
            )
        }
    }

    return (<div className={"home"}>
        {multinomialLayout()}
        <Drawer
            width={332}
            height={332}
            title={<span>文章列表 </span>}
            visible={drawerVisible}
            placement={"left"}
            onOk={() => {
                setDrawerVisible(false);
            }}
            onCancel={() => {
                setDrawerVisible(false);
            }}
        >
            <div>
                <ArticleList/>
            </div>
        </Drawer>
    </div>)
}

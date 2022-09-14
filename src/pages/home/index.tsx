/*
 * @Author: wangzhongjie
 * @Date: 2022-04-26 22:34:36
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2022-08-19 11:10:28
 * @Description:
 * @Email: UvDream@163.com
 */
import {useEffect, useState} from "react";
import {Drawer, Grid, Layout, ResizeBox} from "@arco-design/web-react";
import {IconOrderedList} from "@arco-design/web-react/icon";
import {Outlet, useNavigate} from "react-router-dom";

import "@/style/home/index.less";
import {DeviceType, DeviceTypeEnum} from "@/utils";
import ArticleList from "@/pages/home/components/left-bar/article-list";
import "highlight.js/styles/vs2015.css";
import TopHeader from "./components/top-header/top-header";
import LeftBar from "./components/left-bar/index";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@/store";
import {AddArticle, GetArticleDetail} from "@/store/article";

const Header = Layout.Header;
const Content = Layout.Content;
const Row = Grid.Row;
const Col = Grid.Col;
export default function HomePage(props: any) {
    const {title} = useSelector((state: RootState) => state.articleDetail);
    const dispatch = useDispatch();
    const navigate = useNavigate();

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
    };
    //#endregion

    //布局组件
    function multimodalLayout() {
        if (DeviceType() === DeviceTypeEnum.PC) {
            //pc端布局
            return (
                <Layout className={"pc-layout"}>
                    <Header>
                        <TopHeader/>
                    </Header>
                    <Layout className={"pc-layout-content"}>
                        {/*@ts-ignore*/}
                        <ResizeBox.Split
                            size={0.15}
                            min={0.1}
                            max={0.3}
                            style={{
                                height: "100%",
                                width: "100%",
                                border: "1px solid var(--color-border)",
                            }}
                            trigger={[<div key="2" className={"pc-layout-content-resize"}/>]}
                            panes={[
                                <LeftBar/>,
                                <Content className={"pc-layout-content"}>
                                    <Outlet/>
                                </Content>,
                            ]}
                        />
                    </Layout>
                </Layout>
            );
        } else if (DeviceType() === DeviceTypeEnum.MOBILE) {
            //手机端布局
            return (
                <Layout className={"mobile-layout"}>
                    <Header className={"mobile-header"}>
                        <Row className={"mobile-row"}>
                            <Col span={4} className={["flex-center", "mobile-row"]}>
                                <IconOrderedList
                                    style={{fontSize: "18px"}}
                                    onClick={articleListIconClick}
                                />
                            </Col>
                            <Col
                                span={16}
                                className={["flex-center", "mobile-row", "mobile-title"]}
                            >
                                {title}
                            </Col>
                            <Col span={4} className={["flex-center", "mobile-row"]}></Col>
                        </Row>
                    </Header>
                    <Content className={"mobile-content"}>
                        <Outlet/>
                    </Content>
                </Layout>
            );
        }
    }

    return (
        <div className={"home"}>
            {multimodalLayout()}
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
                    <ArticleList
                        addFunc={() => {
                            dispatch(AddArticle());
                            navigate(`/editor?id=add`);
                            setDrawerVisible(false);
                        }}
                        onClick={(id: string) => {
                            //@ts-ignore
                            dispatch(GetArticleDetail({id}));
                            setDrawerVisible(false);
                        }}
                    />
                </div>
            </Drawer>
        </div>
    );
}

/*
 * @Author: wangzhongjie
 * @Date: 2022-04-26 22:34:36
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2022-04-26 22:34:36
 * @Description:
 * @Email: UvDream@163.com
 */
import {useState} from "react";
import {Layout, Grid, Drawer} from "@arco-design/web-react";
import {IconOrderedList, IconEye, IconEyeInvisible} from "@arco-design/web-react/icon";

import "./index.less"
import {DeviceType, DeviceTypeEnum, markdownParser} from "@/utils";
import ArticleEditor from "@/pages/home/components/article-editor";
import ArticlePreview from "@/pages/home/components/article-preview";
import ArticleList from "@/pages/home/components/article-list";

const Sider = Layout.Sider;
const Header = Layout.Header;
const Footer = Layout.Footer;
const Content = Layout.Content;
const Row = Grid.Row;
const Col = Grid.Col;
export default function HomePage() {
    const [articleMd,setArticleMd] = useState("");
    const [articleHtml,setArticleHtml]=useState('')
    //----------------------PC端处理----------------------
    //#region
    //#endregion

    //----------------------手机端逻辑处理----------------------
    //#region
    //抽屉
    const [drawerVisible, setDrawerVisible] = useState(false);
    const [previewState, setPreviewState] = useState(false);
    //文章列表icon点击
    const articleListIconClick = () => {
        setDrawerVisible(!drawerVisible);
    }
    //#endregion
    /**
     * 编辑器change事件
     * @param val
     */
    const editorChange = (val: string) => {
        console.log("编辑器内容", val)
        console.log(markdownParser.render(val))
        setArticleMd(val)
        setArticleHtml(markdownParser.render(val))
    }

    //布局组件
    function multinomialLayout() {
        {/*pc布局*/
        }
        if (DeviceType() === DeviceTypeEnum.PC) {
            return (
                <Layout className={"pc-layout"}>
                    <Sider>
                        菜单
                    </Sider>
                    <Layout>
                        <Header>
                            头部
                        </Header>
                        <Content>
                            内容
                        </Content>
                        <Footer>
                            底部
                        </Footer>
                    </Layout>
                </Layout>
            )
        } else if (DeviceType() === DeviceTypeEnum.MOBILE) {
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
                                {previewState ? <IconEye onClick={() => {
                                        setPreviewState(false)
                                    }} style={{fontSize: "18px"}}/> :
                                    <IconEyeInvisible onClick={() => {
                                        setPreviewState(true)
                                    }} style={{fontSize: "18px"}}/>}
                            </Col>
                        </Row>
                    </Header>
                    <Content className={"mobile-content"}>
                        {previewState ? <ArticlePreview content={articleHtml}/> : <ArticleEditor value={articleMd} onChange={editorChange}/>}
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

import "./index.less";
import ArticleList from "./article-list";
import HistoryList from "@/pages/home/components/left-bar/history-list";
import {Avatar, Config, FolderOpen, FolderSuccess, Log, ViewList} from "@icon-park/react"
import {useEffect, useState} from "react";
import { Popover} from "@arco-design/web-react";
import UserStatus from "@/pages/home/components/left-bar/user";
import SetConfig from "@/pages/home/components/left-bar/config";
import {emitter, EventType} from "@/utils";
import {ResponseType} from "@/api/request";
import {ArticleApi, ArticleDetailType} from "@/api/article";
import {useSearchParams} from "react-router-dom";
import ArticleSave from "@/pages/home/components/left-bar/article-save";

export default function LeftBar() {
    //#region 变量
    //bar是否选中
    const [selected, setSelected] = useState(0);
    //用户状态
    const [popupVisible, setPopupVisible] = useState(false);
    //设置弹窗状态
    const [configVisible, setConfigVisible] = useState(false);
    //保存状态
    const [fileStatus, setFileStatus] = useState(false);
    //路由参数
    const [searchParams] = useSearchParams();
    //文章详情
    const [articleDetail, setArticleDetail] = useState<ArticleDetailType>({} as ArticleDetailType);
    //文章配置
    const [articleSaveVisible, setArticleSaveVisible] = useState(false);
    //#endregion
    useEffect(() => {
        const id = searchParams.get('id');
        id && getArticleDetail(id)
    }, [])
    //#region 通讯方法
    //修改文件状态
    emitter.on(EventType.FileStatus, (key: boolean | any) => {
        setFileStatus(key)
    })
    emitter.on(EventType.EditorMdContent, (mdContent: string | any) => {
        const obj: ArticleDetailType = articleDetail
        obj.md_content = mdContent
        setArticleDetail(obj)
        setFileStatus(false)
        emitter.off(EventType.EditorMdContent)
    })
    //#endregion
    //#region 方法
    //获取文章详情
    const getArticleDetail = async (id: string) => {
        const res: ResponseType = await ArticleApi.detail({id}) as ResponseType
        if (res.code === 200) {
            console.log("详情")
            console.log(res.data)
            setArticleDetail(res.data)
            emitter.emit(EventType.MdContent, res.data.md_content)
            emitter.off(EventType.MdContent)
        }
    }
    //设置弹窗方法
    //#region
    const configOk = () => {
        setConfigVisible(false);
    }
    const configCancel = () => {
        setConfigVisible(false)
    }
    //#endregion
    //编辑器变化传入内容
    //文章保存配置
    //#region
    const articleSaveOk = () => {
        setArticleSaveVisible(false);
        setFileStatus(true)
    }
    const articleSaveCancel = () => {
        setArticleSaveVisible(false)
    }
    //#endregion
    //#endregion
    return (
        <div className={"left-bar"}>
            <div className={"left-bar-tool"}>
                <div className={"left-bar-tool-top"}>
                    <div className={"left-bar-tool-block"}>
                        <ViewList
                            theme={selected === 0 ? 'two-tone' : 'outline'}
                            size="24"
                            fill={selected === 0 ? '#333' : ['#333', '#2F88FF']}
                            strokeWidth={3}
                            onClick={() => {
                                setSelected(0);
                            }}
                        />
                    </div>
                    <div className={"left-bar-tool-block"}>
                        <Log
                            theme={selected === 1 ? 'two-tone' : 'outline'}
                            size="24"
                            fill={selected === 1 ? '#333' : ['#333', '#2F88FF']}
                            strokeWidth={3}
                            onClick={() => {
                                setSelected(1);
                            }}
                        />
                    </div>
                </div>
                <div className={"left-bar-tool-bottom"}>
                    {/*保存按键*/}
                    <div className={"left-bar-tool-block"}>
                        {
                            fileStatus ?
                                <FolderSuccess
                                    theme="outline"
                                    size="24"
                                    fill="#333"
                                    strokeWidth={3}
                                    onClick={() => {
                                        setArticleSaveVisible(true)
                                    }}
                                /> :
                                <FolderOpen
                                    theme="outline"
                                    size="24"
                                    fill="#333"
                                    strokeWidth={3}
                                    onClick={() => {
                                        setArticleSaveVisible(true)
                                    }}
                                />
                        }
                    </div>
                    {/*用户*/}
                    <div className={"left-bar-tool-block"}>
                        <Popover
                            trigger='click'
                            position='rb'
                            popupVisible={popupVisible}
                            content={
                                <UserStatus onClick={() => {
                                    setPopupVisible(!popupVisible)
                                }
                                }/>
                            }
                        >
                            <Avatar
                                theme="outline"
                                size="24" fill="#333"
                                strokeWidth={3}
                                onClick={() => {
                                    setPopupVisible(!popupVisible);
                                }}
                            />
                        </Popover>
                    </div>
                    {/*设置*/}
                    <div className={"left-bar-tool-block"}>
                        <Config
                            theme="outline"
                            size="24"
                            fill={'#333'}
                            strokeWidth={3}
                            onClick={() => {
                                setConfigVisible(true);
                            }}
                        />
                    </div>
                </div>
            </div>
            <div className={"left-bar-list"}>
                {
                    selected === 0 ? <ArticleList onChange={
                        (id: string) => {
                            getArticleDetail(id)
                        }
                    }/> : <HistoryList/>
                }
            </div>
            {/*配置弹窗*/}
            <SetConfig
                visible={configVisible}
                onOk={configOk}
                onCancel={configCancel}
            />
            {/*文章配置*/}
            <ArticleSave
                visible={articleSaveVisible}
                onOk={articleSaveOk}
                onCancel={articleSaveCancel}
            />
        </div>
    )
}

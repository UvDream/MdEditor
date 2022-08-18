import "./index.less";
import ArticleList from "./article-list";
import HistoryList from "@/pages/home/components/left-bar/history-list";
import {Avatar, CheckOne, CloseOne, Config, Log, Picture, ViewList} from "@icon-park/react"
import {useEffect, useRef, useState} from "react";
import {Message, Popover} from "@arco-design/web-react";
import UserStatus from "@/pages/home/components/left-bar/user";
import SetConfig from "@/pages/home/components/left-bar/config";
import {useNavigate, useSearchParams} from "react-router-dom";
import ArticleSave from "@/pages/home/components/left-bar/article-save";
import {useKeyPress} from "ahooks";
import {UserInfo} from "@/api/user";
import ImgList from "@/pages/home/components/left-bar/img-list";
import {useDispatch, useSelector, useStore} from "react-redux";
import {RootState} from "@/store";
import {changeState} from "@/store/save-state";
import {GetArticleDetail, SetArticleDetail} from "@/store/article";
import {postArticleCreate, putArticleUpdate} from "@/services/api/article";

export default function LeftBar() {
    //#region 变量
    const navigate = useNavigate()
    const articleListRef = useRef()
    const store = useStore()
    const saveState = useSelector((store: RootState) => store.saveState)
    const dispatch = useDispatch();
    //bar是否选中
    const [selected, setSelected] = useState(0);
    //用户状态
    const [popupVisible, setPopupVisible] = useState(false);
    //设置弹窗状态
    const [configVisible, setConfigVisible] = useState(false);
    //路由参数
    const [searchParams] = useSearchParams();
    //文章详情
    const articleDetail = useSelector((store: RootState) => store.articleDetail)
    // const [articleDetail, setArticleDetail] = useState<ArticleDetailType>({} as ArticleDetailType);
    //文章配置
    const [articleSaveVisible, setArticleSaveVisible] = useState(false);
    //图片库
    const [imgVisible, setImgVisible] = useState(false);
    //#endregion
    useEffect(() => {
        const id = searchParams.get('id');
        //@ts-ignore
        id && dispatch(GetArticleDetail({id}))
        // setArticleDetail(detail)
    }, [])
    //#region 方法
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
    const articleSaveOk = async (status: boolean, detail: API.Article) => {
        status ? detail.status = "PUBLISHED" : detail.status = "DRAFT"
        dispatch(SetArticleDetail(detail))
        //@ts-ignore
        const res = await saveArticle(store.getState().articleDetail)
        if (res) {
            setArticleSaveVisible(false);
            dispatch(changeState(true))
        }
    }

    //保存文章
    useKeyPress('meta.s', (event) => {
        event.preventDefault()
        saveArticle(articleDetail).then()
    })
    const saveArticle = (data: API.Article) => {
        return new Promise(async (resolve, reject) => {
            if (articleDetail.id) {
                console.log("更新文章", data)
                const res = await putArticleUpdate(data) as unknown as API.Response
                if (res.code === 200) {
                    navigate(`/editor?id=${res.data.uuid}`)
                    Message.success("修改成功")
                    // @ts-ignore
                    articleListRef.current?.getList()
                    dispatch(changeState(true))
                    resolve(true)
                }
            } else {
                console.log("保存文章", data)

                const res = await postArticleCreate(data) as unknown as API.Response
                if (res.code === 200) {
                    navigate(`/editor?id=${res.data.uuid}`)
                    Message.success("保存成功")
                    // @ts-ignore
                    articleListRef.current.getList()
                    dispatch(changeState(true))
                    resolve(true)
                }
            }
        })
    }
    const articleSaveCancel = () => {
        setArticleSaveVisible(false)
        dispatch(changeState(false))
    }
    //新增文章
    const addArticle = () => {
        const userInfo: UserInfo = JSON.parse(localStorage.getItem("user") || "{}")
        const obj: API.Article = {
            auth_id: userInfo.uuid,
            author: [],
            categories: [],
            categories_id: [],
            comment_count: 0,
            disable_comments: false,
            editor_type: "",
            html_content: "",
            is_top: false,
            likes: 0,
            md_content: "",
            password: "",
            slug: "",
            status: "DRAFT",
            summary: "",
            tags: [],
            tags_id: [],
            thumbnail: "",
            title: "新建文章",
            visits: 0,
            word_count: 0
        } as API.Article
        // setArticleDetail(obj)
        dispatch(SetArticleDetail(obj))
        navigate(`/editor?id=add`)
        console.log("新增文章")
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
                            size="20"
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
                            size="20"
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
                            saveState ?
                                <CheckOne
                                    theme="outline"
                                    size="20"
                                    fill="#333"
                                    strokeWidth={3}
                                    onClick={() => {
                                        setArticleSaveVisible(true)
                                    }}
                                /> :
                                <CloseOne
                                    theme="outline"
                                    size="20"
                                    fill="#333"
                                    strokeWidth={3}
                                    onClick={() => {
                                        setArticleSaveVisible(true)
                                    }}
                                />
                        }
                    </div>
                    {/*图片库*/}
                    <div className={"left-bar-tool-block"}>
                        <Picture theme="outline" size="20" fill="#333" strokeWidth={3}
                                 onClick={() => {
                                     setImgVisible(true)
                                 }}
                        />
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
                                size="20"
                                fill="#333"
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
                            size="20"
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
                    selected === 0 ?
                        <ArticleList
                            ref={articleListRef}
                            addFunc={() => {
                                addArticle()
                            }}
                            onClick={(id: string) => {
                                //@ts-ignore
                                dispatch(GetArticleDetail({id}))
                            }}
                        />
                        :
                        <HistoryList/>
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
            {/*文件资源*/}
            <ImgList
                visible={imgVisible}
                onOk={() => {
                    setImgVisible(false)
                }}
            />
        </div>
    )
}

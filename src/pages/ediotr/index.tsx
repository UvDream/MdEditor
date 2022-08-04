import {
    CalcWordCount,
    defaultStyle,
    DeviceType,
    DeviceTypeEnum,
    emitter,
    EventType,
    getConfig,
    markdownParser,
    setEditorStyle
} from "@/utils";
import Editor from './editor'
import Preview from './preview'
import {useEffect, useState} from "react";
import "./index.less";
import {IconEye, IconEyeInvisible} from "@arco-design/web-react/icon";
import {Grid} from "@arco-design/web-react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@/store";
import {SetArticleDetail} from "@/store/article";
import {SetTheme, ThemeType, UpdateTheme} from "@/store/theme";
import {OtherApi} from "@/api/other";
import {ResponseType} from "@/utils/request";

const Row = Grid.Row;
const Col = Grid.Col;
export default function EditorPage() {

    const [previewState, setPreviewState] = useState(false);
    //状态管理取出articleMd
    const {md_content} = useSelector((state: RootState) => state.articleDetail);
    //markdown
    const [articleMd, setArticleMd] = useState(md_content ? md_content : '');
    const dispatch = useDispatch();
    //html
    const [articleHtml, setArticleHtml] = useState(markdownParser.render(articleMd));
    //获取配置
    const [config, setConfig] = useState(getConfig());
    //获取主题
    const {theme} = useSelector((state: RootState) => state.themeDetail);
    useEffect(() => {
        setEditorStyle(defaultStyle)
        // getThemeDetail(themeID).then()
        getThemeDetail(Number(localStorage.getItem("theme_id"))).then()
    }, [])
    useEffect(() => {
        setArticleMd(md_content ? md_content : '');
        setArticleHtml(markdownParser.render(articleMd));
    }, [md_content])

    //获取主题详情
    const getThemeDetail = async (id: number) => {
        if (id === 999) {
            dispatch(SetTheme(defaultStyle))
            const obj: ThemeType = {
                description: "默认主题",
                name: "默认主题",
                thumbnail: "",
                is_public: true
            }
            dispatch(UpdateTheme(obj))
            dispatch(SetTheme(defaultStyle))
        } else {
            const res = await OtherApi.themeDetail({id}) as ResponseType
            if (res.code === 200) {
                dispatch(SetTheme(res.data.theme))
            }
        }
    }
    const getCount = () => {
        let count = 0
        let config = getConfig()
        config.editorArea && count++
        config.previewArea && count++
        config.themeArea && count++
        return count
    }
    emitter.on(EventType.EditorShow, () => {
        setConfig(getConfig())
    })

    /**
     * 编辑器change事件
     * @param val
     */
    const editorChange = (val: string) => {
        setArticleMd(val)
        setArticleHtml(markdownParser.render(val))
        dispatch(SetArticleDetail({md_content: val, word_count: CalcWordCount(val)}))
    }
    const styleEditorChange = (val: string) => {
        setEditorStyle(val)
    }
    if (DeviceType() === DeviceTypeEnum.PC) {
        return (
            <div className={"pc-editor"}>
                <Row style={{height: '100%'}} gutter={[2, 0]}>
                    {
                        config.editorArea ?
                            <Col span={24 / getCount()} className={'code-editor'} style={{display: "flex"}}>
                                <Editor
                                    value={articleMd}
                                    insert={true}
                                    mdEditor={true}
                                    onChange={(val: string) => {
                                        editorChange(val)
                                    }}
                                    language={'markdown'}
                                />
                            </Col> : <></>
                    }
                    {
                        config.previewArea ?
                            <Col span={24 / getCount()} className={"preview "}>
                                <Preview content={articleHtml}/>
                            </Col> : <></>
                    }
                    {
                        config.themeArea ?
                            <Col span={24 / getCount()} className={"style-editor "}>
                                <Editor
                                    value={theme}
                                    language={'css'}
                                    onChange={(val: string) => {
                                        styleEditorChange(val)
                                    }}
                                />
                            </Col> : <></>
                    }
                </Row>
            </div>
        )
    } else if (DeviceType() === DeviceTypeEnum.MOBILE) {
        return (
            <div className={"mobile-editor"} id={"mobile-editor"}>
                <div className={"preview-icon"}>
                    {!previewState ? <IconEye onClick={() => {
                            setPreviewState(true)
                        }} style={{fontSize: "18px"}}/> :
                        <IconEyeInvisible onClick={() => {
                            setPreviewState(false)
                        }} style={{fontSize: "18px"}}/>}
                </div>
            </div>
        )
    } else {
        return (
            <div>
                暂无
            </div>
        )
    }
}

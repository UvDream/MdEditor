import {
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
import {articleContent} from "@/pages/home/mock";
import "./index.less";
import {IconEye, IconEyeInvisible} from "@arco-design/web-react/icon";
import {Grid} from "@arco-design/web-react";
import {useDebounceEffect} from "ahooks";

const Row = Grid.Row;
const Col = Grid.Col;
export default function EditorPage() {
    const [previewState, setPreviewState] = useState(false);
    //markdown
    const [articleMd, setArticleMd] = useState(articleContent);
    //html
    const [articleHtml, setArticleHtml] = useState(markdownParser.render(articleContent));
    //获取配置
    const [config, setConfig] = useState(getConfig());

    useEffect(() => {
        setEditorStyle(defaultStyle)
    }, [])
    useDebounceEffect(
        () => {
            emitter.emit(EventType.EditorMdContent, articleMd)
        },
        [articleMd],
        {
            wait: 2000,
        },
    );
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
    emitter.on(EventType.MdContent, (mdContent: string | any) => {
        setArticleMd(mdContent)
    })
    /**
     * 编辑器change事件
     * @param val
     */
    const editorChange = (val: string) => {
        setArticleMd(val)
        setArticleHtml(markdownParser.render(val))
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
                                    value={defaultStyle}
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
                    {/*<BackTop*/}
                    {/*    visibleHeight={30}*/}
                    {/*    style={{position: 'absolute'}}*/}
                    {/*    target={() => document.querySelector("body")}*/}
                    {/*/>*/}
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

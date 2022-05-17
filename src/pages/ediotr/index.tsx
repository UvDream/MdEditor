import {DeviceType, DeviceTypeEnum, markdownParser} from "@/utils";
import Editor from './editor'
import Preview from './preview'
import {useState} from "react";
import {articleContent} from "@/pages/home/mock";
import "./index.less";
import {IconEye, IconEyeInvisible} from "@arco-design/web-react/icon";
import {BackTop, Grid} from "@arco-design/web-react";
import {defaultStyle} from "@/utils"
const Row = Grid.Row;
const Col = Grid.Col;
export default function EditorPage() {
    const [previewState, setPreviewState] = useState(false);
    const [articleMd, setArticleMd] = useState(articleContent);
    const [articleHtml, setArticleHtml] = useState(markdownParser.render(articleContent));

    /**
     * 编辑器change事件
     * @param val
     */
    const editorChange = (val: string) => {
        setArticleMd(val)
        setArticleHtml(markdownParser.render(val))
    }
    if (DeviceType() === DeviceTypeEnum.PC) {
        return (
            <div className={"pc-editor"}>
                <Row style={{height:'100%'}} gutter={[2,0]}>
                    <Col span={8} className={'code-editor'}>
                        <Editor value={articleMd} onChange={editorChange} language={'markdown'}/>
                    </Col>
                    <Col span={8} className={"preview"}>
                        <Preview content={articleHtml}/>
                    </Col>
                    <Col span={8} className={"style-editor"}>
                        <Editor value={defaultStyle} language={'css'}/>
                    </Col>
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
                <div style={{height: '10000px'}}>

                </div>
                {/*{*/}
                {/*    previewState? <Preview content={articleHtml}/> :*/}
                {/*        <Editor value={articleMd} onChange={editorChange}/>*/}
                {/*}*/}

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

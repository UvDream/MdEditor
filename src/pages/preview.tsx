import {useEffect, useState} from "react";
import {useSearchParams} from "react-router-dom";
import {getArticleMd} from "@/services/api/article";
import {defaultStyle, markdownParser, setEditorStyle} from "@/utils";
import "@/style/editor/preview_phone.less"
import {Refresh} from "@icon-park/react";
import {Affix} from "@arco-design/web-react";

export default function PreviewPage() {
    const [content, setContent] = useState("")
    const [searchParams] = useSearchParams();

    useEffect(() => {
        getContent().then()
    }, [])
    const getContent = async () => {
        const res = await getArticleMd({id: searchParams.get("id") || ""}) as unknown as API.Response
        if (res.success) {
            setContent(markdownParser.render(res.data))
        }
        setEditorStyle(defaultStyle)
    }
    return (
        <div className="phone-preview">
            <div className="refresh" onClick={getContent}>
                <Refresh theme="outline" size="24" fill="#333" strokeWidth={3}/>
            </div>
            <div className="md-editor">
                <div style={{paddingBottom: "100px"}} dangerouslySetInnerHTML={{
                    __html: content,
                }}/>
            </div>
        </div>
    )
}
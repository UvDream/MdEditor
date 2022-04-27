import CodeMirror from "@uiw/react-codemirror";
import "./article-editor.less"

export default function ArticleEditor() {
    return (
        <div className={"editor"}>
            <CodeMirror
                minHeight={"500px"}
                placeholder={"请输入文章内容"}
                autoFocus={true}
            />
        </div>
    )
}

import CodeMirror from "@uiw/react-codemirror";
import {markdown, markdownLanguage} from "@codemirror/lang-markdown";
import {languages} from "@codemirror/language-data";


export default function Editor(props:any){
    return(
        <div className={"editor"}>
            <CodeMirror
                // themes={'dark'}
                value={props.value}
                minHeight={"500px"}
                placeholder={"请输入文章内容"}
                extensions={[markdown({ base: markdownLanguage, codeLanguages: languages })]}
                autoFocus={true}
                onChange={(val)=>{props.onChange(val)}}
            />
        </div>
    )
}

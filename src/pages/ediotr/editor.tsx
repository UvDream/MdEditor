import CodeMirror from '@uiw/react-codemirror';
import {markdown, markdownLanguage} from '@codemirror/lang-markdown';
import {languages} from '@codemirror/language-data';
import {ViewPlugin} from "@codemirror/view";
import {emitter} from "@/utils";

type Props = {
    value?: string;
    language?: string;
    onChange?: (value: string) => void;
};
export default function Editor(props: Props) {
    const scroll = ViewPlugin.fromClass(
        class {
            constructor(view: any) {
                view.scrollDOM.addEventListener("scroll", () => {
                    // console.log("111",view.scrollDOM.scrollTop);
                    emitter.emit("scroll", view.scrollDOM.scrollTop);
                });
            }
        }
    );

    return (
        <div className={"editor"}>
            <CodeMirror
                placeholder={"请输入文章内容"}
                height="100vh"
                value={props.value}
                extensions={[scroll, markdown({base: markdownLanguage, codeLanguages: languages})]}
            />
        </div>
    )
}

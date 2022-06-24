import CodeMirror from '@uiw/react-codemirror';
import {markdown, markdownLanguage} from '@codemirror/lang-markdown';
import {languages} from '@codemirror/language-data';
import {ViewPlugin} from "@codemirror/view";

type Props = {
    value?: string;
    language?: string;
    onChange?: (value: string) => void;
};
export default function Editor(props: Props) {
    const scroll = ViewPlugin.fromClass(
        class {
            constructor(view:any) {
                view.scrollDOM.addEventListener("scroll", () => {
                    console.log("111",view.scrollDOM.scrollTop);
                });
            }
        }
    );
    const options = {
        selectOnLineNumbers: true,
        roundedSelection: false,
        readOnly: false,
        cursorStyle: 'line',
        automaticLayout: false,
        //换行
        wordWrap: 'on',
        minimap: {
            enabled: false,
        },
        theme: 'vs',
        scrollbar: {
            // Subtle shadows to the left & top. Defaults to true.
            useShadows: false,
            // Render vertical arrows. Defaults to false.
            // verticalHasArrows: true,
            // Render horizontal arrows. Defaults to false.
            // horizontalHasArrows: true,
            // Render vertical scrollbar.
            // Accepted values: 'auto', 'visible', 'hidden'.
            // Defaults to 'auto'
            // vertical: 'auto',
            // Render horizontal scrollbar.
            // Accepted values: 'auto', 'visible', 'hidden'.
            // horizontal: 'auto',
            // verticalScrollbarSize: 17,
            // horizontalScrollbarSize: 17,
            // arrowSize: 30,
        },
    };
    return (
        <div className={"editor"}>
            {/*<MonacoEditor*/}
            {/*    value={props.value}*/}
            {/*    language={props.language}*/}
            {/*    height="100%"*/}
            {/*    width="100%"*/}
            {/*    // @ts-ignore*/}
            {/*    options={options}*/}
            {/*    onChange={(val) => {*/}
            {/*    props.onChange?props.onChange(val):''*/}
            {/*}}/>*/}
            <CodeMirror
                height="100vh"
                value={props.value}
                extensions={[scroll,markdown({base: markdownLanguage, codeLanguages: languages})]}
            />
        </div>
    )
}

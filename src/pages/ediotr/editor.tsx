import {useRef, useState} from 'react';
import CodeMirror from '@uiw/react-codemirror';
import {markdown, markdownLanguage} from '@codemirror/lang-markdown';
import {css} from '@codemirror/lang-css';
import {languages} from '@codemirror/language-data';
import {emitter, EventType} from "@/utils";
import * as events from '@uiw/codemirror-extensions-events';
import {keymap} from "@codemirror/view"
import {h1} from "@/pages/home/components/key-events";

type Props = {
    value?: string;
    language?: string;
    insert?: boolean;
    onChange?: (value: string) => void;
};
export default function Editor(props: Props) {
    const editor = useRef(null)
    const [content, setContent] = useState(props.value || '')
    emitter.on(EventType.keyEvents, (key) => {
        if(props.insert){
            console.log('key11', key)
            console.log(editor)

            // h1()
        }
    })
    //编辑器语言
    const language = (): any => {
        if (props.language === 'markdown') {
            return markdown({base: markdownLanguage, codeLanguages: languages});
        } else if (props.language === 'css') {
            return css();
        }
    }

    //滚动事件
    const scroll = events.scroll({
        scroll: (evn) => {
            // console.log("滚动", evn);
            // setScrollTop(evn.target.scrollTop);
            // @ts-ignore
            emitter.emit(EventType.Scroll, evn.target.scrollTop);
        },
    });

    const eventExt = events.content({
        focus: (evn) => {
            console.log('focus');
            console.log(evn)
            console.log(editor)
        },
        blur: (evn) => {
            console.log('blur');
            console.log(evn)
        },
    });
    //插入文字
    const insertText = (text: string) => {
        // @ts-ignore
        const state = editor.current.view.viewState.state;
        const range = state.selection.ranges[0];
        // @ts-ignore
        editor.current.view.dispatch({
            changes: {
                from: range.from,
                to: range.to,
                insert: text
            }
        })
        console.log("11111")
        console.log(editor.current)
    }

    return (
        <div className={"editor"}>
            {/*<button onClick={() => {*/}
            {/*    insertText("哈哈哈")*/}
            {/*}}>*/}
            {/*    添加*/}
            {/*</button>*/}
            <CodeMirror
                placeholder={"请输入文章内容"}
                width="100%"
                height="100vh"
                autoFocus={true}
                ref={editor}
                onChange={(value: string) => {
                    props.onChange && props.onChange(value)
                }}
                value={content}
                extensions={[
                    scroll,
                    eventExt,
                    language(),
                    keymap.of([{
                            key: "Cmd-s",
                            run: (event) => {
                                console.log("插入新行")
                                return false
                            }
                        }]
                    )
                ]}
            />
        </div>
    )
}

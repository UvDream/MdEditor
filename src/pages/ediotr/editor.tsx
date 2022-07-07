import {useRef} from 'react';
import CodeMirror from '@uiw/react-codemirror';
import {markdown, markdownLanguage} from '@codemirror/lang-markdown';
import {css} from '@codemirror/lang-css';
import {languages} from '@codemirror/language-data';
import {emitter, EventType} from "@/utils";
import * as events from '@uiw/codemirror-extensions-events';
import {insert, keymapEvent} from "@/pages/home/components/key-events";

type Props = {
    value?: string;
    language?: string;
    insert?: boolean;
    onChange?: (value: string) => void;
    mdEditor?: boolean;
};
export default function Editor(props: Props) {
    const editor = useRef(null)
    if (props.mdEditor) {
        emitter.on(EventType.KeyEvents, (key: any) => {
            if (props.insert) {
                console.log('key11', key)
                if (key.id === '2-1') {
                    insert(editor, '#', 1)
                } else if (key.id === '2-2') {
                    insert(editor, '##', 2)
                }
            }
        })
    }

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
            emitter.emit(EventType.Scroll, evn.target.scrollTop)
        },
    });

    const eventExt = events.content({
        focus: (evn) => {
            // console.log('focus');
            // console.log(evn)
        },
        blur: (evn) => {
            // console.log('blur');
            // console.log(evn)
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
            },
            selection: {anchor: range.from + 1}
        })
    }

    return (
        <div className={"editor"}>
            {/*<button onClick={() => {*/}
            {/*    // insertText("#")*/}
            {/*    insert(editor, '#', 1)*/}
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
                value={props.value}
                extensions={[
                    scroll,
                    eventExt,
                    language(),
                    keymapEvent(editor)
                ]}
            />
        </div>
    )
}

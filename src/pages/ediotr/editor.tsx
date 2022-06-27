import {useRef} from 'react';
import CodeMirror from '@uiw/react-codemirror';
import {markdown, markdownLanguage} from '@codemirror/lang-markdown';
import {css} from '@codemirror/lang-css';
import {languages} from '@codemirror/language-data';
import {ViewPlugin} from "@codemirror/view";
import {emitter, EventType} from "@/utils";
import * as events from '@uiw/codemirror-extensions-events';

type Props = {
    value?: string;
    language?: string;
    onChange?: (value: string) => void;
};
export default function Editor(props: Props) {
    const editor = useRef(null)
    // 编辑器语言
    const language = (): any => {
        if (props.language === 'markdown') {
            return markdown({base: markdownLanguage, codeLanguages: languages});
        } else if (props.language === 'css') {
            return css();
        }
    }

    const scroll = ViewPlugin.fromClass(
        class {
            constructor(view: any) {
                view.scrollDOM.addEventListener("scroll", () => {
                    // console.log("111",view.scrollDOM.scrollTop);
                    emitter.emit(EventType.Scroll, view.scrollDOM.scrollTop);
                });
            }
        }
    );

    const eventExt = events.scroll({
        scroll: (evn) => {
            console.log("滚动", evn);
            // setScrollTop(evn.target.scrollTop);
        },
    });

    const eventExt2 = events.content({
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
    const getInstance = (instance: any) => {
        if (instance?.state) {
            instance.state.replaceSelection("!!!!")
            console.log("111")
            console.log(instance.state)
        }
    }

    return (
        <div className={"editor"}>
            <CodeMirror
                placeholder={"请输入文章内容"}
                width="100%"
                height="100vh"
                ref={getInstance}
                value={props.value}
                extensions={[scroll, eventExt, eventExt2, language()]}
            />
        </div>
    )
}

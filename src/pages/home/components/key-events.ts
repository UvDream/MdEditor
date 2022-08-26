import {keymap} from "@codemirror/view";
import {EditorShortcuts} from "@/pages/home/components/shortcuts";
type keymapType={
    key:string,
    code:string
    selection:number
}
/**
 * 快捷键配置
 */
const KeyMapConfig:Array<keymapType>= [
    {
        key: EditorShortcuts().h1,
        code: "# ",
        selection: 2
    },
    {
        key: EditorShortcuts().h2,
        code: "## ",
        selection: 3
    },
    {
        key: EditorShortcuts().h3,
        code: "### ",
        selection: 4
    },
    {
        key: EditorShortcuts().h4,
        code: "#### ",
        selection: 5
    },
    {
        key: EditorShortcuts().h5,
        code: "##### ",
        selection: 6
    },
    {
        key: EditorShortcuts().h6,
        code: "###### ",
        selection: 7
    },
    {
        key: EditorShortcuts().code,
        code: '```\n\n```',
        selection: 4
    },
    {
        key: EditorShortcuts().math,
        code: '$$\n\n$$',
        selection: 3
    },
    {
        key: EditorShortcuts().reference,
        code: '>',
        selection: 1
    },
    {
        key: EditorShortcuts().an_ordered_list,
        code: '1. ',
        selection: 3
    },
    {
        key: EditorShortcuts().unordered_list,
        code: '-  ',
        selection: 2
    },
    {
        //TODO
        key: EditorShortcuts().task_list,
        code: '-[] ',
        selection: 4
    },
    {
        key: EditorShortcuts().links_to_reference,
        code: '[]:  ',
        selection: 1
    },
    {
        key: EditorShortcuts().horizontal_line,
        code: '\n------\n',
        selection: 8
    },
    {
        key: EditorShortcuts().indent,
        code: '&#x3000;&#x3000;',
        selection: 16
    },
    {
        key: EditorShortcuts().bold,
        code: '****',
        selection: 2
    },
    {
        //TODO
        key: EditorShortcuts().italic,
        code: '**',
        selection: 1
    },
    {
        //TODO
        key: EditorShortcuts().underline,
        code: '<u></u>',
        selection: 3
    },
    {
        key: EditorShortcuts().code_block,
        code: '``',
        selection: 1
    },
    {
        key: EditorShortcuts().delete_line,
        code: '~~~~',
        selection: 2
    },
    {
        key: EditorShortcuts().annotation,
        code: '<!---->',
        selection: 4
    },
    {
        key: EditorShortcuts().hyperlinks,
        code: '[]()',
        selection: 1
    },
    {
        key: EditorShortcuts().image,
        code: '![]()',
        selection: 2
    }
]
export const KeyMapFunc = (editor: any): any => {
    return KeyMapConfig.map(item => {
        return {
            key: item.key,
            preventDefault: true,
            run: (event:any) => {
                insert(editor, item.code, item.selection)
                return false
            }
        }
    })
}
export const MenusInsert=(editor:any,shortcuts:string)=>{
    const obj:keymapType=KeyMapConfig.find(item=>item.key===EditorShortcuts()[shortcuts]) as keymapType
    insert(editor, obj.code, obj.selection)
}
/**
 * 插入光标
 * @param editor
 * @param text
 * @param selection
 */
export const insert = (editor: any, text: string, selection: number) => {
    const state = editor.current.view.viewState.state;
    const range = state.selection.ranges[0];
    editor.current.view.dispatch({
        changes: {
            from: range.from,
            to: range.to,
            insert: `${text}`
        },
        selection: {anchor: range.from + selection}
    })
}
/**
 * 编辑器快捷键控制
 * @param editor
 */
export const keymapEvent = (editor: any) => {
    return keymap.of(
        KeyMapFunc(editor)
    )
}



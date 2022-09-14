import {GetSystem} from "@/utils";

export enum MacShortcuts {
    export = "⌘ U",
    new_file = "⌘ N",
    export_markdown = "⌘ M",
    export_pdf = "⌘ P",
    import = "⌘ I",
    //    段落
    h1 = "⌘ 1",
    h2 = "⌘ 2",
    h3 = "⌘ 3",
    h4 = "⌘ 4",
    h5 = "⌘ 5",
    h6 = "⌘ 6",
    code = "⌥ ⌘ C",
    math = "⌥ ⌘ B",
    reference = "⌥ ⌘ Q",
    an_ordered_list = "⌥ ⌘ O",
    unordered_list = "⌥ ⌘ U",
    task_list = "⌥ ⌘ X",
    links_to_reference = "⌥ ⌘ L",
    horizontal_line = "⌥ ⌘ -",
    indent = "⌥ ⌘ T",
    //    格式
    bold = "⌘ B",
    italic = "⌘ I",
    underline = "⌘ U",
    code_block = "⌃ `",
    delete_line = "⌃ ⇧ D",
    annotation = "⌃ -",
    hyperlinks = "⌘ K",
    image = "⌘ I",
}

export enum WindowsShortcuts {
    export = "CTRL+U",
    new_file = "CTRL+N",
    export_markdown = "CTRL+M",
    export_pdf = "CTRL+P",
    import = "CTRL+I",
    //    段落
    h1 = "CTRL+1",
    h2 = "CTRL+2",
    h3 = "CTRL+3",
    h4 = "CTRL+4",
    h5 = "CTRL+5",
    h6 = "CTRL+6",
    code = "⌥ ⌘ C",
    math = "⌥ ⌘ B",
    reference = "⌥ ⌘ Q",
    an_ordered_list = "⌥ ⌘ O",
    unordered_list = "⌥ ⌘ U",
    task_list = "⌥ ⌘ X",
    links_to_reference = "⌥ ⌘ L",
    horizontal_line = "⌥ ⌘ -",
    indent = "⌥ ⌘ T",
    //    格式
    bold = "CTRL+B",
    italic = "CTRL+I",
    underline = "CTRL+U",
    code_block = "⌃ `",
    delete_line = "⌃ ⇧ D",
    annotation = "⌃ -",
    hyperlinks = "CTRL+K",
    image = "CTRL+I",
}

/**
 * 获取快捷键
 * @constructor
 */
export function Shortcuts(): MacShortcuts | WindowsShortcuts | any {
    let system = GetSystem();
    if (system === "mac") return MacShortcuts;
    if (system === "window") return WindowsShortcuts;
    return MacShortcuts;
}

/**
 * 获取编辑器快捷键
 * @constructor
 */
export function EditorShortcuts(): MacShortcuts | WindowsShortcuts | any {
    let system = GetSystem();
    if (system === "mac") return MacEditorShortcuts;
    if (system === "window") return WindowsEditorShortcuts;
    return WindowsEditorShortcuts;
}

export enum MacEditorShortcuts {
    export = "⌘ U",
    new_file = "⌘ N",
    export_markdown = "⌘ M",
    export_pdf = "⌘ P",
    import = "⌘ I",
    //    段落
    h1 = "Cmd-1",
    h2 = "Cmd-2",
    h3 = "Cmd-3",
    h4 = "Cmd-4",
    h5 = "Cmd-5",
    h6 = "Cmd-6",
    code = "Alt-Cmd-c",
    math = "Alt-Cmd-b",
    reference = "Alt-Cmd-q",
    an_ordered_list = "Alt-Cmd-o",
    unordered_list = "Alt-Cmd-u",
    task_list = "Alt-Cmd-x",
    links_to_reference = "Alt-Cmd-l",
    horizontal_line = "Alt-Cmd--",
    indent = "Alt-Cmd-y",
    //    格式
    bold = "Cmd-b",
    italic = "Cmd-i",
    underline = "Cmd-u",
    code_block = "Ctrl-`",
    delete_line = "Ctrl-Shift-`",
    annotation = "Ctrl--",
    hyperlinks = "Cmd-k",
    image = "Ctrl-Cmd-i",
    paste = "Cmd-v",
}

export enum WindowsEditorShortcuts {
    export = "CTRL+U",
    new_file = "CTRL+N",
    export_markdown = "CTRL+M",
    export_pdf = "CTRL+P",
    import = "CTRL+I",
    //    段落
    h1 = "CTRL+1",
    h2 = "CTRL+2",
    h3 = "CTRL+3",
    h4 = "CTRL+4",
    h5 = "CTRL+5",
    h6 = "CTRL+6",
    code = "⌥ ⌘ C",
    math = "⌥ ⌘ B",
    reference = "⌥ ⌘ Q",
    an_ordered_list = "⌥ ⌘ O",
    unordered_list = "⌥ ⌘ U",
    task_list = "⌥ ⌘ X",
    links_to_reference = "⌥ ⌘ L",
    horizontal_line = "⌥ ⌘ -",
    indent = "Alt-Cmd-T",
    //    格式
    bold = "CTRL+B",
    italic = "CTRL+I",
    underline = "CTRL+U",
    code_block = "⌃ `",
    delete_line = "⌃ ⇧ D",
    annotation = "⌃ -",
    hyperlinks = "CTRL+K",
    image = "CTRL+I",
    paste = "CTRL+V",
}

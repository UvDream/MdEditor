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
    return MacShortcuts
}

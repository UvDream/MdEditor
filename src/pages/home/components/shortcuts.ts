import {GetSystem} from "@/utils";

export enum MacShortcuts {
    export = "⌘ U",
    new_file= "⌘ N",
    export_markdown = "⌘ M",
    export_pdf = "⌘ P",
    import = "⌘ I",
}

export enum WindowsShortcuts {
    export = "CTRL U"
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

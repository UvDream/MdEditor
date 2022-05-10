/**
 * 设置dom的样式
 * @param el
 * @param value
 */
export const setStyle = (el: string, value: string) => {
    let dom = document.querySelector("#"+el);
    if (dom) {
        dom.innerHTML = value
    } else {
        let styleDom = document.createElement("style")
        styleDom.id = el
        styleDom.innerHTML = value
        document.head.appendChild(styleDom)
    }
}
/**
 * 设置编辑器样式
 * @param value
 */
export const setEditorStyle = (value: string) => {
    setStyle('md-editor-theme', value);
}
/**
 * 设置编辑器代码块样式
 * @param value
 */
export const setCodeStyle = (value: string) => {
    setStyle('md-editor-code', value);
}

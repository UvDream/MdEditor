/**
 * 设置dom的样式
 * @param el
 * @param value
 */
export const setStyle = (el: string, value: string) => {
  let dom = document.querySelector("#" + el) as HTMLElement;
  if (!dom) {
    dom = document.createElement("style");
    dom.id = el;
    dom.innerHTML = value;
    const head = document.getElementsByTagName("head")[0];
    head.appendChild(dom);
  } else {
    dom.innerHTML = value;
  }
};

/**
 * 设置编辑器样式
 * @param value
 */
export const setEditorStyle = (value: string) => {
  setStyle("md-editor-theme", value);
};
/**
 * 设置编辑器代码块样式
 * @param value
 */
export const setCodeStyle = (value: string) => {
  setStyle("md-editor-code", value);
};

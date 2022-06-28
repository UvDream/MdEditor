const wrapChar = /windows|win32/i.test(navigator.userAgent) ? "\r\n" : "\n";

export const h1 = (editor: any, selection: any) => {
    editor.replaceSelection(`# ${selection}`);
}
export const h2 = (editor: any, selection: any) => {
    editor.replaceSelection(`## ${selection}`);
}
export const h3 = (editor: any, selection: any) => {
    editor.replaceSelection(`### ${selection}`);
}
export const h4 = (editor: any, selection: any) => {
    editor.replaceSelection(`#### ${selection}`);
}
export const h5 = (editor: any, selection: any) => {
    editor.replaceSelection(`##### ${selection}`);
}
export const h6 = (editor: any, selection: any) => {
    editor.replaceSelection(`###### ${selection}`);
}
export const code = (editor: any, selection: any) => {
    editor.replaceSelection(`${wrapChar}\`\`\`${wrapChar}${selection}${wrapChar}\`\`\`${wrapChar}`);
    const cursor = editor.getCursor();
    cursor.line -= 2;
    editor.setCursor(cursor);
}

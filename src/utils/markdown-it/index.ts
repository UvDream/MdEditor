import MarkdownIt from "markdown-it";
//markdown 解析器
export const markdownParser = new MarkdownIt({
    html: true,
    breaks: true,
    linkify: true,
    typographer: true,
    quotes: '“”‘’'
})

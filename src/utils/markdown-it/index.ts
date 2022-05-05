import MarkdownIt from "markdown-it";
import MarkdownItSpan from "./markdown-it-span"
//markdown 解析器
export const markdownParser = new MarkdownIt({
    html: true,
    breaks: true,
    linkify: true,
    typographer: true,
    quotes: '“”‘’'
})

markdownParser.use(MarkdownItSpan)

import MarkdownIt from "markdown-it";
import MarkdownItSpan from "./markdown-it-span";
import highlightjs from "highlight.js";
import emoji from "markdown-it-emoji";
//@ts-ignore
import katex from "markdown-it-katex"
import "katex/dist/katex.min.css"
//markdown 解析器
export const markdownParser = new MarkdownIt({
  html: true,
  breaks: true,
  linkify: true,
  typographer: true,
  quotes: "“”‘’",
  highlight: (str: string, lang: string) => {
    if (lang === undefined || lang === "") {
      lang = "bash";
    }
    if (lang && highlightjs.getLanguage(lang)) {
      try {
        const formatted = highlightjs
          .highlight(lang, str, true)
          .value.replace(/\n/g, "<br/>") // 换行用br表示
          .replace(/\s/g, "&nbsp;") // 用nbsp替换空格
          .replace(/span&nbsp;/g, "span "); // span标签修复
        return (
          '<pre class="custom"><code class="hljs">' +
          formatted +
          "</code></pre>"
        );
      } catch (e) {
        console.log(e);
      }
    }
    return '<pre class="custom"><code class="hljs">' + str + "</code></pre>";
  },
});

markdownParser.use(MarkdownItSpan);
markdownParser.use(emoji);
markdownParser.use(katex);

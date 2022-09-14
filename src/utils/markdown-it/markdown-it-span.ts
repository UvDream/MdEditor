
export default (md: any, opt: any) => {
    let defaults = {
        anchorClass: "markdown-it-heading-span",
        addHeadingSpan: true,
        slugify: slugify
    }
    let options = md.utils.assign(defaults, opt)
    md.core.ruler.push("heading_span", makeRule(md, options));
};

function slugify(s: any, md: any) {
    let spaceRegex = new RegExp(md.utils.lib.ucmicro.Z.source, "g");
    return encodeURIComponent(s.replace(spaceRegex, ""));
}

function makeRule(md: any, options: any) {
    return function addHeadingAnchors(state: any) {
        for (let i = 0; i < state.tokens.length - 1; i++) {
            if (state.tokens[i].type !== "heading_open" || state.tokens[i + 1].type !== "inline") {
                continue;
            }

            let headingInlineToken = state.tokens[i + 1];

            if (!headingInlineToken.content) {
                continue;
            }

            if (options.addHeadingSpan) {
                let spanTokenPre = new state.Token("html_inline", "", 0);
                spanTokenPre.content = `<span class="prefix"></span><span class="content">`;
                headingInlineToken.children.unshift(spanTokenPre);
                let spanTokenPost = new state.Token("html_inline", "", 0);
                spanTokenPost.content = `</span><span class="suffix"></span>`;
                headingInlineToken.children.push(spanTokenPost);
            }

            i += 2;
        }
    };
}

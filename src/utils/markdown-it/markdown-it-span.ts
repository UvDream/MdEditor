import MarkdownIt from "markdown-it";

export default (md:MarkdownIt, opt:T) => {
    let defaults = {
        anchorClass: "markdown-it-headeing-span",
        addHeadingSpan: true,
        slugify:slugify
    }
    let options=md.utils.assign(defaults,opt)
    md.core.rule.push('heading_span',makeRule(md,options))
};
function slugify(s, md) {
    let  spaceRegex = new RegExp(md.utils.lib.ucmicro.Z.source, "g");
    return encodeURIComponent(s.replace(spaceRegex, ""));
}
function  makeRule(md,opts){

}

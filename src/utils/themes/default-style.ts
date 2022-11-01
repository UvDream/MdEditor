export const defaultStyle = `
/*默认样式*/
/*全局属性*/
.md-editor {
    color              : #2b2b2b;
    letter-spacing     : 2px;
    font-family        : Optima-Regular, Optima, PingFangTC-Light, PingFangSC-light, PingFangTC-light;
    background-image   : linear-gradient(90deg, rgba(50, 0, 0, 0.1) 3%, rgba(0, 0, 0, 0) 3%), linear-gradient(360deg, rgba(50, 0, 0, 0.1) 3%, rgba(0, 0, 0, 0) 3%);
    background-size    : 10px 10px;
    background-position: center center;
    font-size          : 14px;
}

/*标题*/
.md-editor h1,
.md-editor h2,
.md-editor h3,
.md-editor h4,
.md-editor h5,
.md-editor h6 {
    margin: 8px 0;
}

.md-editor h1 {}

.md-editor h2 {
    display        : flex;
    justify-content: center;
    border         : none;
    color          : rgb(130, 127, 196);
    padding        : 0;
}

.md-editor h3 {}

.md-editor h4 {}

.md-editor h5 {}

.md-editor h6 {}

.md-editor h1 .prefix {}

.md-editor h2 .prefix {
    display          : block;
    width            : 35px;
    height           : 35px;
    background-size  : 100% 100%;
    background-repeat: no-repeat;
    background-image : url(https://pic.uvdream.cn/20220421140734.png);
    margin-right     : -20px;
}

.md-editor h3 .prefix {}

.md-editor h4 .prefix {}

.md-editor h5 .prefix {}

.md-editor h6 .prefix {}

.md-editor h1 .suffix {}

.md-editor h2 .suffix {
    display          : block;
    width            : 15px;
    height           : 15px;
    background-size  : 100% 100%;
    background-repeat: no-repeat;
    background-image : url(https://pic.uvdream.cn/20220424093727.png);
}

.md-editor h3 .suffix {}

.md-editor h4 .suffix {}

.md-editor h5 .suffix {}

.md-editor h6 .suffix {}

.md-editor h1 .content {}

.md-editor h2 .content {}

.md-editor h3 .content {}

.md-editor h4 .content {}

.md-editor h5 .content {}

.md-editor h6 .content {}

/*段落*/
.md-editor p {
    line-height: 2.2;
    margin-top : 10px;
}

/*图片*/
.md-editor p>img {
    width: 100%;
}

.md-editor p code {
    word-break      : break-word;
    border-radius   : 2px;
    overflow-x      : auto;
    background-color: #fff5f5;
    color           : #ff502c;
    font-size       : .87em;
    padding         : .065em .4em;
}

/* 表格 */
.md-editor .table {
    width          : 100%;
    border-collapse: collapse;
    border-right   : 1px solid rgba(0, 0, 0, .06);
    border-bottom  : 1px solid rgba(0, 0, 0, .06);
}

.md-editor .table thead {
    background: #fafafa;
    height    : 40px;
}

.md-editor .table tbody tr {
    height: 40px;
}
.md-editor .table tbody tr:hover{
    background: #fafafa;
}

.md-editor .table tr td,
.md-editor .table tr th {
    border-top : 1px solid rgba(0, 0, 0, .06);
    border-left: 1px solid rgba(0, 0, 0, .06);
}

.md-editor .table tbody tr:nth-child(2n) {
    background: #fafafa;
}
`;

export const DarkDefaultStyle = `
/*可以编写一些暗黑主题兼容性代码*/
/*系统暗黑主题切换*/
@media (prefers-color-scheme: light) {}

@media (prefers-color-scheme: dark) {}

/*一些网站主题切换*/
html[data-mode="light"] {}

html[data-mode="dark"] {}
`;

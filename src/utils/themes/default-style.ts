export const defaultStyle = `
/*默认样式*/
/*全局属性*/
.md-editor{
  line-height: 2;
  color: #2b2b2b;
  font-family: Optima-Regular, Optima, PingFangTC-Light, PingFangSC-light, PingFangTC-light;
  letter-spacing: 2px;
  background-image: linear-gradient(90deg, rgba(50, 0, 0, 0.1) 3%, rgba(0, 0, 0, 0) 3%), linear-gradient(360deg, rgba(50, 0, 0, 0.1) 3%, rgba(0, 0, 0, 0) 3%);
  background-size: 10px 10px;
  background-position: center center;
}
/*标题*/
.md-editor h1,
.md-editor h2,
.md-editor h3,
.md-editor h4,
.md-editor h5,
.md-editor h6{
    color:green;
    margin:8px 0;
 }
.md-editor h1{
}
.md-editor h2{
 display: flex;
  justify-content: center;
  border: none;
  color: rgb(130, 127, 196);
  padding: 0;
}
.md-editor h3{
}
.md-editor h4{
}
.md-editor h5{
}
.md-editor h6{
}
.md-editor h1 .prefix{
}
.md-editor h2 .prefix{
display: block;
  width: 35px;
  height: 35px;
  background-size:100% 100%;
  background-repeat:no-repeat;
  background-image: url(http://www.pic.uvdream.cn/20220421140734.png); 
  margin-right: -20px;
}
.md-editor h3 .prefix{
}
.md-editor h4 .prefix{
}
.md-editor h5 .prefix{
}
.md-editor h6 .prefix{
}
.md-editor h1 .suffix{
}   
.md-editor h2 .suffix{
display: block;
  width: 15px;
  height: 15px;
  background-size:100% 100%;
  background-repeat:no-repeat;
  background-image: url(http://www.pic.uvdream.cn/20220424093727.png);
}
.md-editor h3 .suffix{
}
.md-editor h4 .suffix{
}
.md-editor h5 .suffix{
}
.md-editor h6 .suffix{
}
.md-editor h1 .content{
}
.md-editor h2 .content{
}
.md-editor h3 .content{
}
.md-editor h4 .content{
}
.md-editor h5 .content{
}
.md-editor h6 .content{
}
/*段落*/
.md-editor p{
}
.md-editor p code{
    word-break: break-word;
    border-radius: 2px;
    overflow-x: auto;
    background-color: #fff5f5;
    color: #ff502c;
    font-size: .87em;
    padding: .065em .4em;
}
`;

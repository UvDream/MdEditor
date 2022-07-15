import {atom} from "recoil";
//markdown 内容
export const ArticleDetailState = atom({
    key: 'ArticleDetailState',
    default:"编辑器内容"
})
// 编辑器保存状态
export const EditorState = atom({
    key: 'EditorState',
    default:true
})



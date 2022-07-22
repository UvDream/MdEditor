import {atom} from "recoil";
//markdown 内容
export const ArticleDetailState = atom({
    key: 'ArticleDetailState',
    default:"编辑器内容"
})

export const ThemeID=atom({
    key:"ThemeID",
    default:9999
})

import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {getArticleDetail} from "@/api/article";
import {useNavigate} from "react-router-dom";

const initialState: API.Article = {status: "", title: ""}
export const GetArticleDetail = createAsyncThunk("article/detail", async (params: API.getArticleDetailParams) => {
    const res = await getArticleDetail(params) as unknown as API.Response;
    return res.data;
})
// const navigate = useNavigate()


export const ArticleDetailState = createSlice({
    name: "articleDetail",
    initialState,
    reducers: {
        SetArticleDetail: (state, action) => {
            const {payload} = action
            state = {...state, ...payload}
            return state
        },
        AddArticle: (state) => {
            state = {
                id: "",
                author: [],
                categories: [],
                categories_id: [],
                comment_count: 0,
                disable_comments: false,
                editor_type: "",
                html_content: "",
                is_top: false,
                likes: 0,
                md_content: "",
                password: "",
                slug: "",
                status: "DRAFT",
                summary: "",
                tags: [],
                tags_id: [],
                thumbnail: "",
                title: "新建文章",
                visits: 0,
                word_count: 0
            } as API.Article
            // navigate(`/editor?id=add`)
            return state
        }
    },
    extraReducers(builder) {
        builder
            .addCase(GetArticleDetail.pending, (state) => {
                console.log("🚀 ~ 进行中!");
            })
            .addCase(GetArticleDetail.fulfilled, (state, action) => {
                console.log("🚀 ~ 成功!");
                console.log(action)
                state = action.payload;
                return state;
            })
            .addCase(GetArticleDetail.rejected, (state, err) => {
                console.log("🚀 ~ 失败!");
            })
    }
})
export const {SetArticleDetail, AddArticle} = ArticleDetailState.actions;
export default ArticleDetailState.reducer;

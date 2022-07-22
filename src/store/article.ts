import {ArticleApi, ArticleDetailType} from "@/api/article";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {ResponseType} from "@/api/request";

const initialState: ArticleDetailType = {}
export const getArticleDetail = createAsyncThunk("article/detail", async (params: object) => {
    const res = await ArticleApi.detail(params) as ResponseType;
    console.log("文章详情", res)
    return res.data;
})


export const ArticleDetailState = createSlice({
    name: "articleDetail",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(getArticleDetail.pending, (state) => {
                console.log("🚀 ~ 进行中!");
            })
            .addCase(getArticleDetail.fulfilled, (state, action) => {
                console.log("🚀 ~ 成功!");
                state = action.payload;
                return state;
            })
            .addCase(getArticleDetail.rejected, (state, err) => {
                console.log("🚀 ~ 失败!");
            })
    }
})
export default ArticleDetailState.reducer;

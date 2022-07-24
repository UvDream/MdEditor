import {ArticleApi, ArticleDetailType} from "@/api/article";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {ResponseType} from "@/api/request";
import {Message} from "@arco-design/web-react";
import {Simulate} from "react-dom/test-utils";
import play = Simulate.play;
import {CalcWordCount} from "@/utils";

const initialState: ArticleDetailType = {}
export const GetArticleDetail = createAsyncThunk("article/detail", async (params: object) => {
    const res = await ArticleApi.detail(params) as ResponseType;
    return res.data;
})


export const ArticleDetailState = createSlice({
    name: "articleDetail",
    initialState,
    reducers: {
        SetArticleDetail: (state, action) => {
            const {payload} = action
            state = {...state, ...payload}
            return state
        },

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
export const {SetArticleDetail} = ArticleDetailState.actions;
export default ArticleDetailState.reducer;

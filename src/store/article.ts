import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {getArticleDetail} from "@/services/api/article";

const initialState: API.Article = {status: "", title: ""}
export const GetArticleDetail = createAsyncThunk("article/detail", async (params: API.getArticleDetailParams) => {
    const res = await getArticleDetail(params) as unknown as API.Response;
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

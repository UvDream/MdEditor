import {UserInfo} from "@/api/user";
import {createSlice} from "@reduxjs/toolkit";

export interface ThemeType {
    id?: number;
    name?: string;
    description?: string;
    thumbnail?: string;
    auth_id?: string;
    is_public?: boolean;
    author?: UserInfo;
    theme?: string;
}

const initialState: ThemeType = {};
export const ThemeDetail = createSlice({
    name: "theme",
    initialState,
    reducers: {
        //设置主题代码
        SetTheme: (state, action) => {
            state.theme = action.payload;
            return state
        },
        //新建主题
        CreateTheme: (state, action) => {
            delete state.id
            let user = JSON.parse(localStorage.getItem("user") || "") as UserInfo
            state.auth_id = user.uuid
            state.name = "新建主题"
            state.description = "新建主题描述"
            state.thumbnail = ""
            return state
        },
        //修改主题
        UpdateTheme: (state, action) => {
            state = {...action.payload}
            return state
        }
    }
})
export const {SetTheme, CreateTheme, UpdateTheme} = ThemeDetail.actions;
export default ThemeDetail.reducer;

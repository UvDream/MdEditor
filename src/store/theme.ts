import { createSlice } from "@reduxjs/toolkit";
import { defaultStyle, DarkDefaultStyle } from "@/utils";

const initialState: API.Theme = {
  theme: defaultStyle,
  dark_theme: DarkDefaultStyle,
};
export const ThemeDetail = createSlice({
  name: "theme",
  initialState,
  reducers: {
    //设置主题代码
    SetTheme: (state, action) => {
      state.theme = action.payload;
      return state;
    },
    SetDarkTheme: (state, action) => {
      state.dark_theme = action.payload;
      return state;
    },
    //新建主题
    CreateTheme: (state, action) => {
      delete state.id;
      state.name = "新建主题";
      state.description = "新建主题描述";
      state.thumbnail = "";
      return state;
    },
    //修改主题
    UpdateTheme: (state, action) => {
      state = { ...action.payload };
      return state;
    },
  },
});
export const { SetTheme, CreateTheme, UpdateTheme, SetDarkTheme } =
  ThemeDetail.actions;
export default ThemeDetail.reducer;

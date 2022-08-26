import {CodeThemeList, CodeThemeType} from "@/pages/home/components/code-theme";
import {createSlice} from "@reduxjs/toolkit";
import {setCodeStyle} from "@/utils";

const initialState: CodeThemeType = CodeThemeList.filter(element => {
    return element.value == localStorage.getItem("code-theme")
})[0]
export const CodeTheme = createSlice({
    name: "code-theme",
    initialState,
    reducers: {
        //选择主题
        SelectTheme: (state, action) => {
            state = action.payload
            state.code && setCodeStyle(state.code)
            state.value && localStorage.setItem("code-theme", state.value)
            return state
        }
    }
})
export const {SelectTheme} = CodeTheme.actions
export default CodeTheme.reducer;
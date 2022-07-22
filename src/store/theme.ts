import {UserInfo} from "@/api/user";
import {createSlice} from "@reduxjs/toolkit";

export interface ThemeType {
    ID?: number;
    name?: string;
    description?: string;
    thumbnail?: string;
    auth_id?: string;
    is_public?: boolean;
    auth?: UserInfo;
}
const initialState:ThemeType= {};
export const ThemeDetail = createSlice({
    name: "theme",
    initialState,
    reducers: {

    }
})

export default ThemeDetail.reducer;

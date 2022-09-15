import {createSlice} from "@reduxjs/toolkit";

const initialState: boolean = true;
export const SaveState = createSlice({
    name: "saveState",
    initialState,
    reducers: {
        changeState: (state, {payload}) => {
            state = payload;
            return state;
        },
    },
});
export const {changeState} = SaveState.actions;
export default SaveState.reducer;

import {configureStore} from "@reduxjs/toolkit";
import SaveStateSlice from "@/store/save-state";

const store = configureStore({
    reducer: {
        saveState: SaveStateSlice
    }
})

export default store;


export type RootState = ReturnType<typeof store.getState>;

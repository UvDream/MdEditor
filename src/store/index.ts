import {configureStore} from "@reduxjs/toolkit";
import SaveStateSlice from "@/store/save-state";
import ThemeDetailSlice from "@/store/theme";
import ArticleDetailSlice from "@/store/article";

const store = configureStore({
    reducer: {
        saveState: SaveStateSlice,
        themeDetail: ThemeDetailSlice,
        articleDetail: ArticleDetailSlice,
    }
})

export default store;


export type RootState = ReturnType<typeof store.getState>;

import {configureStore} from "@reduxjs/toolkit";
import SaveStateSlice from "@/store/save-state";
import ThemeDetailSlice from "@/store/theme";
import ArticleDetailSlice from "@/store/article";
import CodeThemeSlice from "@/store/code-theme";

const store = configureStore({
    reducer: {
        saveState: SaveStateSlice,
        themeDetail: ThemeDetailSlice,
        articleDetail: ArticleDetailSlice,
        codeTheme: CodeThemeSlice,
    },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;

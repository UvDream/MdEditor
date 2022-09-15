import MenusItem from "./menus-item";
import {Divider} from "@arco-design/web-react";
import {useFullscreen} from "ahooks";
import {EventType, getConfig, setConfig, emitter} from "@/utils";
import {useState} from "react";

export default function Show() {
    const [isFullscreen, {enterFullscreen, exitFullscreen, toggleFullscreen}] =
        useFullscreen(document.getElementsByTagName("body")[0]);
    const fullScreen = (isFull: boolean) => {
        isFull ? enterFullscreen() : exitFullscreen();
    };
    const [editorArea, setEditorArea] = useState(getConfig().editorArea);
    const [previewArea, setPreviewArea] = useState(getConfig().previewArea);
    const [themeArea, setThemeArea] = useState(getConfig().themeArea);
    const config = getConfig();
    return (
        <div>
            <MenusItem
                checkbox={true}
                value={editorArea}
                title={"编辑区域"}
                onChange={(val: boolean) => {
                    config.editorArea = val;
                    setEditorArea(val);
                    setConfig(config);
                    emitter.emit(EventType.EditorShow);
                }}
            />
            <MenusItem
                checkbox={true}
                title={"预览区域"}
                value={previewArea}
                onChange={(val: boolean) => {
                    config.previewArea = val;
                    setPreviewArea(val);
                    setConfig(config);
                    emitter.emit(EventType.EditorShow);
                }}
            />
            <MenusItem
                checkbox={true}
                title={"主题样式编辑"}
                value={themeArea}
                onChange={(val: boolean) => {
                    config.themeArea = val;
                    setThemeArea(val);
                    setConfig(config);
                    emitter.emit(EventType.EditorShow);
                }}
            />
            <Divider style={{margin: "0px auto", minWidth: "unset"}}/>
            {isFullscreen ? (
                <MenusItem title={"退出全屏"} onClick={() => fullScreen(false)}/>
            ) : (
                <MenusItem title={"全屏"} onClick={() => fullScreen(true)}/>
            )}
        </div>
    );
}

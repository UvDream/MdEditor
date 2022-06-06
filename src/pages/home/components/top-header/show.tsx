import MenusItem from "./menus-item";
import {Divider} from "@arco-design/web-react";

export default function Show() {
    return (
        <div>
            <MenusItem checkbox={true} title={"编辑区域"}/>
            <MenusItem checkbox={true} title={"预览区域"}/>
            <MenusItem checkbox={true} title={"主题样式编辑"}/>
            <Divider style={{margin: "0px auto",  minWidth: "unset"}}/>
            <MenusItem title={"全屏"}/>
        </div>
    )
}

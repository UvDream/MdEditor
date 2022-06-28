import {TopMenusType} from "@/pages/home/components/common";
import MenusItem from "@/pages/home/components/top-header/menus-item";
import {Divider, Menu} from "@arco-design/web-react";
import "./top-header.less"
import Themes from "@/pages/home/components/top-header/themes";
import CodeThemes from "@/pages/home/components/top-header/code-themes";
import Show from "@/pages/home/components/top-header/show";

type DropListProps = {
    data: TopMenusType;
    onClick: (item: TopMenusType) => void;
};
export default function DropList(props: DropListProps) {
    const {type} = props.data
    if (props.data.children) {
        return (
            <>
                {props.data.children.map((item: TopMenusType) => {
                        return (
                            <span key={item.id}>
                            {
                                item.type === "divider" ?
                                    <Divider  style={{margin: "0px auto", minWidth: "unset"}}/> :
                                    <Menu.Item key={item.id}>
                                        <MenusItem
                                            // radio={true}
                                            title={item.name}
                                            shortcuts={item.shortcuts}
                                            onClick={() => {
                                                props.onClick(item)
                                            }}
                                        />
                                    </Menu.Item>
                            }
                        </span>
                        );
                    }
                )}
            </>
        )
    } else if (type === "code") {
        //代码主题选择
        return (
            <div className={"menus-item-content"}>
                <CodeThemes/>
            </div>
        )
    } else if (type === 'theme') {
        //主题选择
        return (
            <div className={"menus-item-content"}>
                <Themes/>
            </div>
        )
    } else if (type === 'show') {
        //显示
        return (
            <div className={"menus-item-content"}>
                <Show/>
            </div>
        )
    } else {
        return null
    }
}

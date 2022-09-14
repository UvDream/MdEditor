import {Dropdown, Menu} from "@arco-design/web-react";
import {TopMenusData, TopMenusType} from "../common";
import DropList from "./drop-list";
import {emitter, EventType} from "@/utils";

export default function TopMenus() {
    const menusItemClick = (key: TopMenusType) => {
        console.log("---------菜单点击----------", key);
        emitter.emit(EventType.KeyEvents, key);
        emitter.all.delete(EventType.KeyEvents);
    };
    return (
        <>
            {TopMenusData.map((item: TopMenusType, index) => {
                return (
                    <div className={"menus-item"} key={index}>
                        <Dropdown
                            trigger="click"
                            position="bl"
                            droplist={
                                <Menu>
                                    <DropList
                                        data={item}
                                        key={item.id}
                                        onClick={(key) => {
                                            menusItemClick(key);
                                        }}
                                    />
                                </Menu>
                            }
                        >
                            <div>{item.name}</div>
                        </Dropdown>
                    </div>
                );
            })}
        </>
    );
}

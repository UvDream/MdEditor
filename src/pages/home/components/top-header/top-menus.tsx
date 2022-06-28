import {Dropdown, Menu} from '@arco-design/web-react';
import {TopMenusData, TopMenusType} from '../common';
import DropList from "./drop-list";
import {useState} from "react";


export default function TopMenus() {
    const [menusShow, setMenusShow] = useState(false);
    const menusItemClick = (key: any) => {
        console.log('menusItemClick', key);
        return true
    }

    return (
        <>
            {
                TopMenusData.map((item: TopMenusType, index) => {
                    return (
                        <div className={"menus-item"} key={index}>
                            <Dropdown
                                trigger='click'
                                position='bl'
                                droplist={
                                    <Menu>
                                        <DropList data={item} onClick={() => {
                                        }}/>
                                    </Menu>
                                }
                            >
                                <div>
                                    {item.name}
                                </div>
                            </Dropdown>
                        </div>
                    )
                })
            }
        </>
    )
}

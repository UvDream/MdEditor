import {Dropdown} from '@arco-design/web-react';
import {TopMenusData, TopMenusType} from '../common';
import DropList from "./drop-list";

export default function TopMenus() {
    return (
        <>
            {
                TopMenusData.map((item:TopMenusType, index) => {
                    return (
                        <div className={"menus-item"} key={index}>
                            <Dropdown droplist={<DropList data={item}/>} trigger='click' position='bottom'>
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

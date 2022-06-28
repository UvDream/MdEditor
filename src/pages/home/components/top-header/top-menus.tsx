import {Dropdown} from '@arco-design/web-react';
import {TopMenusData, TopMenusType} from '../common';
import DropList from "./drop-list";

export default function TopMenus() {
    const menusItemClick = (event: any) => {
        console.log('menusItemClick', event);
    }
    return (
        <>
            {
                TopMenusData.map((item: TopMenusType, index) => {
                    return (
                        <div className={"menus-item"} key={index}>
                            <Dropdown trigger='click' position='bl'
                                      droplist={<DropList
                                          data={item}
                                          onClick={(event) => {
                                              menusItemClick(event)
                                          }}/>}
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

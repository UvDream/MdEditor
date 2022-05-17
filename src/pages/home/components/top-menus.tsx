import {TopMenusData} from './common';
export default function TopMenus() {


    return (
        <>
            {
                TopMenusData.map((item, index) => {
                    return (
                        <div className={"menus-item"} key={index}>
                            <div>
                                {item.name}
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}

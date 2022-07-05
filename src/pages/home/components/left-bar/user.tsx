import {Menu} from "@arco-design/web-react";
import { useNavigate } from "react-router-dom";
import "./index.less";

const MenuItem = Menu.Item;
const SubMenu = Menu.SubMenu;
type Props = {
    onClick: () => void;
}
export default function UserStatus(props: Props) {
    let navigate = useNavigate()
    const menuItemClick = (key: string) => {
        console.log(key)
        key==="2"&& navigate('/login')
        props.onClick();
    }
    return (
        <div className={"user-status"}>
            <Menu style={{width: 150}} mode='pop' onClickMenuItem={menuItemClick}>
                <SubMenu
                    key='1'
                    style={{height: 30, lineHeight: "30px"}}
                    title={
                        <>
                            UvDream
                        </>
                    }
                >
                    <MenuItem key='1_0'>用户设置</MenuItem>
                    <MenuItem key='1_1'>退出</MenuItem>
                </SubMenu>
                <MenuItem key='2'>登录</MenuItem>
            </Menu>
        </div>
    )
}

import {Menu} from "@arco-design/web-react";
import {useNavigate} from "react-router-dom";
import "./index.less";
import {useEffect, useState} from "react";
import {UserInfo} from "@/api/user";

const MenuItem = Menu.Item;
const SubMenu = Menu.SubMenu;
type Props = {
    onClick: () => void;
}
export default function UserStatus(props: Props) {
    let navigate = useNavigate()
    const isLogin = useState(localStorage.getItem("token"))
    const [userInfo] = useState(JSON.parse(localStorage.getItem("user") || "") as UserInfo)

    const menuItemClick = (key: string) => {
        if (key === "2" || key === "1_1") {
            navigate('/login')
            localStorage.removeItem('token')
            localStorage.removeItem('user')
        }
        props.onClick();
    }
    return (
        <div className={"user-status"}>
            <Menu style={{width: 150}} mode='pop' onClickMenuItem={menuItemClick} onClickSubMenu={props.onClick}>
                {
                    isLogin ?
                        <SubMenu
                            key='1'
                            style={{height: 30, lineHeight: "30px"}}
                            title={
                                <>
                                    {userInfo.nick_name}
                                </>
                            }
                        >
                            <MenuItem key='1_0'>用户设置</MenuItem>
                            <MenuItem key='1_1'>退出</MenuItem>
                        </SubMenu>
                        :
                        <MenuItem key='2'>登录</MenuItem>
                }
            </Menu>
        </div>
    )
}

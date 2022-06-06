import {Radio} from "@arco-design/web-react";
import {useState} from "react";
import MenusItem from "./menus-item";

const RadioGroup = Radio.Group;

export default function Themes() {
    const [theme, setTheme] = useState([
        {
            name: "默认主题",
            value: "default"
        },
        {
            name: "姹紫嫣红",
            value: "red",
            auth: "wzj"
        }
    ]);
    const [myTheme, setMyTheme] = useState([]);
    return (
        <>
            <div className={'theme-title'}>
                已购主题
            </div>
            <RadioGroup>
                {
                    theme.map(item => {
                        return (
                            <MenusItem key={item.name} value={item.value} auth={item.auth} radio={true}
                                       title={item.name}/>
                        )
                    })
                }
            </RadioGroup>
            <div className={'theme-title'}>
                我的主题
            </div>
        </>
    )
}

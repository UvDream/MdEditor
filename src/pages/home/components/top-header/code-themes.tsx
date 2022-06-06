import {useState} from "react"
import {Radio} from "@arco-design/web-react";
import MenusItem from "@/pages/home/components/top-header/menus-item";

const RadioGroup = Radio.Group;

export default function CodeThemes() {
    const [codeThemes, setCodeThemes] = useState([
        {
            name: "默认主题",
            value: "default"
        }
    ])
    return (
        <>
            <RadioGroup>
                {
                    codeThemes.map(item => {
                        return (
                            <MenusItem key={item.name} value={item.value} radio={true}
                                       title={item.name}/>
                        )
                    })
                }
            </RadioGroup>
        </>
    )
}

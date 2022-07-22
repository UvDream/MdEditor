import {Radio} from "@arco-design/web-react";
import {useEffect, useState} from "react";
import MenusItem from "./menus-item";
import {OtherApi} from "@/api/other";
import {ResponseType} from "@/api/request";
import {UserInfo} from "@/api/user";
import {useDispatch} from "react-redux";
import {getArticleDetail} from "@/store/article";

const RadioGroup = Radio.Group;
type ThemeType = {
    ID?: number,
    name?: string,
    author?: UserInfo
}
export default function Themes() {
    const [theme, setTheme] = useState<Array<ThemeType>>([
        {
            name: "默认主题",
            ID: 9999
        }
    ]);
    const [myTheme, setMyTheme] = useState<Array<ThemeType>>([]);
    const dispatch = useDispatch();
    useEffect(() => {
        getTheme().then()
    }, [])

    const getTheme = async () => {
        const res = await OtherApi.publicTheme({}) as ResponseType
        if (res.code === 200) {
            const arr: Array<ThemeType> = [{
                name: "默认主题",
                ID: 999
            }]
            arr.push(...res.data)
            setTheme(arr)
        }
        const res2 = await OtherApi.themeList({}) as ResponseType
        if (res2.code === 200) {
            setMyTheme(res2.data)
        }
    }
    const radioChange = (value: number) => {
        // setSelectID(value)
        //@ts-ignore
        dispatch(getArticleDetail({id:value}))
    }

    return (
        <>
            <div className={'theme-title'}>
                公开主题
            </div>
            <RadioGroup onChange={radioChange}>
                {
                    theme.map(item => {
                        return (
                            <MenusItem key={item.ID} value={item.ID} auth={item.author?.nick_name} radio={true}
                                       title={item.name}/>
                        )
                    })
                }
                {/*</RadioGroup>*/}
                <div className={'theme-title'}>
                    我的主题
                </div>
                {/*<RadioGroup>*/}
                {
                    myTheme?.map(item => {
                        return (
                            <MenusItem key={item.ID} value={item.ID} auth={item.author?.nick_name} radio={true}
                                       title={item.name}/>
                        )
                    })
                }
            </RadioGroup>
        </>
    )
}

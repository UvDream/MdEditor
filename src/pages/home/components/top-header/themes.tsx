import {Radio} from "@arco-design/web-react";
import {useEffect, useState} from "react";
import MenusItem from "./menus-item";
import {OtherApi} from "@/api/other";
import {ResponseType} from "@/api/request";
import {useDispatch} from "react-redux";
import {SetTheme, ThemeType, UpdateTheme} from "@/store/theme";
import {defaultStyle} from "@/utils";


const RadioGroup = Radio.Group;

export default function Themes() {
    const [theme, setTheme] = useState<Array<ThemeType>>([
        {
            name: "默认主题",
            ID: 9999
        }
    ]);
    const [themeID, setThemeID] = useState(localStorage.getItem("theme_id"));
    const [myTheme, setMyTheme] = useState<Array<ThemeType>>([]);
    const dispatch = useDispatch();
    useEffect(() => {
        getTheme().then()
        setThemeID(localStorage.getItem("theme_id") ? JSON.parse(localStorage.getItem("theme_id") as string) : "999")
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
        getThemeDetail(value).then()
    }
    //获取主题详情
    const getThemeDetail = async (id: number) => {
        if (id === 999) {
            dispatch(SetTheme(defaultStyle))
            const obj: ThemeType = {
                description: "默认主题",
                name: "默认主题",
                thumbnail: "",
                is_public: true
            }
            dispatch(UpdateTheme(obj))
            dispatch(SetTheme(defaultStyle))
            localStorage.setItem("theme_id", "999")
        } else {
            const res = await OtherApi.themeDetail({id}) as ResponseType
            if (res.code === 200) {
                localStorage.setItem("theme_id", id.toString())
                dispatch(SetTheme(res.data.theme))
            }
        }

    }
    return (
        <>
            <div className={'theme-title'}>
                公开主题{themeID}
            </div>
            <RadioGroup onChange={radioChange} defaultValue={Number(themeID)}>
                {
                    theme.map(item => {
                        return (
                            <MenusItem key={item.ID} value={item.ID} auth={item.author?.nick_name} radio={true}
                                       title={item.name}/>
                        )
                    })
                }
                <div className={'theme-title'}>
                    我的主题
                </div>
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

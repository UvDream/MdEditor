import {Button, Radio} from "@arco-design/web-react";
import {useEffect, useState} from "react";
import MenusItem from "./menus-item";
import {useDispatch} from "react-redux";
import {SetTheme, UpdateTheme} from "@/store/theme";
import {defaultStyle} from "@/utils";
import {getThemeDetail, getThemeList, getThemePublic} from "@/services/api/theme";
import {themeTemplate} from "@/utils/themes/theme-template";

const RadioGroup = Radio.Group;

export default function Themes() {
    //公开主题
    const [theme, setTheme] = useState<Array<API.Theme>>([
        {
            name: "默认主题",
            id: "999",
            theme:"",
        }
    ]);
    //选中主题id
    const [themeID, setThemeID] = useState(localStorage.getItem("theme_id")||"999");
    //我的主题
    const [myTheme, setMyTheme] = useState<Array<API.Theme>>([]);
    const dispatch = useDispatch();
    useEffect(() => {
        getTheme().then()
        setThemeID( localStorage.getItem("theme_id")||"999")
    }, [])

    const getTheme = async () => {
        const res = await getThemePublic({}) as unknown as API.Response
        if (res.code === 200) {
            const arr: Array<API.Theme> = [{
                name: "默认主题",
                id: "999",
                theme:""
            }]
            arr.push(...res.data)
            setTheme(arr)
        }
        const res2 = await getThemeList({}) as unknown as API.Response
        if (res2.code === 200) {
            setMyTheme(res2.data)
        }
    }
    const radioChange = (value: string) => {
        ThemeDetail(value).then()
    }
    //获取主题详情
    const ThemeDetail = async (id: string) => {
        if (id === "999") {
            dispatch(SetTheme(defaultStyle))
            const obj: API.Theme = {
                description: "默认主题",
                name: "默认主题",
                thumbnail: "",
                is_public: true,
                theme:""
            }
            dispatch(UpdateTheme(obj))
            dispatch(SetTheme(defaultStyle))
            localStorage.setItem("theme_id", "999")
        } else {
            //@ts-ignore
            const res = await getThemeDetail({id:id}) as unknown as API.Response
            if (res.success) {
                localStorage.setItem("theme_id", id)
                dispatch(UpdateTheme(res.data))
            }
        }
    }
    const newTheme = () => {
        const obj: API.Theme = {
            description: "",
            name: "",
            thumbnail: "",
            is_public: true,
            theme:themeTemplate
        }
        dispatch(UpdateTheme(obj))
    }
    return (
        <>
            <div className={'theme-title'}>
                公开主题
            </div>
            <RadioGroup onChange={radioChange} defaultValue={themeID}>
                {
                    theme.map(item => {
                        return (
                            <MenusItem key={item.id} value={item.id} auth={item.user?.nick_name} radio={true}
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
                            <MenusItem key={item.id} value={item.id} auth={item.user?.nick_name} radio={true}
                                       title={item.name}/>
                        )
                    })
                }
            </RadioGroup>
            <Button type='text' long onClick={newTheme}>
                新建主题
            </Button>
        </>
    )
}

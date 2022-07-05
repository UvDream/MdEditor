import "./index.less";
import ArticleList from "./article-list";
import HistoryList from "@/pages/home/components/left-bar/history-list";
import {Log, Config, ViewList, Avatar} from "@icon-park/react"
import {useState} from "react";
import {Popover} from "@arco-design/web-react";
import UserStatus from "@/pages/home/components/left-bar/user";
import SetConfig from "@/pages/home/components/left-bar/config";

export default function LeftBar() {
    const [selected, setSelected] = useState(0);
    const [popupVisible, setPopupVisible] = useState(false);
    const [configVisible, setConfigVisible] = useState(false);
    const configOk = () => {
        setConfigVisible(false);
    }
    const configCancel = () => {
        setConfigVisible(false)
    }
    return (
        <div className={"left-bar"}>
            <div className={"left-bar-tool"}>
                <div className={"left-bar-tool-top"}>
                    <div className={"left-bar-tool-block"}>
                        <ViewList
                            theme={selected === 0 ? 'two-tone' : 'outline'}
                            size="24"
                            fill={selected === 0 ? '#333' : ['#333', '#2F88FF']}
                            strokeWidth={3}
                            onClick={() => {
                                setSelected(0);
                            }}
                        />
                    </div>
                    <div className={"left-bar-tool-block"}>
                        <Log
                            theme={selected === 1 ? 'two-tone' : 'outline'}
                            size="24"
                            fill={selected === 1 ? '#333' : ['#333', '#2F88FF']}
                            strokeWidth={3}
                            onClick={() => {
                                setSelected(1);
                            }}
                        />
                    </div>
                </div>
                <div className={"left-bar-tool-bottom"}>
                    {/*用户*/}
                    <div className={"left-bar-tool-block"}>
                        <Popover
                            trigger='click'
                            position='rb'
                            popupVisible={popupVisible}
                            content={
                                <UserStatus onClick={() => {
                                    setPopupVisible(!popupVisible)
                                }
                                }/>
                            }
                        >
                            <Avatar
                                theme="outline"
                                size="24" fill="#333"
                                strokeWidth={3}
                                onClick={() => {
                                    setPopupVisible(!popupVisible);
                                }}
                            />
                        </Popover>
                    </div>
                    {/*设置*/}
                    <div className={"left-bar-tool-block"}>
                        <Config
                            theme="outline"
                            size="24"
                            fill={'#333'}
                            strokeWidth={3}
                            onClick={() => {
                                setConfigVisible(true);
                            }}
                        />
                    </div>
                </div>
            </div>
            <div className={"left-bar-list"}>
                {
                    selected === 0 ? <ArticleList/> : <HistoryList/>
                }
            </div>
            <SetConfig
                visible={configVisible}
                onOk={configOk}
                onCancel={configCancel}
            />
        </div>
    )
}

import {Divider, Empty, Timeline} from "@arco-design/web-react";
import {useSearchParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {ArticleApi} from "@/api/article";
import {ResponseType} from "@/api/request";
import dayjs from "dayjs";

const TimelineItem = Timeline.Item;
export default function HistoryList() {
    const [searchParams] = useSearchParams();
    const [historyList, setHistoryList] = useState({});
    useEffect(() => {
        getHistoryList()
    }, [])
    const getHistoryList = async () => {
        const res: ResponseType = await ArticleApi.history({id: searchParams.get('id')}) as ResponseType
        if (res.code === 200) {
            setHistoryList(res.data.list)
        }
    }
    const renderHistoryList = () => {
        let arr = []
        for (let key in historyList) {
            //@ts-ignore
            arr.push({time: key, title: historyList[key]['title'], id: historyList[key]['id']})
        }
        return arr

    }
    return (
        <div className={"history"}>
            <Divider orientation={"center"}>历史记录</Divider>
            {
                renderHistoryList().length === 0 ?
                    <Empty description={"暂无历史"}/> :
                    <div className={"history-content"}>
                        <Timeline labelPosition="relative">
                            {renderHistoryList().map((item, index) => {
                                return <TimelineItem key={index}
                                                     label={dayjs(item.time).format("YYYY-MM-DD HH:mm:ss")}>{item.title}</TimelineItem>
                            })
                            }
                        </Timeline>
                    </div>

            }

        </div>
    )
}

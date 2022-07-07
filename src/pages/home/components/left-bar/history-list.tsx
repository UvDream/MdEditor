import {Divider} from "@arco-design/web-react";
import {useSearchParams} from "react-router-dom";
import {useEffect} from "react";


export default function HistoryList() {
    const [searchParams] = useSearchParams();
    useEffect(() => {
        console.log(searchParams.get('type'));
    }, [])

    return (
        <div className={"history"}>
            <Divider orientation={"center"}>历史记录</Divider>
            历史记录
        </div>
    )
}

import {Divider, Empty, Popover, Timeline} from "@arco-design/web-react";
import {useSearchParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {ResponseType} from "@/utils/request";
import dayjs from "dayjs";
import {getArticleHistory} from "@/api/article";
import Preview from "@/pages/ediotr/preview";
import {markdownParser} from "@/utils";

const TimelineItem = Timeline.Item;
export default function HistoryList() {
  const [searchParams] = useSearchParams();
  const [historyList, setHistoryList] = useState<any>({});
  useEffect(() => {
    getHistoryList().then();
  }, []);
  const getHistoryList = async () => {
    const res: ResponseType = (await getArticleHistory({
      id: searchParams.get("id") || "",
    })) as unknown as API.Response;
    if (res.code === 200) {
      setHistoryList(res.data.list);
    }
  };
  const renderHistoryList = () => {
    let arr = [];
    for (let key in historyList) {
      //@ts-ignore
      arr.push({
        time: key,
        title: historyList[key]["title"],
        id: historyList[key]["id"],
        md_content: historyList[key]["md_content"],
      });
    }
    return arr;
  };
  return (
      <div className={"history"}>
        <Divider orientation={"center"}>历史记录</Divider>
        {renderHistoryList().length === 0 ? (
            <Empty description={"暂无历史"}/>
        ) : (
            <div className={"history-content"}>
              <Timeline labelPosition="relative">
                {renderHistoryList().map((item, index) => {
                  return (
                      <TimelineItem
                          key={index}
                          label={dayjs(item.time).format("YYYY-MM-DD HH:mm:ss")}
                      >
                        <Popover
                            content={
                              <div style={{padding: 10, minWidth: 200, overflow: "auto", maxHeight: 800}}>
                                <Preview
                                    content={markdownParser.render(item.md_content)}
                                    tool={false}
                                />
                              </div>
                            }
                            position={"right"}
                        >
                    <span style={{cursor: "pointer"}}>
                      {item.title}
                    </span>
                        </Popover>
                      </TimelineItem>
                  );
                })}
              </Timeline>
            </div>
        )}
      </div>
  );
}

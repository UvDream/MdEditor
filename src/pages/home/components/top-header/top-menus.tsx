import { Dropdown, Menu } from "@arco-design/web-react";
import { TopMenusData, TopMenusType } from "../common";
import DropList from "./drop-list";
import { emitter, EventType } from "@/utils";
import { useSearchParams } from "react-router-dom";
import { getArticle__openAPI__export } from "@/api/article";
import { baseUrl } from "@/config";
import download from "downloadjs";

export default function TopMenus() {
  const [searchParams] = useSearchParams();
  //菜单点击事件
  const menusItemClick = async (key: TopMenusType) => {
    let id = searchParams.get("id");
    //打印
    if (key.id === "1-3") {
      window.print();
      return;
    }
    //导出markdown
    if (key.id === "1-2" && id !== "") {
      const res = (await getArticle__openAPI__export({
        //@ts-ignore
        id,
      })) as unknown as API.Response;
      if (res.success) {
        download(baseUrl + res.data);
      }
      return;
    }
    console.log("---------菜单点击----------", key);
    emitter.emit(EventType.KeyEvents, key);
    emitter.all.delete(EventType.KeyEvents);
  };
  return (
    <>
      {TopMenusData.map((item: TopMenusType, index) => {
        return (
          <div className={"menus-item"} key={index}>
            <Dropdown
              trigger="click"
              position="bl"
              droplist={
                <Menu>
                  <DropList
                    data={item}
                    key={item.id}
                    onClick={(key) => {
                      menusItemClick(key);
                    }}
                  />
                </Menu>
              }
            >
              <div>{item.name}</div>
            </Dropdown>
          </div>
        );
      })}
    </>
  );
}

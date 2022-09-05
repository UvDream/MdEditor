import { Outlet, useNavigate } from "react-router-dom";
import { TabBar } from "antd-mobile";
import { Analysis, Calendar, Config, Home } from "@icon-park/react";
import { TabItem } from "../typings";
import { useState } from "react";
export default function IndexPage() {
  const navigate = useNavigate();
  const [activeKey, setActiveKey] = useState("home");
  const tabs: Array<TabItem> = [
    {
      key: "home",
      title: "首页",
      icon: <Home theme="outline" size="20" fill="#333" />,
      path: "/",
    },
    {
      key: "calendar",
      title: "日历",
      icon: <Calendar theme="outline" size="20" fill="#333" />,
      path: "/calendar",
    },
    {
      key: "dashboard",
      title: "统计",
      icon: <Analysis theme="outline" size="20" fill="#333" />,
      path: "/dashboard",
    },
    {
      key: "setting",
      title: "设置",
      icon: <Config theme="outline" size="20" fill="#333" />,
      path: "/setting",
    },
  ];
  return (
    <div className="layout">
      <div className="layout-content">
        <Outlet />
      </div>
      <div className="layout-menus">
        <TabBar
          activeKey={activeKey}
          onChange={(val) => {
            const res: TabItem = tabs.find(
              (item: TabItem) => item.key === val
            ) || {
              key: "home",
              path: "/",
            };
            setActiveKey(res.key);
            navigate(res.path);
          }}
        >
          {tabs.map((item: any) => (
            <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
          ))}
        </TabBar>
      </div>
    </div>
  );
}

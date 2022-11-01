import { useEffect, useState } from "react";
import { Divider, Radio } from "@arco-design/web-react";
import MenusItem from "@/pages/home/components/top-header/menus-item";
import {
  CodeDarkThemeList,
  CodeLightThemeList,
  CodeThemeList,
} from "@/pages/home/components/code-theme";
import { useDispatch } from "react-redux";
import { SelectTheme } from "@/store/code-theme";

const RadioGroup = Radio.Group;

export default function CodeThemes() {
  const dispatch = useDispatch();
  // const [codeThemes] = useState(CodeThemeList)
  const [codeThemeId, setCodeThemeID] = useState(
    localStorage.getItem("code-theme") || "default"
  );
  const codeThemeChange = (val: string) => {
    setCodeThemeID(val);
    CodeThemeList.forEach((element) => {
      if (element.value === val) {
        dispatch(SelectTheme(element));
      }
    });
  };
  return (
    <>
      <RadioGroup defaultValue={codeThemeId} onChange={codeThemeChange}>
        <div className={"theme-title"}>dark主题</div>
        <Divider style={{ margin: 0 }} />
        {CodeDarkThemeList.map((item) => {
          return (
            <MenusItem
              key={item.name}
              value={item.value}
              radio={true}
              title={item.name}
            />
          );
        })}
        <div className={"theme-title"}>light主题</div>
        <Divider style={{ margin: 0 }} />
        {CodeLightThemeList.map((item) => {
          return (
            <MenusItem
              key={item.name}
              value={item.value}
              radio={true}
              title={item.name}
            />
          );
        })}
      </RadioGroup>
    </>
  );
}

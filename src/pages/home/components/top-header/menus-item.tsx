import {Shortcuts} from "@/pages/home/components/shortcuts";
import {Checkbox, Radio} from "@arco-design/web-react";

export default function MenusItem(props: any) {
    return (
        <div className="top-menus-block">
            <div className={"left"}>
                {
                    props.radio || props.checkbox ?
                        <div className={"select"}>
                            {props.radio ? <Radio value={props.value}/> : <></>}
                            {props.checkbox ? <Checkbox/> : <></>}
                        </div>
                        : <></>
                }
                <div className={"title"}>
                    {props.title}
                </div>
            </div>
            <div className={"shortcuts"}>
                {props.shortcuts ? Shortcuts()[props.shortcuts] : ''}
                {props.auth?props.auth:''}
            </div>
        </div>
    );
}

import {Shortcuts} from "@/pages/home/components/shortcuts";
import {Checkbox, Radio} from "@arco-design/web-react";

export default function MenusItem(props: any) {
    return (
        <div className="top-menus-block" onClick={props.onClick}>
            <div className={"left"}>
                {
                    props.radio || props.checkbox ?
                        <div className={"select"}>
                            {props.radio ? <Radio value={props.value} onChange={(val => {
                                props.onChange(val)
                            })}/> : <></>}
                            {props.checkbox ? <Checkbox checked={props.value} onChange={(val => {
                                props.onChange(val)
                            })}/> : <></>}
                        </div>
                        : <></>
                }
                <div className={"title"}>
                    {props.title}
                </div>
            </div>
            <div className={"shortcuts"}>
                {props.shortcuts ? Shortcuts()[props.shortcuts] : ''}
                {props.auth ? props.auth : ''}
            </div>
        </div>
    );
}

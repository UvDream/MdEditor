import {Shortcuts} from "@/pages/home/components/shortcuts";
import {Checkbox, Radio, Tooltip} from "@arco-design/web-react";

export default function MenusItem(props: any) {
    return (
        <div key={props.title} className="top-menus-block" onClick={props.onClick}>
            <div className={"left"}>
                {
                    props.radio || props.checkbox ?
                        <div className={"select"}>
                            {props.radio ? <Radio value={props.value} onChange={(val => {
                                props.onChange&&props.onChange(val)
                            })}/> : <></>}
                            {props.checkbox ? <Checkbox checked={props.value} onChange={(val => {
                                props.onChange&&props.onChange(val)
                            })}/> : <></>}
                        </div>
                        : <></>
                }
                <div className={"title"}>
                    <Tooltip position='rt' trigger='hover' content={props.title}>
                        {props.title}
                    </Tooltip>
                </div>
            </div>
            <div className={"shortcuts"}>
                {props.shortcuts ? Shortcuts()[props.shortcuts] : ''}
                {props.auth ? props.auth : ''}
            </div>
        </div>
    );
}

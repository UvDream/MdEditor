import {Icon} from "@arco-design/web-react"
import {useState} from "react"
import "./index.less"

const IconFont = Icon.addFromIconFontCn({src: '//at.alicdn.com/t/font_3408739_o2okt6dixt.js'})
export default function Preview(props: any) {
    const [DeviceType, setDeviceType] = useState('icon-pc')
    const IconList = [
        {
            id: 1,
            type: "icon-zhihu"
        },
        {
            id: 2,
            type: "icon-wx"
        },
        {
            id: 3,
            type: 'icon-pc'
        },
        {
            id: 4,
            type: 'icon-phone'
        }
    ]
    const IconClick = (id: number) => {
        switch (id) {
            case 1:
                break;
            case 2:
                break;
            case 3:
                setDeviceType('icon-phone')
                break;
            case 4:
                setDeviceType('icon-pc')
                break;
            default:
                break;
        }
    }
    const EditorClass = () => {
        if (DeviceType === 'icon-phone') {
            return 'md-editor md-editor-phone scroll-bar'
        } else {
            return 'md-editor md-editor-pc scroll-bar'
        }
    }
    return (
        <div className={"md-preview"}>
            <div className={"tool"}>
                {
                    IconList.map((item: any) => {
                        if (item.id === 1 || item.id === 2 || item.type === DeviceType) {
                            return (

                                <IconFont
                                    className={"tool-icon"}
                                    key={item.id}
                                    type={item.type}
                                    style={{
                                        fontSize: '22px',
                                    }}
                                    onClick={() => IconClick(item.id)}
                                />

                            )
                        }

                    })

                }
            </div>
            <div className={EditorClass()}>
                <div style={{paddingBottom: "100px"}} dangerouslySetInnerHTML={{
                    __html: props.content,
                }}>
                </div>
            </div>
        </div>
    )
}

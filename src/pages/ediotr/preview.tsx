import {Icon} from "@arco-design/web-react"
import {useState} from "react"

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
            return 'md-editor md-editor-phone'
        } else {
            return 'md-editor md-editor-pc'
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
                                    key={item.id}
                                    type={item.type}
                                    style={{
                                        fontSize: '22px',
                                        marginRight: '10px'
                                    }}
                                    onClick={() => IconClick(item.id)}
                                />
                            )
                        }

                    })

                }
            </div>
            <div className={EditorClass()} dangerouslySetInnerHTML={{
                __html: props.content,
            }}>
            </div>
        </div>
    )
}

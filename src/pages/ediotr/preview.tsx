import {Icon} from "@arco-design/web-react"
import {useRef, useState} from "react"
import {CopyToClipboard, defaultStyle, emitter, EventType} from "@/utils"
import "./index.less"
import juice from "juice"

const IconFont = Icon.addFromIconFontCn({src: '//at.alicdn.com/t/font_3408739_o2okt6dixt.js'})

export default function Preview(props: any) {
    const preview = useRef(null)
    const [DeviceType, setDeviceType] = useState('icon-pc')
    emitter.on(EventType.Scroll, (val: any) => {
        // console.log("滚动高度", val)
        let scrollView = document.getElementById("scroll") as unknown as HTMLElement
        scrollView.scrollTop = val * 0.8
    })
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
    const IconClick = async (id: number) => {
        switch (id) {
            case 1:
                //@ts-ignore
                let res = juice.inlineContent(preview.current.innerHTML, defaultStyle, {
                    inlinePseudoElements: true,
                    preserveImportant: true,
                })
                console.log("1111111")
                console.log(res)
                await CopyToClipboard(res)
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
            <section ref={preview} className={"md-preview-content"} id="scroll" data-tool={"mdEditor"}>
                <section className={EditorClass()}>
                    <span>
                         <div style={{paddingBottom: "100px"}} dangerouslySetInnerHTML={{
                             __html: props.content,
                         }}>
                    </div>
                    </span>
                </section>
            </section>
        </div>
    )
}

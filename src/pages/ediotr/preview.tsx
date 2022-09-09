import {Message, Modal, Tooltip} from "@arco-design/web-react";
import {useEffect, useRef, useState, useLayoutEffect} from "react";
import {CalcWordCount, CopyToClipboard, emitter, EventType, markdownParser} from "@/utils";
import "@/style/editor/index.less";
import juice from "juice";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@/store";
import {QRCodeCanvas} from "qrcode.react";
import {useSearchParams} from "react-router-dom";
import HaloPage from "@/pages/ediotr/components/halo";
import {IconList} from "@/pages/ediotr/icon";
import {SetArticleDetail} from "@/store/article";

type Props = {
    tool: boolean;
    content: string;
};
export default function Preview(props: Props) {
    const preview = useRef(null);
    const dispatch = useDispatch();
    const [searchParams] = useSearchParams();
    const {theme} = useSelector((state: RootState) => state.themeDetail);
    const [DeviceType, setDeviceType] = useState("icon-pc");
    const articleDetail = useSelector((state: RootState) => state.articleDetail);
    const [visible, setVisible] = useState(false);
    const [haloVisible, setHaloVisible] = useState(false);
    emitter.on(EventType.Scroll, (val: any) => {
        // console.log("滚动高度", val)
        let scrollView = document.getElementById(
            "scroll"
        ) as unknown as HTMLElement;
        // console.log("滚动")
        scrollView.scrollTop = val * 0.8;
    });
    useLayoutEffect(() => {
        //@ts-ignore
        let res = juice.inlineContent(preview.current.innerHTML, theme, {
            inlinePseudoElements: true,
            preserveImportant: true,
        });
        dispatch(
            SetArticleDetail({html_content: res})
        );
    }, [props.content])
    const IconClick = async (id: number) => {
        switch (id) {
            case 1:
                Message.info("暂未支持!敬请期待!");
                break;
            case 2:
                //@ts-ignore
                let res = juice.inlineContent(preview.current.innerHTML, theme, {
                    inlinePseudoElements: true,
                    preserveImportant: true,
                });
                await CopyToClipboard(res);
                Message.success("复制成功!去微信公众号编辑器粘贴吧!");
                break;
            case 3:
                setDeviceType("icon-phone");
                break;
            case 4:
                setDeviceType("icon-pc");
                break;
            case 5:
                if (articleDetail.title === "") {
                    Message.error("缺乏标题!");
                    return;
                }
                if (articleDetail.md_content === "") {
                    Message.error("缺乏文章内容!");
                    return;
                }
                //@ts-ignore
                window.syncPost({
                    title: articleDetail.title,
                    desc: articleDetail.summary,
                    content: markdownParser.render(articleDetail.md_content || ""),
                    thumb: articleDetail.thumbnail,
                });
                break;
            case 6:
                if (searchParams.get("id") && searchParams.get("id") != "add") {
                    setVisible(true);
                } else {
                    Message.info("这不是一篇发布的文章,暂时不可以预览!");
                }
                break;
            case 7:
                setHaloVisible(true);
                break;
            default:
                break;
        }
    };
    const EditorClass = () => {
        if (DeviceType === "icon-phone") {
            return "md-editor md-editor-pc scroll-bar";
        } else {
            return "md-editor md-editor-phone scroll-bar";
        }
    };
    return (
        <div className={"md-preview"}>
            {props.tool && (
                <div className={"tool"}>
                    {IconList.map((item: any) => {
                        if (
                            item.id === 1 ||
                            item.id === 2 ||
                            //  @ts-ignore
                            (item.id === 5 && !window.__TAURI__) ||
                            item.id === 6 ||
                            item.id === 7 ||
                            item.type === DeviceType
                        ) {
                            return (
                                <span
                                    className="tool-icon"
                                    onClick={() => IconClick(item.id)}
                                    key={item.id}
                                >
                  <Tooltip position="lt" trigger="hover" content={item.title}>
                    {item.icon}
                  </Tooltip>
                </span>
                            );
                        }
                    })}
                </div>
            )}
            <section
                ref={preview}
                className={"md-preview-content"}
                id="scroll"
                data-tool={"mdEditor"}
            >
                <section className={EditorClass()}>
          <span>
            <div
                style={{paddingBottom: "100px"}}
                dangerouslySetInnerHTML={{
                    __html: props.content,
                }}
            />
          </span>
                </section>
            </section>
            <Modal
                title="手机扫码预览"
                visible={visible}
                footer={null}
                onOk={() => setVisible(false)}
                onCancel={() => setVisible(false)}
                autoFocus={false}
                focusLock={true}
            >
                <div style={{textAlign: "center"}}>
                    <QRCodeCanvas
                        value={
                            "https://www.uvdream.cn/editor/#/preview?id=" +
                            searchParams.get("id")
                        }
                    />
                </div>
            </Modal>
            {/*  halo1.ts 发布*/}
            <HaloPage
                visible={haloVisible}
                onOk={() => {
                    setHaloVisible(false);
                }}
                onCancel={() => {
                    setHaloVisible(false);
                }}
            />
        </div>
    );
}

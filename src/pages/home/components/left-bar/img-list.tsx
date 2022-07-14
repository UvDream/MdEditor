import {Button, Grid, Image, Message, Modal, Pagination, Typography} from "@arco-design/web-react";
import {useEffect, useState} from "react";
import {fileType, Props} from "./index.d";
import {OtherApi} from "@/api/other";
import {ResponseType} from "@/api/request";
import Config from "@/api/config";
import {DeleteOne, PreviewOpen} from "@icon-park/react";

const Row = Grid.Row;
const Col = Grid.Col;
export default function ImgList(props: Props) {
    const [imgList, setImgList] = useState<Array<fileType>>([]);
    const [options, setOptions] = useState({
        page: 1,
        page_size: 16
    })
    const [total, setTotal] = useState(0)
    const [previewVisible, setPreviewVisible] = useState(false)
    const [currentPreview, setCurrentPreview] = useState(1)
    useEffect(() => {
        getImgList().then()
    }, [])

    const getImgList = async () => {
        const res: ResponseType = await OtherApi.fileList(options) as ResponseType
        if (res.code === 200) {
            setImgList(res.data.list)
            setTotal(res.data.total)
        }
    }
    const deleteImg = async (id: number) => {
        const res = await OtherApi.deleteFile({id}) as ResponseType
        if (res.code === 200) {
            Message.success("删除成功")
            getImgList().then()
        }
    }
    return (
        <Modal
            title="图片资源"
            style={{width: 800}}
            visible={props.visible}
            onCancel={() => {
                props.onOk && props.onOk()
            }}
            footer={
                <Button onClick={() => {
                    props.onOk && props.onOk()
                }}>关闭</Button>
            }
        >
            <Image.PreviewGroup infinite current={currentPreview}>
                <Row gutter={24}>
                    {
                        imgList.map((item, index) => {
                            return (
                                <Col
                                    span={5}
                                    offset={1} style={{marginBottom: "10px"}}
                                >
                                    <Image
                                        width={"100%"}
                                        height={100}
                                        previewProps={{
                                            visible: previewVisible,
                                            onVisibleChange: (e) => {
                                                setPreviewVisible(false);
                                            },
                                        }}
                                        onClick={() => {
                                            setCurrentPreview(index)
                                        }}
                                        actions={[
                                            <PreviewOpen
                                                key="1"
                                                theme="outline"
                                                size="15"
                                                fill="#333" strokeWidth={3}
                                                onClick={() => {
                                                    setPreviewVisible(true);
                                                    setCurrentPreview(index);
                                                }}
                                            />,
                                            <DeleteOne
                                                key="2"
                                                theme="outline"
                                                size="15"
                                                fill="#333"
                                                strokeWidth={3}
                                                onClick={() => {
                                                    deleteImg(item.ID).then()
                                                }}
                                            />
                                        ]}
                                        src={item.position == "local" ? Config.apiURL + item.url : item.url}
                                    />
                                </Col>
                            )
                        })
                    }
                </Row>
            </Image.PreviewGroup>
            <div style={{textAlign: "center"}}>
                <Pagination
                    style={{margin: "0 auto", display: "inline-block"}}
                    total={total}
                    onChange={(page, pageSize) => {
                        options.page = page
                        options.page_size = pageSize
                        setOptions(options)
                        getImgList().then()
                    }}
                />
            </div>
        </Modal>
    )
}

import {Button, Grid, Image, Modal, Pagination} from "@arco-design/web-react";
import {useEffect, useState} from "react";
import {fileType, Props} from "./index.d";
import {OtherApi} from "@/api/other";
import {ResponseType} from "@/api/request";
import Config from "@/api/config";

const Row = Grid.Row;
const Col = Grid.Col;
export default function ImgList(props: Props) {
    const [imgList, setImgList] = useState<Array<fileType>>([]);
    const [options, setOptions] = useState({
        page: 1,
        page_size: 16
    })
    const [total, setTotal] = useState(0)
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
    return (
        <Modal
            title="图片资源"
            style={{width: 800}}
            visible={props.visible}
            onCancel={() => {
                props.onOk && props.onOk(false)
            }}
            footer={
                <Button onClick={() => {
                    props.onOk && props.onOk()
                }}>关闭</Button>
            }
        >
            <Image.PreviewGroup>
                <Row gutter={24}>
                    {
                        imgList.map((item, index) => {
                            return (
                                <Col span={5} offset={1} style={{marginBottom: "10px"}}>
                                    <Image width={"100%"} height={100}
                                           src={item.position == "local" ? Config.apiURL + item.url : item.url}/>
                                </Col>
                            )
                        })
                    }
                </Row>
            </Image.PreviewGroup>
            <div style={{textAlign: "center"}}>
                <Pagination style={{margin: "0 auto", display: "inline-block"}} total={total}
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

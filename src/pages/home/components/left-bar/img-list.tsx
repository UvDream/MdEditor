import {
    Button,
    Card,
    Empty,
    Grid,
    Image,
    Message,
    Modal,
    Pagination,
    Tooltip,
    Typography,
    Upload,
} from "@arco-design/web-react";
import {useEffect, useState} from "react";
import {Props} from "./index.d";
import {ResponseType} from "@/utils/request";
import Config from "@/config";
import {Copy, DeleteOne, PreviewOpen} from "@icon-park/react";
import {CopyToClipboard} from "@/utils";
import {
    deleteFile__openAPI__deleteId,
    getFileList,
} from "@/services/api/file";
import config from "@/config";
import {UploadItem} from "@arco-design/web-react/es/Upload";

const Row = Grid.Row;
const Col = Grid.Col;
const {Meta} = Card;
export default function ImgList(props: Props) {
    const [imgList, setImgList] = useState<Array<API.File>>([]);
    const [options, setOptions] = useState({
        page: 1,
        page_size: 8,
    });
    const [total, setTotal] = useState(0);
    const [previewVisible, setPreviewVisible] = useState(false);
    const [currentPreview, setCurrentPreview] = useState(1);
    const [srcList, setSrcList] = useState<Array<string>>([])
    useEffect(() => {
        getImgList().then();
    }, []);

    const getImgList = async () => {
        setSrcList([])
        const res: ResponseType = (await getFileList(
            options
        )) as unknown as API.Response;
        if (res.code === 200) {
            setImgList(res.data.list);
            setTotal(res.data.total);
            res.data.list.forEach((element: any) => {
                const url = element.position == "local" ? Config.baseURL + element.url : element.url
                srcList.push(url)
            })
            setSrcList(srcList)
        }
    };
    const deleteImg = async (id: string) => {
        //@ts-ignore
        const res = (await deleteFile__openAPI__deleteId({id})) as unknown as API.Response;
        if (res.code === 200) {
            Message.success("删除成功");
            getImgList().then();
        }
    };

    const uploadSuccess = (fileList: UploadItem[], file: any) => {
        console.log(file, "shangchuan")
        if (file.response && file.response.success) {
            console.log("成功")
            if (file.response.data.position === "local") {
                CopyToClipboard(
                    "![" +
                    file.response.data.name +
                    "](" +
                    config.baseURL +
                    file.response.data.url +
                    ")"
                ).then()
                Message.success("上传成功,已复制为Markdown链接");
                getImgList().then();
            }
        }
    };
    return (
        <Modal
            title="图片资源"
            style={{width: 1000}}
            visible={props.visible}
            onCancel={() => {
                props.onOk && props.onOk();
            }}
            footer={
                <Button
                    onClick={() => {
                        props.onOk && props.onOk();
                    }}
                >
                    关闭
                </Button>
            }
        >
            <div style={{marginBottom: 10}}>
                <Upload
                    multiple
                    headers={{"x-token": localStorage.getItem("token")}}
                    accept="image/*"
                    showUploadList={false}
                    action={config.baseURL + "/file/upload"}
                    onChange={uploadSuccess}
                />
            </div>
            <Image.PreviewGroup infinite>
                {imgList.length === 0 ? (
                    <Empty/>
                ) : (
                    <Row gutter={[6, 6]}>
                        {imgList.map((item, index) => {
                            return (
                                <Col
                                    key={index}
                                    span={6}
                                >
                                    <Card
                                        style={{width: "100%"}}
                                        className="card-with-icon-hover"
                                        cover={
                                            <div style={{height: 180, overflow: "hidden"}}>
                                                <Image
                                                    width={"100%"}
                                                    src={item.position == "local" ? Config.baseURL + item.url : item.url}
                                                    alt='lamp2'
                                                    preview={false}
                                                />
                                            </div>
                                        }
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
                                                    item.id && deleteImg(item.id).then()
                                                }}
                                            />,
                                            <Copy
                                                theme="outline"
                                                size="15"
                                                fill="#333"
                                                strokeWidth={3}
                                                onClick={() => {
                                                    const text = `![](${Config.baseURL}${item.url})`
                                                    CopyToClipboard(text).then(() => {
                                                        Message.success("复制成功,去编辑器粘贴吧!")
                                                    })
                                                }}
                                            />
                                        ]}
                                    >
                                        <Meta
                                            title={
                                                <Tooltip content={item.name}>
                                                    <Typography.Title heading={6} ellipsis={{wrapper: 'span'}}>
                                                        文件名:{item.name}
                                                    </Typography.Title>
                                                </Tooltip>
                                            }
                                            description={<Tooltip content={item.create_time}>
                                                <Typography.Text ellipsis={{wrapper: 'span'}}>
                                                    上传时间:{item.create_time}
                                                </Typography.Text>
                                            </Tooltip>}
                                        />
                                    </Card>
                                </Col>
                            );
                        })}
                    </Row>
                )}
            </Image.PreviewGroup>
            {/*图片预览组件*/}
            <Image.PreviewGroup current={currentPreview} srcList={srcList} visible={previewVisible}
                                onVisibleChange={setPreviewVisible}/>
            <div style={{textAlign: "center", marginTop: 20}}>
                {total != 0 && (
                    <Pagination
                        style={{margin: "0 auto", display: "inline-block"}}
                        total={total}
                        onChange={(page, pageSize) => {
                            options.page = page;
                            options.page_size = pageSize;
                            setOptions(options);
                            getImgList().then();
                        }}
                    />
                )}
            </div>
        </Modal>
    );
}

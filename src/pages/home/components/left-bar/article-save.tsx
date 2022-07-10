import {Form, Input, Message, Modal, Select, Switch, TreeSelect, Upload} from "@arco-design/web-react";
import {ArticleApi, ArticleDetailType} from "@/api/article";
import {ResponseType} from "@/api/request";
import {useEffect, useRef, useState} from "react";

type Props = {
    visible: boolean;
    onOk: (visible: boolean) => void;
    onCancel: (visible: boolean) => void;
}
type TagItemType = {
    ID: number;
    name: string;
    slug: string;
    thumbnail: string;
    color: string;
}
type CategoryItemType = {
    ID: number;
    name: string;
    slug: string;
    description: string;
    thumbnail: string;
    parent_id: number;
    password: string;
    children: CategoryItemType[];
}
const FormItem = Form.Item;
const Option = Select.Option;

export default function ArticleSave(props: Props) {
    const [form] = Form.useForm<ArticleDetailType>();
    const formRef = useRef();
    const [tagList, setTagList] = useState<Array<TagItemType>>([]);
    const [categoryList, setCategoryList] = useState<Array<CategoryItemType>>([]);
    useEffect(() => {
        getTagList()
        getCategoryList()
    }, [])
    const getTagList = async () => {
        const obj = {}
        const res: ResponseType = await ArticleApi.tagList(obj) as ResponseType
        if (res.code === 200) {
            setTagList(res.data)
        }
    }
    const getCategoryList = async () => {
        const obj = {}
        const res: ResponseType = await ArticleApi.categoryList(obj) as ResponseType
        if (res.code === 200) {
            setCategoryList(res.data)
        }
    }
    const handleOk = async () => {
        if (formRef.current) {
            try {
                //@ts-ignore
                await formRef.current.validate();
                Message.info('校验通过，提交成功！');
                props.onOk(false)
            } catch (_) {
                //@ts-ignore
                console.log(formRef.current.getFieldsError());
                Message.error('校验失败，请检查字段！');
            }
        }
    }
    const handleCancel = () => {
        props.onCancel(false)
    }
    return (
        <Modal
            title='文章配置'
            visible={props.visible}
            onOk={() => {
                handleOk()
            }}
            onCancel={() => {
                handleCancel()
            }}
            autoFocus={false}
            focusLock={true}
        >
            {/*@ts-ignore*/}
            <Form ref={formRef} form={form}>
                <FormItem label='文章标题' field={'title'} rules={[{required: true, message: "请输入标题"}]}>
                    <Input/>
                </FormItem>
                <FormItem label='文章摘要' field={'summary'} rules={[{required: true, message: "请输入文章摘要"}]}>
                    <Input/>
                </FormItem>
                <FormItem label='标签' field={'tags_id'}>
                    <Select mode='multiple'>
                        {tagList.map((item) => (
                            <Option key={item.ID} value={item.name}>
                                {item.name}
                            </Option>
                        ))}
                    </Select>
                </FormItem>
                <FormItem label="分类" field={'categories_id'}>
                    <TreeSelect
                        treeData={categoryList}
                        fieldNames={{
                            key: 'ID',
                            title: 'name',
                            children: 'children',
                        }}
                    />
                </FormItem>
                <FormItem label='别名' field={'slug'}>
                    <Input/>
                </FormItem>
                <Form.Item
                    label='封面'
                    field={'thumbnail'}
                    triggerPropName='fileList'
                    initialValue={[]}
                >
                    <Upload
                        listType='picture-card'
                        multiple
                        name='files'
                        action='/'
                        onPreview={(file) => {
                            Modal.info({
                                title: 'Preview',
                                content: (
                                    <img
                                        // @ts-ignore
                                        src={file.url || URL.createObjectURL(file.originFile)}
                                        style={{
                                            maxWidth: '100%',
                                        }}
                                    />
                                ),
                            });
                        }}
                    />
                </Form.Item>
                <FormItem label='禁止评论' field={'disable_comments'}>
                    <Switch/>
                </FormItem>
                <FormItem label='访问密码' field={'password'}>
                    <Input.Password/>
                </FormItem>
                <FormItem label='是否置顶' field={'is_top'}>
                    <Switch/>
                </FormItem>
            </Form>
        </Modal>
    )
}

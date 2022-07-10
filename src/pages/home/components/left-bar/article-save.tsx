import {Form, Input, Modal, Select, Switch, TreeSelect, Upload} from "@arco-design/web-react";
import {ArticleApi, ArticleDetailType} from "@/api/article";
import {ResponseType} from "@/api/request";
import {useEffect, useState} from "react";

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
            console.log(tagList)
        }
    }
    const getCategoryList = async () => {
        const obj = {}
        const res: ResponseType = await ArticleApi.categoryList(obj) as ResponseType
        if (res.code === 200) {
            console.log(res.data)
            setCategoryList(res.data)
        }
    }
    return (
        <Modal
            title='文章配置'
            visible={props.visible}
            onOk={() => props.onOk(false)}
            onCancel={() => props.onCancel(false)}
            autoFocus={false}
            focusLock={true}
        >
            <Form form={form}>
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
                    initialValue={[
                        {
                            uid: '-1',
                            url: '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/e278888093bef8910e829486fb45dd69.png~tplv-uwbnlip3yd-webp.webp',
                            name: '20200717',
                        },
                    ]}
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
                {/*<FormItem label='封面' field={'thumbnail'} >*/}
                {/*    <Input/>*/}
                {/*</FormItem>*/}
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

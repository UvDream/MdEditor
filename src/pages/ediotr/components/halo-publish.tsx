import {Button, Form, Input, Select, Space, TreeSelect} from "@arco-design/web-react";
import {useEffect, useState} from "react";
import {GetCategories, GetTags, PostArticle, saveArticle, treeItem} from "@/utils";
import {useDispatch, useSelector, useStore} from "react-redux";
import {RootState} from "@/store";
import {pinyin} from "pinyin-pro"
import {SetArticleDetail} from "@/store/article";

const Option = Select.Option;
type Props = {
    onOk: () => void
    onCancel: () => void
}
export default function HaloPublish(props: Props) {
    const [form] = Form.useForm();
    const dispatch = useDispatch();
    const [categories, setCategories] = useState<Array<treeItem>>([]);
    const [tags, setTags] = useState<Array<any>>([])
    const {title, html_content, md_content} = useSelector((state: RootState) => state.articleDetail);
    const article = useSelector((state: RootState) => state.articleDetail);

    useEffect(() => {
        GetTags().then(res => {
            setTags(res)
        })
        GetCategories().then((res: treeItem[] | undefined) => {
            res && setCategories(res)
        })
    }, [])
    useEffect(() => {
        form.setFieldsValue({
            title: title,
            slug: pinyin(title, {toneType: "none", type: "array"}).join("-")
        })
    }, [title, html_content, md_content])
    return (
        <Form form={form} onSubmit={(val) => {
            console.log(val)
            val.content = html_content
            val.originalContent = html_content
            PostArticle(val).then(async (res) => {
                dispatch(SetArticleDetail({halo_id: res}))
                const result = await saveArticle(article)
                result && props.onOk()
            })
        }}>
            <Form.Item label="文章标题" field="title" rules={[{required: true, message: "请输入文章标题"}]}>
                <Input onChange={(val) => {
                    if (form.getFieldValue("slug") === "" || !form.getFieldValue("slug")) {
                        let data = pinyin(val, {toneType: "none", type: "array"}) as Array<string>
                        form.setFieldsValue({
                            slug: data.join("-")
                        })
                    }
                }}/>
            </Form.Item>
            <Form.Item label="文章别名" field="slug">
                <Input/>
            </Form.Item>
            <Form.Item label="分类" field="categoryIds">
                <TreeSelect
                    showSearch
                    allowClear
                    treeCheckable
                    treeData={categories}
                />
            </Form.Item>
            <Form.Item label="标签" field="tagIds">
                <Select mode='multiple'>
                    {tags?.length > 0 && tags.map((item) => (
                        <Option key={item.id} value={item.id}>
                            {item.name}
                        </Option>
                    ))}
                </Select>
            </Form.Item>
            <Form.Item label="摘要" field="summary">
                <Input.TextArea/>
            </Form.Item>
            <Form.Item label="状态" field="status" initialValue={"DRAFT"}>
                <Select>
                    <Option key={"DRAFT"} value={"DRAFT"}>草稿</Option>
                    <Option key={"PUBLISHED"} value={"PUBLISHED"}>发布</Option>
                </Select>
            </Form.Item>
            <Form.Item wrapperCol={{offset: 9}}>
                <Space>
                    <Button htmlType='submit' type='primary'>同步</Button>
                    <Button onClick={props.onCancel}>取消</Button>
                </Space>
            </Form.Item>
        </Form>
    )
}
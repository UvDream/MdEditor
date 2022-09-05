import {
  Button,
  Form,
  Input,
  Message,
  Modal,
  Select,
  Space,
  Switch,
  TreeSelect,
} from "@arco-design/web-react";
import { useEffect, useRef, useState } from "react";
import UploadFile from "@/components/upload";
import {
  ArticleSaveProps,
  CategoryItemType,
  fileType,
  TagItemType,
} from "./index.d";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { getTagList } from "@/api/tag";
import { getCategoryList } from "@/api/category";

const FormItem = Form.Item;
const Option = Select.Option;

export default function ArticleSave(props: ArticleSaveProps) {
  const [form] = Form.useForm<API.Article>();
  const formRef = useRef();
  const articleDetail = useSelector((store: RootState) => store.articleDetail);
  useEffect(() => {
    form.setFieldsValue(articleDetail);
  }, [articleDetail]);
  const [tagList, setTagList] = useState<Array<TagItemType>>([]);
  const [categoryList, setCategoryList] = useState<Array<CategoryItemType>>([]);
  const [file, setFile] = useState<fileType>();
  const cs = `arco-upload-list-item${
    file && file.status === "error" ? " is-error" : ""
  }`;
  useEffect(() => {
    TagList().then();
    CategoryList().then();
  }, []);

  const TagList = async () => {
    const obj = {};
    const res = (await getTagList(obj)) as unknown as API.Response;
    if (res.code === 200) {
      setTagList(res.data);
    }
  };
  const CategoryList = async () => {
    const obj = {};
    const res = (await getCategoryList(obj)) as unknown as API.Response;
    if (res.code === 200) {
      setCategoryList(res.data);
    }
  };
  const handleOk = async (status: boolean) => {
    if (formRef.current) {
      try {
        //@ts-ignore
        await formRef.current.validate();
        props.onOk(status, form.getFieldsValue());
      } catch (_) {
        //@ts-ignore
        console.log(formRef.current.getFieldsError());
        Message.error("校验失败，请检查字段！");
      }
    }
  };
  const handleCancel = () => {
    props.onCancel && props.onCancel();
    //@ts-ignore
    formRef.current.resetFields();
  };
  const footer = () => {
    return (
      <Space>
        <Button
          onClick={() => {
            handleCancel();
          }}
        >
          取消
        </Button>
        <Button
          type="outline"
          onClick={() => {
            handleOk(false).then();
          }}
        >
          保存草稿
        </Button>
        <Button
          type="primary"
          onClick={() => {
            handleOk(true).then();
          }}
        >
          保存
        </Button>
      </Space>
    );
  };
  return (
    <Modal
      footer={footer}
      title="文章配置"
      visible={props.visible}
      autoFocus={false}
      onCancel={() => {
        handleCancel();
      }}
      focusLock={true}
    >
      {/*@ts-ignore*/}
      <Form ref={formRef} form={form} initialValues={articleDetail}>
        <FormItem
          label="文章标题"
          field={"title"}
          rules={[{ required: true, message: "请输入标题" }]}
        >
          <Input />
        </FormItem>
        <FormItem label="文章摘要" field={"summary"}>
          <Input />
        </FormItem>
        <FormItem label="标签" field={"tags_id"}>
          <Select mode="multiple">
            {tagList.map((item) => (
              <Option key={item.id} value={item.name}>
                {item.name}
              </Option>
            ))}
          </Select>
        </FormItem>
        <FormItem label="分类" field={"categories_id"}>
          <TreeSelect
            treeData={categoryList}
            fieldNames={{
              key: "id",
              title: "name",
              children: "children",
            }}
          />
        </FormItem>
        <FormItem label="别名" field={"slug"}>
          <Input />
        </FormItem>
        <Form.Item label="封面" field={"thumbnail"}>
          <UploadFile />
        </Form.Item>
        <FormItem label="禁止评论" field={"disable_comments"}>
          <Switch />
        </FormItem>
        <FormItem label="访问密码" field={"password"}>
          <Input.Password />
        </FormItem>
        <FormItem label="是否置顶" field={"is_top"}>
          <Switch />
        </FormItem>
      </Form>
    </Modal>
  );
}

import Editor from "@/pages/ediotr/editor";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { defaultStyle, setEditorStyle } from "@/utils";
import {
  Button,
  Form,
  Input,
  Modal,
  Switch,
  Message,
} from "@arco-design/web-react";
import "@/style/editor/index.less";
import { useEffect, useState } from "react";
import { postThemeCreate, putThemeUpdate ,getThemeDetail} from "@/api/theme";
import { SetTheme, UpdateTheme } from "@/store/theme";

export default function ThemeEditor() {
  const [visible, setVisible] = useState(false);
  const { id, name, description, thumbnail, theme } = useSelector(
    (state: RootState) => state.themeDetail
  );
  const [form] = Form.useForm();
  const dispatch = useDispatch();

  useEffect(() => {
    form.setFieldsValue({
      name,
      description,
      thumbnail,
      theme,
    });
  }, [theme]);
  useEffect(() => {
    ThemeDetail(localStorage.getItem("theme_id")||"999").then();
  }, []);

  //获取主题详情
  const ThemeDetail = async (id: string) => {
    if (id === "999") {
      dispatch(SetTheme(defaultStyle));
      const obj: API.Theme = {
        theme: "",
        description: "默认主题",
        name: "默认主题",
        thumbnail: "",
        is_public: true,
      };
      dispatch(UpdateTheme(obj));
      dispatch(SetTheme(defaultStyle));
    } else {
      //@ts-ignore
      const res = (await getThemeDetail({ id })) as unknown as API.Response;
      if (res.success) {
        dispatch(UpdateTheme(res.data));
      }
    }
  };
  const publishTheme = async () => {
    try {
      await form.validate();
      setVisible(false);
      const themeDetail: API.Theme = {
        theme: theme ? theme : "",
        ...form.getFieldsValue(),
      };
      if (!id || id === "") {
        const res = (await postThemeCreate(
          themeDetail
        )) as unknown as API.Response;
        if (res.success) {
          Message.success("发布主题成功!");
          dispatch(UpdateTheme(res.data));
          setVisible(false);
          localStorage.setItem("theme_id", res.data.id);
        }
      } else {
        themeDetail.id = id;
        const res = (await putThemeUpdate(
          themeDetail
        )) as unknown as API.Response;
        if (res.success) {
          Message.success("修改主题成功!");
          dispatch(UpdateTheme(res.data));
          setVisible(false);
          localStorage.setItem("theme_id", res.data.id);
        }
      }
    } catch (e) {}
  };
  return (
    <>
      <Button
        className={"style-editor-button"}
        onClick={() => {
          setVisible(true);
        }}
      >
        发布主题
      </Button>
      <Editor
        value={theme}
        language={"css"}
        onChange={(val: string) => {
          setEditorStyle(val);
          dispatch(SetTheme(val));
        }}
      />
      <Modal
        title={<span>发布主题</span>}
        visible={visible}
        onOk={publishTheme}
        onCancel={() => {
          form.resetFields();
          setVisible(false);
        }}
      >
        <Form form={form}>
          <Form.Item
            label="主题名"
            field="name"
            rules={[{ required: true, message: "请输入主题名" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="描述"
            field="description"
            rules={[{ required: true, message: "请输入描述" }]}
          >
            <Input.TextArea />
          </Form.Item>
          <Form.Item label="缩略图" field="thumbnail">
            <Input />
          </Form.Item>
          <Form.Item
            label="是否公开"
            field="is_public"
            triggerPropName="checked"
          >
            <Switch checked={true} />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}

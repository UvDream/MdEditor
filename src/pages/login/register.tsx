import "./index.less";
import { Button, Form, Input, Message } from "@arco-design/web-react";
import { FieldError } from "@arco-design/web-react/es/Form/interface";
import { ResponseType } from "@/utils/request";
import { postPublicBaseRegister } from "@/api/user";

const FormItem = Form.Item;
type Props = {
  onSwitch: () => void;
};
export default function Register(props: Props) {
  const [form] = Form.useForm();
  const formItemLayout = {
    labelCol: {
      span: 7,
    },
    wrapperCol: {
      span: 17,
    },
  };
  const onSubmit = async (value: FormData) => {
    console.log("submit", value);
    //@ts-ignore
    const res = (await postPublicBaseRegister(
      value
    )) as unknown as ResponseType;
    if (res.code === 200) {
      Message.success("注册成功!");
      props.onSwitch();
    } else {
      Message.error(res.msg);
    }
  };
  const onSubmitFailed = (error: { [key: string]: FieldError }) => {
    console.log("submit failed", error);
  };
  return (
    <div className="register">
      <div className={"title"}>注册</div>
      <Form
        {...formItemLayout}
        form={form}
        onSubmit={onSubmit}
        onSubmitFailed={onSubmitFailed}
      >
        <FormItem
          label="用户名"
          field="user_name"
          rules={[
            {
              required: true,
              message: "用户名必填",
            },
            {
              validator: (value, callback) => {
                if (/[\u4e00-\u9fa5]/g.test(value)) {
                  callback("用户名不能包含中文");
                }
              },
            },
          ]}
        >
          <Input style={{ width: 270 }} placeholder="输入用户名" />
        </FormItem>
        <FormItem
          label="昵称"
          field="nick_name"
          rules={[{ required: true, message: "昵称必填" }]}
        >
          <Input style={{ width: 270 }} placeholder="输入昵称" />
        </FormItem>
        <FormItem
          label="密码"
          field="password"
          rules={[{ required: true, message: "密码必填" }]}
        >
          <Input.Password
            style={{ width: 270 }}
            type="password"
            placeholder="输入密码"
          />
        </FormItem>
        <FormItem
          label="再次输入密码"
          field="password_again"
          rules={[
            { required: true, message: "密码必填" },
            {
              validator(value, cb) {
                if (value !== form.getFieldValue("password")) {
                  return cb("两次密码填写不一致");
                }
                return cb();
              },
            },
          ]}
        >
          <Input.Password
            style={{ width: 270 }}
            type="password"
            placeholder="再次输入密码"
          />
        </FormItem>
        <FormItem label="手机号" field="phone">
          <Input style={{ width: 270 }} placeholder="输入手机号" />
        </FormItem>
        <FormItem label="邮箱" field="email">
          <Input style={{ width: 270 }} placeholder="输入邮箱" />
        </FormItem>
        {/*<Form.Item*/}
        {/*    label='头像'*/}
        {/*    field='avatar'*/}
        {/*    triggerPropName='fileList'*/}
        {/*>*/}
        {/*    <Upload*/}
        {/*        listType='picture-card'*/}
        {/*        multiple*/}
        {/*        name='files'*/}
        {/*        action='/'*/}
        {/*        onPreview={(file) => {*/}
        {/*            Modal.info({*/}
        {/*                title: '预览',*/}
        {/*                content: (*/}
        {/*                    <img*/}
        {/*                        //@ts-ignore*/}
        {/*                        src={file.url || URL.createObjectURL(file.originFile)}*/}
        {/*                        style={{*/}
        {/*                            maxWidth: '100%',*/}
        {/*                        }}*/}
        {/*                    />*/}
        {/*                ),*/}
        {/*            });*/}
        {/*        }}*/}
        {/*    />*/}
        {/*</Form.Item>*/}
        <FormItem wrapperCol={{ offset: 9 }}>
          <Button
            type="primary"
            htmlType="submit"
            style={{ marginRight: 24, width: 150, marginTop: 25 }}
          >
            注册
          </Button>
        </FormItem>
        <div style={{ textAlign: "center", width: "100%" }}>
          <Button
            type="text"
            style={{ width: 150, marginLeft: 15 }}
            onClick={props.onSwitch}
          >
            登录
          </Button>
        </div>
      </Form>
    </div>
  );
}

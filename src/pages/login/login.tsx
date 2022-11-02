import {Button, Form, Input, Message, Tooltip} from "@arco-design/web-react";
import "./index.less";
import {FieldError} from "@arco-design/web-react/es/Form/interface";
import {useNavigate} from "react-router-dom";
import {postPublicBaseLogin} from "@/api/user";

type Props = {
    onSwitch: (num:Number) => void;
};
const FormItem = Form.Item;
export default function Login(props: Props) {
    let navigate = useNavigate();
    const [form] = Form.useForm();
    const onSubmit = async (value: any) => {
        console.log("submit", value);
        let obj: API.LoginRequest = {
            captcha: "6013",
            captcha_id: "7SsF0eT6M8fnFzKtrSQs",
            password: value.password,
            user_name: value.user_name,
        };
        let res = (await postPublicBaseLogin(obj)) as unknown as API.Response;
        if (res.success) {
            res.msg && Message.success(res.msg);
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("user", JSON.stringify(res.data.user_info));
            navigate("/editor");
        } else {
            res.msg && Message.error(res.msg);
        }
    };
    const onSubmitFailed = (error: { [key: string]: FieldError }) => {
        console.log("submit failed", error);
    };
    return (
        <div className="login">
            <div className="title">登录</div>
            <Form form={form} onSubmit={onSubmit} onSubmitFailed={onSubmitFailed}>
                <FormItem
                    label="用户名"
                    field="user_name"
                    rules={[{required: true, message: "用户名必填"}]}
                >
                    <Input style={{width: 270}} placeholder="输入用户名"/>
                </FormItem>
                <FormItem
                    label="密码"
                    field="password"
                    rules={[{required: true, message: "密码必填"}]}
                >
                    <Input.Password style={{width: 270}} placeholder="输入密码"/>
                </FormItem>
                <FormItem wrapperCol={{offset: 8}}>
                    <Button
                        type="primary"
                        htmlType="submit"
                        style={{marginRight: 24, width: 150, marginTop: 25}}
                    >
                        登录
                    </Button>
                </FormItem>
                <div style={{textAlign: "center", width: "100%"}}>
                    <Button
                        type="text"
                        style={{width: 150, marginLeft: 15}}
                        onClick={()=>{
                            props.onSwitch(1)
                        }}
                    >
                        注册
                    </Button>
                </div>
            </Form>
            <div style={{textAlign: "right", marginTop: "30px"}}>
                <Button type="text" onClick={()=>{
                    props.onSwitch(2)
                }}>找回密码</Button>
            </div>
        </div>
    );
}

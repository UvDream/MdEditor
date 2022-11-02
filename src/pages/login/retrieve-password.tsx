import {Input, Form, Button, Message} from "@arco-design/web-react";
import {postPublicBaseRetrievePassword} from "@/api/user";

const FormItem = Form.Item;
type Props = {
    onSwitch: () => void;
};
export default function RetrievePassword(props: Props) {
    const formItemLayout = {
        labelCol: {
            span: 7,
        },
        wrapperCol: {
            span: 17,
        },
    };
    return (
        <div className="retrieve">
            <div className={"title"}>找回密码</div>
            <Form {...formItemLayout} onSubmit={async (val) => {
                console.log(val);
                const res = await postPublicBaseRetrievePassword(val) as unknown as API.Response
                console.log(res);
                if (res.success) {
                    Message.success("密码重置成功，请登录");
                } else {
                    Message.error(res.msg);
                }
            }}>
                <FormItem label="用户名" field="user_name" rules={[{required: true, message: "用户名必填"}]}>
                    <Input style={{width: 270}}/>
                </FormItem>
                <FormItem label="昵称" field="nick_name" rules={[{required: true, message: "昵称必填"}]}>
                    <Input style={{width: 270}}/>
                </FormItem>
                <FormItem label="手机号" field="phone" rules={[{required: true, message: "手机号必填"}]}>
                    <Input style={{width: 270}}/>
                </FormItem>
                <FormItem label="邮箱" field="email" rules={[{required: true, message: "邮箱必填"}]}>
                    <Input style={{width: 270}}/>
                </FormItem>
                <FormItem label="新密码" field="password" rules={[{required: true, message: "新密码必填"}]}>
                    <Input.Password style={{width: 270}}/>
                </FormItem>
                <FormItem wrapperCol={{offset: 9}}>
                    <Button
                        type="primary"
                        htmlType="submit"
                        style={{marginRight: 24, width: 150, marginTop: 25}}
                    >
                        找回密码
                    </Button>
                </FormItem>
                <div style={{textAlign: "center", width: "100%"}}>
                    <Button
                        type="text"
                        style={{width: 150, marginLeft: 12}}
                        onClick={props.onSwitch}
                    >
                        返回
                    </Button>
                </div>
            </Form>
        </div>
    )
}
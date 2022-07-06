import {Button, Checkbox, Form, Input, Space} from "@arco-design/web-react";
import "./index.less"

const FormItem = Form.Item
export default function Login() {
    return (
        <div className="login">
            <div className="title">
                登录
            </div>
            <Form>
                <FormItem label="用户名" field="user_name" rules={[{required: true,message:"用户名必填"}]}>
                    <Input style={{width: 270}} placeholder='输入用户名'/>
                </FormItem>
                <FormItem label="密码" field="password" rules={[{required: true,message:"密码必填"}]}>
                    <Input style={{width: 270}} type="password" placeholder='输入密码'/>
                </FormItem>
                <FormItem wrapperCol={{ offset: 8}}>
                    <Button type="primary" htmlType="submit" style={{ marginRight: 24,width:150,marginTop:25 }} >
                        登录
                    </Button>
                </FormItem>
                <div style={{textAlign:"center",width:"100%"}}>
                    <Button type='text' style={{ width:150,marginLeft:15}}>注册</Button>
                </div>

            </Form>
        </div>
    );
}

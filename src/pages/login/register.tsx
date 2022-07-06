import "./index.less"
import {Button, Form, Input, Modal, Upload} from "@arco-design/web-react";
import { FieldError } from "@arco-design/web-react/es/Form/interface";

const FormItem = Form.Item

export default function Register() {
    const formItemLayout = {
        labelCol: {
            span: 7,
        },
        wrapperCol: {
            span: 17,
        },
    };
    const onSubmit=(value:FormData)=>{
        console.log('submit',value)
    }
    const onSubmitFailed=(error:{ [key: string]: FieldError })=>{
        console.log('submit failed',error)
    }
    return (
        <div className="register">
            <div className={"title"}>
                注册
            </div>
            <Form {...formItemLayout} onSubmit={onSubmit} onSubmitFailed={onSubmitFailed}>
                <FormItem label="用户名" field="user_name" rules={[{required: true, message: "用户名必填"}]}>
                    <Input style={{width: 270}} placeholder='输入用户名'/>
                </FormItem>
                <FormItem label="昵称" field="nick_name" rules={[{required: true, message: "昵称必填"}]}>
                    <Input style={{width: 270}} placeholder='输入昵称'/>
                </FormItem>
                <FormItem label="密码" field="password" rules={[{required: true, message: "密码必填"}]}>
                    <Input style={{width: 270}} type="password" placeholder='输入密码'/>
                </FormItem>
                <FormItem label="再次输入密码" field="password_again" rules={[{required: true, message: ""}]}>
                    <Input style={{width: 270}} type="password" placeholder='输入密码'/>
                </FormItem>
                <FormItem label="手机号" field="phone">
                    <Input style={{width: 270}} placeholder='输入手机号'/>
                </FormItem>
                <FormItem label="邮箱" field="email">
                    <Input style={{width: 270}} placeholder='输入邮箱'/>
                </FormItem>
                <Form.Item
                    label='头像'
                    field='avatar'
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
                                title: '预览',
                                content: (
                                    <img
                                        //@ts-ignore
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
                <FormItem wrapperCol={{offset: 9}}>
                    <Button type="primary" htmlType="submit" style={{marginRight: 24, width: 150, marginTop: 25}}>
                        注册
                    </Button>
                </FormItem>
                <div style={{textAlign: "center", width: "100%"}}>
                    <Button type='text' style={{width: 150, marginLeft: 15}}>登录</Button>
                </div>
            </Form>
        </div>
    )
}

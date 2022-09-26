import {Button, Form, Input, Message, Select, Switch} from "@arco-design/web-react";
import {useEffect, useState} from "react";
import {getUserUserConfig, postUserUserConfig, putUserUserConfig} from "@/api/system";

const Option = Select.Option
const FormItem = Form.Item;
export default function PictureBed() {
    const [form] = Form.useForm();
    const [oss_type, setOssType] = useState("")
    const [id, setID] = useState("")
    const [config, setConfig] = useState<any>()
    useEffect(() => {
        getUserUserConfig().then((res: any) => {
            if (res.success) {
                res.data.id && setID(res.data.id)
                setConfig(res.data)
                form.setFieldsValue(res.data)
                setOssType(res.data.oss_type)
            }
        })
    }, [])
    const selectChange = (val: string) => {
        setOssType(val)
    }
    const onSubmitFunc = async (val: any) => {
        console.log(val)
        if (id == "") {
            //    新增
            const res = await postUserUserConfig(val) as unknown as API.Response
            if (res.success) {
                Message.success("新增成功")
            }
        } else {
            //    编辑
            val.id = id
            //合并参数
            const data = Object.assign(config, val)
            const res = await putUserUserConfig(data) as unknown as API.Response
            if (res.success) {
                Message.success("修改成功")
            }
        }
    }
    const QiNiuComponent = () => {
        return <>
            <FormItem label="AccessKey" field="qi_niu_access_key" rules={[{required: true, message: "AccessKey必填"}]}>
                <Input/>
            </FormItem>
            <FormItem label="SecretKey" field="qi_niu_secret_key" rules={[{required: true, message: "SecretKey必填"}]}>
                <Input/>
            </FormItem>
            <FormItem label="Bucket" field="qi_niu_bucket" rules={[{required: true, message: "Bucket必填"}]}>
                <Input/>
            </FormItem>
            <FormItem label="Domain" field="qi_niu_domain" rules={[{required: true, message: "Domain必填"}]}>
                <Input/>
            </FormItem>
            <FormItem label="域名是否是Https" field="is_https">
                <Switch/>
            </FormItem>
        </>
    }
    const YouPaiComponent = () => {
        return <>
            <FormItem label="Bucket" field="up_yun_bucket" rules={[{required: true, message: "Bucket必填"}]}>
                <Input/>
            </FormItem>
            <FormItem label="Domain" field="up_yun_domain" rules={[{required: true, message: "Domain必填"}]}>
                <Input/>
            </FormItem>
            <FormItem label="Username" field="up_yun_user" rules={[{required: true, message: "Username必填"}]}>
                <Input/>
            </FormItem>
            <FormItem label="PassWord" field="up_yun_pass" rules={[{required: true, message: "PassWord必填"}]}>
                <Input.Password/>
            </FormItem>
            <FormItem label="域名是否是Https" field="is_https">
                <Switch/>
            </FormItem>
        </>
    }
    const CheckComponent = () => {
        if (oss_type === "qiniu") {
            return <QiNiuComponent/>
        }
        if (oss_type === "youpai") {
            return <YouPaiComponent/>
        }
        return <></>
    }

    return (
        <div>
            <Form onSubmit={onSubmitFunc} form={form}>
                <FormItem label="选择云存储" field="oss_type">
                    <Select style={{width: 200}} placeholder="请选择图床类型" onChange={selectChange}>
                        <Option key="qiniu" value="qiniu">七牛云</Option>
                        <Option key="youpai" value="youpai">又拍云</Option>
                    </Select>
                </FormItem>
                {CheckComponent()}
                <FormItem wrapperCol={{offset: 5}}>
                    <Button type='primary' htmlType='submit'>提交</Button>
                </FormItem>
            </Form>
        </div>

    )
}
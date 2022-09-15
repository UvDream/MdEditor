import {
    Button,
    Divider,
    Drawer,
    Form,
    Input,
    Modal,
    Radio,
} from "@arco-design/web-react";
import {GetToken} from "@/utils";
import {useEffect, useState} from "react";
import HaloPublish from "@/pages/ediotr/components/halo-publish";

type Props = {
    visible: boolean;
    onOk: () => void;
    onCancel: () => void;
};
export default function HaloPage(props: Props) {
    const [form] = Form.useForm();
    const [token, setToken] = useState(localStorage.getItem("halo-token") || "");
    useEffect(() => {
        if (localStorage.getItem("halo-url")) {
            form.setFieldsValue({
                url: localStorage.getItem("halo-url"),
            });
        }
        if (localStorage.getItem("halo-token")) {
            form.setFieldsValue({
                token: localStorage.getItem("halo-token"),
            });
        }
    }, []);
    const getToken = async () => {
        try {
            const res = await form.validate();
            const token = await GetToken(
                "https://" + res.url + "/api/admin",
                res.username,
                res.password
            );
            localStorage.setItem("halo-url", res.url);
            form.setFieldValue("token", token);
            setToken(token);
        } catch (e) {
        }
    };
    return (
        <Modal
            title={<span>Halo博客同步</span>}
            visible={props.visible}
            footer={null}
            onOk={() => {
                props.onOk();
            }}
            onCancel={() => {
                props.onCancel();
            }}
        >
            {token ? (
                <HaloPublish onOk={props.onOk} onCancel={props.onCancel}/>
            ) : (
                <>
                    <Divider orientation="center">Halo博客配置</Divider>
                    <Form form={form}>
                        <Form.Item
                            field="url"
                            label="Halo博客地址"
                            rules={[{message: "请输入halo博客地址", required: true}]}
                        >
                            <Input addBefore="https://"/>
                        </Form.Item>
                        <Form.Item field="type" label="Type" initialValue={"自动获取"}>
                            <Radio.Group options={["自动获取", "手动填写"]}/>
                        </Form.Item>
                        <Form.Item shouldUpdate noStyle>
                            {(values) => {
                                return values.type === "手动填写" ? (
                                    <Form.Item label="Token">
                                        <Input/>
                                    </Form.Item>
                                ) : (
                                    <>
                                        <Form.Item
                                            field="username"
                                            label="账户名"
                                            rules={[{message: "请输入账号", required: true}]}
                                        >
                                            <Input/>
                                        </Form.Item>
                                        <Form.Item
                                            field="password"
                                            label="Halo密码"
                                            rules={[{message: "请输入密码", required: true}]}
                                        >
                                            <Input.Password/>
                                        </Form.Item>
                                        <Form.Item wrapperCol={{offset: 5}}>
                                            <Button type="primary" onClick={getToken}>
                                                获取Token
                                            </Button>
                                        </Form.Item>
                                        <Form.Item field="token" label="博客Token">
                                            <Input/>
                                        </Form.Item>
                                    </>
                                );
                            }}
                        </Form.Item>
                    </Form>
                </>
            )}
        </Modal>
    );
}

import {
    Button,
    Divider,
    Drawer,
    Form,
    Input,
    Modal,
    Radio,
} from "@arco-design/web-react";
import {useEffect, useState} from "react";
import HaloPublish from "@/pages/ediotr/components/halo-publish";
import {getHaloToken} from "@/api/halo";

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
        const res = await form.validate();
        const result = await getHaloToken({
            url: "https://" + res.url,
            username: res.username,
            password: res.password
        }) as unknown as API.Response;
        localStorage.setItem("halo-url", res.url);
        if (result.code === 200) {
            form.setFieldValue("token", result.data.access_token);
            localStorage.setItem("halo-token", result.data.access_token);
            setTimeout(() => {
                setToken(result.data.access_token);
            }, 2000)
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
                                    <>
                                        <Form.Item label="博客Token" field="token">
                                            <Input/>
                                        </Form.Item>
                                        <Form.Item wrapperCol={{offset: 5}}>
                                            <Button type="primary" onClick={async () => {
                                                const res = await form.validate();
                                                if (res.token !== "") {
                                                    setToken(res.token);
                                                    localStorage.setItem("halo-token", res.token);
                                                    props.onOk()
                                                }
                                            }}>
                                                确定
                                            </Button>
                                        </Form.Item>
                                    </>
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

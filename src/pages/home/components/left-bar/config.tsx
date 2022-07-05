import {Modal} from "@arco-design/web-react";

type Props = {
    visible: boolean;
    onOk: (visible: boolean) => void;
    onCancel: (visible: boolean) => void;
}
export default function SetConfig(props: Props) {
    return (
        <Modal
            title='设置'
            visible={props.visible}
            onOk={() => props.onOk(false)}
            onCancel={() => props.onCancel(false)}
            autoFocus={false}
            focusLock={true}
        >
        </Modal>
    )
}

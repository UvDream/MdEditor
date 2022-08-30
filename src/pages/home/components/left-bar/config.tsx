import { Modal, Tabs } from "@arco-design/web-react";
import {
  IconApps,
  IconImage,
  IconMindMapping,
  IconPalette,
  IconTags,
} from "@arco-design/web-react/icon";

const TabPane = Tabs.TabPane;
type Props = {
  visible: boolean;
  onOk: (visible: boolean) => void;
  onCancel: (visible: boolean) => void;
};
export default function SetConfig(props: Props) {
  return (
    <Modal
      title="设置"
      style={{ width: 900 }}
      visible={props.visible}
      onOk={() => props.onOk(false)}
      onCancel={() => props.onCancel(false)}
      autoFocus={false}
      focusLock={true}
    >
      <Tabs defaultActiveTab="1" direction="vertical">
        <TabPane
          key="1"
          title={
            <span>
              <IconApps style={{ marginRight: 6 }} />
              通&#x3000;&#x3000;用
            </span>
          }
        >
          Tab2
        </TabPane>
        <TabPane
            key="2"
            title={
              <span>
              <IconPalette style={{ marginRight: 6 }}  />
              外&#x3000;&#x3000;观
            </span>
            }
        >
          Tab2
        </TabPane>
        <TabPane
          key="3"
          title={
            <span>
              <IconMindMapping style={{ marginRight: 6 }} />
              分类管理
            </span>
          }
        >
          tab2
        </TabPane>
        <TabPane
          key="4"
          title={
            <span>
              <IconTags style={{ marginRight: 6 }} />
              标签管理
            </span>
          }
        >
          tab3
        </TabPane>
        <TabPane
            key="5"
            title={
              <span>
              <IconImage style={{ marginRight: 6 }} />
              图床配置
            </span>
            }
        >
          tab3
        </TabPane>
      </Tabs>
    </Modal>
  );
}

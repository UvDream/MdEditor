import TopMenus from "./top-menus";
import {Grid} from "@arco-design/web-react"
import "./top-header.less"
const Row=Grid.Row;
const Col=Grid.Col;
export default function TopHeader() {
  return (
      <Row className={'top-header'}>
          <Col className={'logo'} span={4}>
              MdEditor
          </Col>
          <Col span={18} className={'menus'}>
              <TopMenus />
          </Col>
          <Col span={2} className={'user'}>

          </Col>
      </Row>

  );
}


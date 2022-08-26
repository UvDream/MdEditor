import TopMenus from "./top-menus";
import {Grid} from "@arco-design/web-react"
import "../../../../style/home/top-header.less"
const Row=Grid.Row;
const Col=Grid.Col;
export default function TopHeader() {
  return (
      <Row className={'top-header'} align="center">
          <Col className={'logo'} span={2} style={{textAlign:"center"}}>
              MdEditor
          </Col>
          <Col span={18} className={'menus'}>
              <TopMenus />
          </Col>
          <Col span={3} className={'user'}>

          </Col>
      </Row>

  );
}


import {Button, Divider, Menu, Popover} from "@arco-design/web-react";
import {FolderSuccess, FolderSuccessOne, SettingConfig} from "@icon-park/react";
import "./index.less"
type Props = {
    article:ArticleItemType
}
export type ArticleItemType = {
    uuid: string;
    title: string;
    status: string;
    CreatedAt: string;
}
export default function ArticleItem(props: Props) {
    const dropList = (
        <Menu style={{width: 120}}>
            <Menu.Item key='1'>
                <Button type='text' style={{fontSize: 12, lineHeight: "30px", height: 30}}>
                    发布文章
                </Button>
            </Menu.Item>
            <Menu.Item key='2'>
                <Button type='text' style={{fontSize: 12, lineHeight: "30px", height: 30}}>
                    设置
                </Button>
            </Menu.Item>
            <Menu.Item key='4'>
                <Button type='text' style={{fontSize: 12, lineHeight: "30px", height: 30}}>
                    查看文章历史
                </Button>
            </Menu.Item>
            <Divider style={{margin: "2px 0"}}/>
            <Menu.Item key='3'>
                <Button type='text' status='danger' style={{fontSize: 12, lineHeight: "20px", height: 20}}>
                    删除
                </Button>
            </Menu.Item>
        </Menu>
    )
    return (
        <div className={"article-item"}>
            <div className={"article-item-left"}>
                <div className={"article-item-left-top"}>
                    <div style={{marginTop: 2, marginRight: 2}}>
                        {
                            props.article.status === "PUBLISHED" ?
                                <FolderSuccess theme="outline" size="15" fill="#333" strokeWidth={3}/> :
                                <FolderSuccessOne theme="outline" size="24" fill="#333" strokeWidth={3}/>
                        }
                    </div>
                    <div className={"one-line title"}>
                        {props.article.title}
                    </div>
                </div>
                <div className={"article-item-left-bottom"}>
                    {props.article.CreatedAt}
                </div>
            </div>
            <div className={"article-item-right"}>
                <Popover
                    // popupVisible={true}
                    content={dropList}
                    position={'rt'}
                >
                    <SettingConfig theme="outline" size="20" fill="#333" strokeWidth={3}/>
                </Popover>
            </div>
        </div>
    )
}

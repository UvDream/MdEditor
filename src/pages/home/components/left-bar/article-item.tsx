import {Button, Divider, Menu, Message, Popover} from "@arco-design/web-react";
import {FolderSuccess, FolderSuccessOne, SettingConfig} from "@icon-park/react";
import "./index.less"
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import dayjs from "dayjs";
import {emitter, EventType} from "@/utils";
import {ArticleApi} from "@/api/article";
import {ResponseType} from "@/api/request";

type Props = {
    article: ArticleItemType,
    onClick?: (id: string) => void,
    active: string,
    id: string,
    deleteSuccess: () => void,
}
export type ArticleItemType = {
    uuid: string;
    title: string;
    status: string;
    CreatedAt: string;
}
export default function ArticleItem(props: Props) {
    const navigate = useNavigate()
    const deleteArticle = async () => {
        const obj = {
            id: props.id,
        }
        const res: ResponseType = await ArticleApi.delete(obj) as ResponseType
        if (res.code === 200) {
            props.deleteSuccess()
            Message.success('删除成功')
        }
    }
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
                <Button type='text' status='danger' style={{fontSize: 12, lineHeight: "20px", height: 20}}
                        onClick={() => {
                            deleteArticle()
                        }}>
                    删除
                </Button>
            </Menu.Item>
        </Menu>
    )
    const ArticleClick = () => {
        navigate(`/editor?id=${props.article.uuid}`)
        props.onClick && props.onClick(props.article.uuid)
        emitter.emit(EventType.FileStatus, true)
    }
    const fillColor = () => {
        return props.active === props.article.uuid ? "#fff" : "#333"
    }
    return (
        <div className={["article-item", props.active == props.article.uuid ? "active-article" : ""].join(" ")}
             onClick={ArticleClick}>
            <div className={"article-item-left"}>
                <div className={"article-item-left-top"}>
                    <div style={{marginTop: 2, marginRight: 2}}>
                        {
                            props.article.status === "PUBLISHED" ?
                                <FolderSuccess theme="outline" size="15" fill={fillColor()} strokeWidth={3}/> :
                                <FolderSuccessOne theme="outline" size="15" fill={fillColor()} strokeWidth={3}/>
                        }
                    </div>
                    <div className={"one-line title"}>
                        {props.article.title}
                    </div>
                </div>
                <div className={"article-item-left-bottom"}>
                    {dayjs(props.article.CreatedAt).format("YYYY-MM-DD HH:mm:ss")}
                </div>
            </div>
            <div className={"article-item-right"}>
                <Popover
                    // popupVisible={true}
                    content={dropList}
                    position={'rt'}
                >
                    <SettingConfig theme="outline" size="20" fill={fillColor()} strokeWidth={3}/>
                </Popover>
            </div>
        </div>
    )
}

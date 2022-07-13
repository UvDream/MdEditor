import {forwardRef, useEffect, useImperativeHandle, useState} from "react";
import {Button, Divider, Empty, Pagination} from "@arco-design/web-react";
import ArticleItem, {ArticleItemType} from "@/pages/home/components/left-bar/article-item";
import {ArticleApi} from "@/api/article";
import {ResponseType} from "@/api/request";
import "./index.less"
import {useSearchParams} from "react-router-dom";
import {emitter, EventType} from "@/utils";
import {AddOne} from "@icon-park/react";

type Props = {
    onChange?: (id: string) => void
    addFunc?: () => void
}
const ArticleList = (props: Props, ref: any) => {
    const [searchParams] = useSearchParams();
    const [articleList, setArticleList] = useState<Array<ArticleItemType>>([]);
    const [options] = useState({
        page: 1,
        page_size: 10,
    })
    const [total, setTotal] = useState(0);
    const [active, setActive] = useState('')
    useEffect(() => {
        setActive(searchParams.get('id') || '')
        getArticleList()
    }, [])
    useImperativeHandle(ref, () => ({
        getList: () => {
            getArticleList().then()
        }
    }))

    //获取文章列表
    const getArticleList = async () => {
        const res: ResponseType = await ArticleApi.list(options) as ResponseType
        if (res.code === 200) {
            setArticleList(res.data.list)
            setTotal(res.data.total)
            // setActive(searchParams.get('id') || '')
        }
    }
    return (
        <div className={"article-list"}>
            <Divider orientation={"center"}>文章列表</Divider>
            <Button long type="text" onClick={() => {
                let arr = [{
                    title: "新建文章",
                    uuid: "add"
                }, ...articleList] as ArticleItemType[]
                setArticleList(arr)
                setActive("add")
                emitter.emit(EventType.MdContent, "")
                emitter.off(EventType.MdContent)
                props.addFunc && props.addFunc()
            }}>
                <AddOne theme="outline" size="14" fill="#2d5cf6" strokeWidth={3} style={{marginRight: "4px"}}/>新增文章
            </Button>
            {
                articleList.length === 0 ?
                    <Empty description={"暂无文章"}/>
                    :
                    <>
                        <div className={"article-list-content"}>
                            {
                                articleList.map((item: ArticleItemType) => {
                                    return <ArticleItem
                                        key={item.uuid}
                                        id={item.uuid}
                                        active={active}
                                        article={item}
                                        deleteSuccess={() => {
                                            getArticleList()
                                        }}
                                        onClick={(id) => {
                                            setActive(item.uuid)
                                            props.onChange && props.onChange(id)
                                        }
                                        }/>
                                })
                            }
                        </div>
                        <div className={"article-list-pagination"}>
                            <Pagination simple total={total} size="small" className={"article-list-pagination"}/>
                        </div>
                    </>
            }
        </div>
    )
}

export default forwardRef(ArticleList)

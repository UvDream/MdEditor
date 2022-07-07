import {useEffect, useState} from "react";
import {Divider, Empty, Pagination} from "@arco-design/web-react";
import ArticleItem, {ArticleItemType} from "@/pages/home/components/left-bar/article-item";
import {ArticleApi} from "@/api/article";
import {ResponseType} from "@/api/request";
import "./index.less"
import {useSearchParams} from "react-router-dom";

type Props = {
    onChange?: (id: string) => void
}
export default function ArticleList(props: Props) {
    const [searchParams] = useSearchParams();
    const [articleList, setArticleList] = useState([]);
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
    //获取文章列表
    const getArticleList = async () => {
        const res: ResponseType = await ArticleApi.list(options) as ResponseType
        if (res.code === 200) {
            setArticleList(res.data.list)
            setTotal(res.data.total)
        }
    }
    return (
        <div className={"article-list"}>
            <Divider orientation={"center"}>文章列表</Divider>
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
                                        active={active}
                                        article={item}
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

import {useEffect, useState} from "react";
import {Divider, Empty, Pagination} from "@arco-design/web-react";
import ArticleItem, {ArticleItemType} from "@/pages/home/components/left-bar/article-item";
import {ArticleApi} from "@/api/article";
import {ResponseType} from "@/api/request";
import "./index.less"
import {useSearchParams} from "react-router-dom";

export default function ArticleList() {
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
                        {
                            articleList.map((item: ArticleItemType) => {
                                return <ArticleItem
                                    key={item.uuid}
                                    active={active}
                                    article={item}
                                    onClick={() => {
                                        setActive(item.uuid)
                                    }
                                    }/>
                            })
                        }
                        <div className={"article-list-pagination"}>
                            <Pagination simple total={total} size="small" className={"article-list-pagination"}/>
                        </div>
                    </>
            }
        </div>
    )
}

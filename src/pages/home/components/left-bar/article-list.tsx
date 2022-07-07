import {useEffect, useState} from "react";
import {Divider, Empty, Pagination} from "@arco-design/web-react";
import ArticleItem, {ArticleItemType} from "@/pages/home/components/left-bar/article-item";
import {useSearchParams} from "react-router-dom";

export default function ArticleList() {
    const [articleList, setArticleList] = useState([]);
    return (
        <div className={"article-list"}>
            <Divider orientation={"center"}>文章列表</Divider>
            {
                articleList.length === 0 ?
                    <Empty description={"暂无文章"}/>
                    :
                    <>
                        {
                            articleList.map((item:ArticleItemType)=>{
                                return <ArticleItem key={item.uuid} article={item}/>
                            })
                        }
                        <div className={"article-list-pagination"}>
                            <Pagination simple total={50} size="small" className={"article-list-pagination"}/>
                        </div>
                    </>
            }
        </div>
    )
}

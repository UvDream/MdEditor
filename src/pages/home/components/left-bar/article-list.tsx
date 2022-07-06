import {Empty, Pagination} from "@arco-design/web-react";
import ArticleItem from "@/pages/home/components/left-bar/article-item";

export default function ArticleList() {
    return (
        <div className={"article-list"}>
            <Empty/>
            <ArticleItem/>
            <div className={"article-list-pagination"}>
                <Pagination simple total={50} size="small" className={"article-list-pagination"} />
            </div>
        </div>
    )
}

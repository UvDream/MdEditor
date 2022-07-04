import {Pagination} from "@arco-design/web-react";

export default function ArticleList() {
    return (
        <div className={"article-list"}>
            文章列表
            <div className={"article-list-pagination"}>
                <Pagination simple total={50} size="small" className={"article-list-pagination"} />
            </div>
        </div>
    )
}

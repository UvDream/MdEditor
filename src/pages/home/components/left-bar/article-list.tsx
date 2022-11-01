import { forwardRef, useEffect, useImperativeHandle, useState } from "react";
import {
  Button,
  Divider,
  Empty,
  Message,
  Pagination,
} from "@arco-design/web-react";
import ArticleItem from "@/pages/home/components/left-bar/article-item";
import { ResponseType } from "@/utils/request";
import "../../../../style/home/left-bar.less";
import { useSearchParams } from "react-router-dom";
import { AddOne } from "@icon-park/react";
import { getArticleList } from "@/api/article";

type Props = {
  onClick?: (id: string) => void;
  addFunc?: () => void;
  publish?: () => void;
  history?: () => void;
};
const ArticleList = (props: Props, ref: any) => {
  const [searchParams] = useSearchParams();
  const [articleList, setArticleList] = useState<Array<API.Article>>([]);
  const [options] = useState<API.getArticleListParams>({
    page: 1,
    page_size: 10,
  });
  const [total, setTotal] = useState(0);
  const [active, setActive] = useState("");
  useEffect(() => {
    setActive(searchParams.get("id") || "");
    ArticleList().then();
  }, []);
  useImperativeHandle(ref, () => ({
    getList: () => {
      ArticleList().then();
    },
  }));

  //获取文章列表
  const ArticleList = async () => {
    const res = (await getArticleList(options)) as unknown as ResponseType;
    if (res.code === 200) {
      setArticleList(res.data.list);
      setTotal(res.data.total);
    }
  };
  return (
    <div className={"article-list"}>
      <Divider orientation={"center"}>文章列表</Divider>
      <Button
        long
        type="text"
        onClick={() => {
          if (articleList.some((item) => !item.id)) {
            Message.error("已经存在草稿文章未保存!");
            return;
          }
          let arr = [
            {
              title: "新建文章",
            },
            ...articleList,
          ] as API.Article[];
          setArticleList(arr);
          setActive("add");
          props.addFunc && props.addFunc();
        }}
      >
        <AddOne
          theme="outline"
          size="14"
          fill="#2d5cf6"
          strokeWidth={3}
          style={{ marginRight: "4px" }}
        />
        新增文章
      </Button>
      {articleList.length === 0 ? (
        <Empty description={"暂无文章"} />
      ) : (
        <>
          <div className={"article-list-content"}>
            {articleList.map((item: API.Article) => {
              return (
                <ArticleItem
                  publish={() => {
                    props.publish && props.publish();
                  }}
                  history={() => {
                    props.history && props.history();
                  }}
                  id={item.id || ""}
                  key={item.id}
                  active={active}
                  article={item}
                  deleteSuccess={() => {
                    ArticleList().then();
                  }}
                  onClick={(id) => {
                    setActive(item.id || "add");
                    props.onClick && props.onClick(id);
                  }}
                />
              );
            })}
          </div>
          <div className={"article-list-pagination"}>
            <Pagination
              simple
              total={total}
              size="small"
              className={"article-list-pagination"}
              onChange={(page, pageSize) => {
                options.page = page;
                options.page_size = pageSize;
                ArticleList().then();
              }}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default forwardRef(ArticleList);

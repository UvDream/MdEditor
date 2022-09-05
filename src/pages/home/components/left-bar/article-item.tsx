import {
  Button,
  Divider,
  Menu,
  Message,
  Popover,
} from "@arco-design/web-react";
import {
  FolderSuccess,
  FolderSuccessOne,
  SettingConfig,
} from "@icon-park/react";
import "../../../../style/home/left-bar.less";
import { useNavigate, useSearchParams } from "react-router-dom";
import dayjs from "dayjs";
import { ResponseType } from "@/utils/request";
import { useDispatch } from "react-redux";
import { changeState } from "@/store/save-state";
import { deleteArticle__openAPI__delete } from "@/api/article";

type Props = {
  article: API.Article;
  onClick?: (id: string) => void;
  active: string;
  id: string;
  deleteSuccess: () => void;
  publish: () => void;
  history: () => void;
};

export default function ArticleItem(props: Props) {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const deleteArticle = async () => {
    const obj = {
      id: props.id,
    };
    const res: ResponseType = (await deleteArticle__openAPI__delete(
      obj
    )) as unknown as ResponseType;
    if (res.code === 200) {
      props.deleteSuccess();
      Message.success("删除成功");
    }
  };
  const dropList = (
    <Menu style={{ width: 120 }}>
      <Menu.Item key="1">
        <Button
          type="text"
          style={{ fontSize: 12, lineHeight: "30px", height: 30 }}
          onClick={props.publish}
        >
          发布文章
        </Button>
      </Menu.Item>
      <Menu.Item key="4">
        <Button
          type="text"
          style={{ fontSize: 12, lineHeight: "30px", height: 30 }}
          onClick={props.history}
        >
          查看文章历史
        </Button>
      </Menu.Item>
      <Divider style={{ margin: "2px 0" }} />
      <Menu.Item key="3">
        <Button
          type="text"
          status="danger"
          style={{ fontSize: 12, lineHeight: "20px", height: 20 }}
          onClick={() => {
            deleteArticle();
          }}
        >
          删除
        </Button>
      </Menu.Item>
    </Menu>
  );
  const ArticleClick = () => {
    if (props.article.id) {
      navigate(`/editor?id=${props.article.id}`);
    } else {
      navigate(`/editor?id=add`);
    }
    props.onClick && props.onClick(props.article.id || "");
    dispatch(changeState(false));
  };
  const fillColor = () => {
    let color = props.active === props.article.id ? "#fff" : "#333";
    if (props.active === "add" && !props.article.id) {
      color = "#fff";
    }
    return color;
  };
  return (
    <div
      className={[
        "article-item",
        props.article.id === props.active ||
        props.article.id === searchParams.get("id") ||
        (props.active === "add" && !props.article.id)
          ? "active-article"
          : "",
      ].join(" ")}
      onClick={ArticleClick}
    >
      <div className={"article-item-left"}>
        <div className={"article-item-left-top"}>
          <div style={{ marginTop: 2, marginRight: 2 }}>
            {props.article.status === "PUBLISHED" ? (
              <FolderSuccess
                theme="outline"
                size="15"
                fill={fillColor()}
                strokeWidth={3}
              />
            ) : (
              <FolderSuccessOne
                theme="outline"
                size="15"
                fill={fillColor()}
                strokeWidth={3}
              />
            )}
          </div>
          <div className={"one-line title"}>{props.article.title}</div>
        </div>
        <div className={"article-item-left-bottom"}>
          {dayjs(props.article.create_time).format("YYYY-MM-DD HH:mm:ss")}
        </div>
      </div>
      <div className={"article-item-right"}>
        <Popover
          // popupVisible={true}
          content={dropList}
          position={"rt"}
        >
          <SettingConfig
            theme="outline"
            size="20"
            fill={fillColor()}
            strokeWidth={3}
          />
        </Popover>
      </div>
    </div>
  );
}

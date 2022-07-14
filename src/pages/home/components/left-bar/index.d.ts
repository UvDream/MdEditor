import {ArticleDetailType} from "../../../../api/article";

export type Props = {
    visible?: boolean;
    onOk: () => void;
    onCancel?: () => void;
}
export type ArticleSaveProps={
    visible?: boolean;
    onOk: (status:boolean,articleDetail:ArticleDetailType) => void;
    onCancel?: () => void;
    detail?: ArticleDetailType
}
export  type TagItemType = {
    ID: number;
    name: string;
    slug: string;
    thumbnail: string;
    color: string;
}
export type CategoryItemType = {
    ID: number;
    name: string;
    slug: string;
    description: string;
    thumbnail: string;
    parent_id: number;
    password: string;
    children: CategoryItemType[];
}
export type fileType = {
    ID: number;
    url: string;
    status: string;
    percent: number;
    name: string;
    response: any;
    uid: string;
    position: string;
    originFileObj: File;
}

import {ZhiHuIcon} from "@/components/icons/zhihu";
import {WeXinIcon} from "@/components/icons/weixin";
import {
    Computer,
    Iphone,
    ParagraphCut,
    PayCodeOne,
    UpdateRotation,
} from "@icon-park/react";
import React from "react";

export type IconType = {
    id: number;
    icon: React.ReactNode | any;
    title: string;
    type: string;
    url?: string;
};
export const IconList: Array<IconType> = [
    {
        id: 1,
        icon: <ZhiHuIcon/>,
        title: "复制到知乎",
        type: "icon-zhihu",
    },
    {
        id: 2,
        icon: <WeXinIcon/>,
        title: "复制到微信公众号",
        type: "icon-wx",
    },
    {
        id: 3,
        type: "icon-pc",
        title: "电脑端样式预览",
        icon: <Computer theme="outline" size="20" fill="#333" strokeWidth={3}/>,
    },
    {
        id: 4,
        icon: <Iphone theme="outline" size="20" fill="#333" strokeWidth={3}/>,
        type: "icon-phone",
        title: "手机端样式预览",
    },
    {
        id: 5,
        icon: (
            <UpdateRotation theme="outline" size="20" fill="#333" strokeWidth={3}/>
        ),
        type: "icon-sync",
        title: "多平台发布",
    },
    {
        id: 7,
        icon: (
            <ParagraphCut theme="outline" size="20" fill="#333" strokeWidth={3}/>
        ),
        type: "icon-halo1.ts",
        title: "Halo博客系统",
        url: "https://halo.run/upload/2021/03/Adaptive256-463ca9b92e2d40268431018c07735842.png",
    },
    {
        id: 6,
        icon: <PayCodeOne theme="outline" size="20" fill="#333" strokeWidth={3}/>,
        type: "icon-code",
        title: "手机扫码预览",
    },
];

export interface TopMenusType {
    id:string;
    name?: string;
    type?:string;
    shortcuts?:string;
    children?: Array<TopMenusType>;
}

export const TopMenusData: Array<TopMenusType> = [
    {
        id:"1",
        name: '文件',
        children: [
            {
                id:"1-1",
                name: '新建文件'
            },
            {
                id:"1-2",
                name: '导出markdown',
            },
            {
                id:"1-3",
                name: '导出PDF'
            },
            {
                id:"1-4",
                name: '导入'
            }
        ]
    },
    {
        id:"2",
        name: '段落',
        children: [
            {
                id:"2-1",
                name: '一级标题',
                shortcuts: ""
            },
            {
                id:"2-2",
                name: '二级标题',
                shortcuts: ""
            },
            {
                id:"2-3",
                name: '三级标题',
                shortcuts: ""
            },
            {
                id:"2-4",
                name: '四级标题',
                shortcuts: ""
            },
            {
                id:"2-5",
                name: '五级标题',
                shortcuts: ""
            },
            {
                id:"2-6",
                name: '六级标题',
                shortcuts: ""
            },
            {
                id:"2-7",
                type: 'divider'
            },
            {
                id:"2-8",
                name: '表格',
                shortcuts: ""
            },
            {
                id:"2-9",
                name: '代码块',
                shortcuts: ""
            },
            {
                id:"2-10",
                name: '公式块',
                shortcuts: ""
            },
            {
                id:"2-11",
                type: 'divider'
            },
            {
                id:"2-12",
                name: '引用',
                shortcuts: ""
            },
            {
                id:"2-13",
                type: 'divider'
            },
            {
                id:"2-14",
                name: '有序列表',
                shortcuts: ""
            },
            {
                id:"2-15",
                name: '无序列表',
                shortcuts: ""
            },
            {
                id:"2-16",
                name: "任务列表",
                shortcuts: ""
            },
            {
                id:"2-17",
                type: 'divider'
            },
            {
                id:"2-18",
                name: '链接引用',
                shortcuts: ""
            },
            {
                id:"2-19",
                name: '水平分割线',
                shortcuts: ""
            }
        ]
    },
    {
        id:"3",
        name: '格式',
        children: [
            {
                id:"3-1",
                name: '加粗',
                shortcuts: ""
            },
            {
                id:"3-2",
                name: '斜体',
                shortcuts: ""
            },
            {
                id:"3-3",
                name: '下划线',
                shortcuts: ""
            },
            {
                id:"3-4",
                name: '行内代码',
                shortcuts: ""
            },
            {
                id:"3-5",
                type: 'divider'
            },
            {
                id:"3-6",
                name: '删除线',
                shortcuts: ""
            },
            {
                id:"3-7",
                name: '注释',
                shortcuts: ""
            },
            {
                id:"3-8",
                type: 'divider'
            },
            {
                id:"3-9",
                name: '超链接',
                shortcuts: ""
            },
            {
                id:"3-10",
                name: '图片',
                shortcuts: ""
            }
        ]
    },
    {
        id:"4",
        name: '功能',
    },
    {
        id:"5",
        name: '查看',
    },
    {
        id:"6",
        name: '主题',
    },
    {
        id:"7",
        name: '代码主题',
    },
]


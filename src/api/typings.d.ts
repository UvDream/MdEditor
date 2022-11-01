declare namespace API {
  type Article = {
    /** 分类 */
    categories?: Category[];
    /** 分类id */
    categories_id?: number[];
    /** 评论数 */
    comment_count?: number;
    create_time?: string;
    delete_time?: DeletedAt;
    /** 禁止评论 */
    disable_comments?: boolean;
    /** 编辑器类型 */
    editor_type?: string;
    /** halo的文章ID */
    halo_id?: string;
    /** html内容 */
    html_content?: string;
    id?: string;
    /** 是否置顶 */
    is_top?: boolean;
    /** 点赞数 */
    likes?: number;
    /** markdown内容 */
    md_content?: string;
    /** 头部描述 */
    meta_description?: string;
    /** 头部关键字 */
    meta_key_words?: string;
    /** 访问密码 */
    password?: string;
    /** 别名 */
    slug?: string;
    /** 状态 DRAFT, PUBLISHED */
    status: string;
    /** 摘要 */
    summary?: string;
    /** tags */
    tags?: Tag[];
    /** tags id */
    tags_id?: number[];
    theme?: Theme;
    /** 主题ID */
    theme_id?: string;
    /** 缩略图 */
    thumbnail?: string;
    /** 标题 */
    title: string;
    update_time?: string;
    user?: User;
    /** 用户id */
    user_id?: string;
    /** 访问量 */
    visits?: number;
    /** 字数 */
    word_count?: number;
  };

  type ArticleHaloResponse = {
    categoryIds?: number[];
    /** html */
    content?: string;
    /** MARKDOWN RICHTEXT */
    editorType?: string;
    /** html */
    formatContent?: string;
    id?: number;
    /** markdown */
    originalContent?: string;
    /** 别名 */
    slug?: string;
    /** PUBLISHED DRAFT INTIMATE RECYCLE */
    status?: string;
    tagIds?: number[];
    title?: string;
    token?: string;
    /** 是否置顶 */
    topped?: boolean;
    url?: string;
  };

  type Bill = {
    /** 账单金额 */
    amount?: number;
    /** 账单分类ID */
    category_id?: string;
    create_time?: string;
    creator?: User;
    /** 账单创建者ID */
    creator_id?: string;
    delete_time?: DeletedAt;
    id?: string;
    ledger_category?: LedgerCategory;
    /** 账单名称 */
    name?: string;
    /** 账单状态 */
    status?: string;
    /** 账单标签 */
    tags?: LedgerTag[];
    /** 账单类型 */
    type?: string;
    update_time?: string;
  };

  type Captcha = {
    "bg-color"?: RGBA;
    /** 验证码高度 */
    height?: number;
    /** 验证码语言 zh/en */
    language?: string;
    /** 验证码长度 */
    length?: number;
    /** 噪点数量 */
    "noise-count"?: number;
    /** 显示线条选项  2/4/8 */
    "show-line-options"?: number;
    /** 验证码类型 default/audio/math/string/math/chinese */
    type?: string;
    /** 验证码宽度 */
    width?: number;
  };

  type Category = {
    /** 子类 */
    children?: Category[];
    create_time?: string;
    delete_time?: DeletedAt;
    /** 描述 */
    description?: string;
    id?: string;
    /** 分类名 */
    name: string;
    /** 父级ID */
    parent_id?: string;
    /** 访问密码 */
    password?: string;
    /** 别名 */
    slug?: string;
    /** 缩略图 */
    thumbnail?: string;
    update_time?: string;
  };

  type CategoryLedger = {
    children?: CategoryLedger[];
    create_time?: string;
    delete_time?: DeletedAt;
    /** 分类描述 */
    description?: string;
    /** 分类图标类型 1 图片/2 icon/3 文字 */
    icon_type?: string;
    id?: string;
    /** 分类名称 */
    name?: string;
    /** 父元素ID */
    parent_id?: string;
    /** 分类缩略图 */
    thumbnail?: string;
    /** 类型  0 支出/ 1收入.... */
    type?: string;
    update_time?: string;
    user?: User;
    /** 分类创建者ID */
    user_id?: string;
  };

  type deleteArticle_openAPI_deleteParams = {
    /** 参数 */
    id: string;
  };

  type deleteCategory_openAPI_deleteParams = {
    /** 删除Category */
    id: string;
  };

  type DeletedAt = {
    time?: string;
    /** Valid is true if Time is not NULL */
    valid?: boolean;
  };

  type deleteFile_openAPI_deleteIdParams = {
    /** 参数 */
    id: string;
  };

  type deleteLedger_openAPI_deleteParams = {
    /** 账本ID */
    id: number;
  };

  type deleteLedgerBill_openAPI_deleteParams = {
    /** 账单ID */
    id: number;
  };

  type deleteLedgerCategory_openAPI_deleteParams = {
    /** 账本分类ID */
    id: number;
  };

  type deleteLedgerTag_openAPI_deleteParams = {
    /** 账本标签ID */
    id: number;
  };

  type deleteTag_openAPI_deleteParams = {
    /** 删除tag */
    id: string;
  };

  type deleteTheme_openAPI_deleteParams = {
    /** 主题id */
    id: string;
  };

  type File = {
    auth_id?: string;
    create_time?: string;
    delete_time?: DeletedAt;
    id?: string;
    is_https?: boolean;
    key?: string;
    name?: string;
    position?: string;
    size?: number;
    type?: string;
    update_time?: string;
    url?: string;
  };

  type getArticle_openAPI_exportParams = {
    /** 参数 */
    id: string;
  };

  type getArticleDetailParams = {
    /** 参数 */
    id: string;
  };

  type getArticleHistoryParams = {
    /** 参数 */
    id: string;
  };

  type getArticleListParams = {
    category_id?: number;
    end_time?: string;
    start_time?: string;
    status?: string;
    tag_id?: number;
    /** 标题 */
    title?: string;
    /** 关键字 */
    key_word?: string;
    page: number;
    page_size: number;
  };

  type getFileListParams = {
    /** 关键字 */
    key_word?: string;
    page: number;
    page_size: number;
  };

  type getHaloCategoryParams = {
    /** token */
    token: string;
    /** url */
    url: string;
  };

  type getHaloTagsParams = {
    /** token */
    token: string;
    /** url */
    url: string;
  };

  type getHaloTokenParams = {
    /** 用户名 */
    username: string;
    /** 密码 */
    password: string;
    /** url */
    url: string;
  };

  type getLedgerCategoryListParams = {
    /** 账本分类ID */
    id: number;
  };

  type getPublicBaseMdParams = {
    /** 参数 */
    id: string;
  };

  type getThemeDetailParams = {
    /** 主题id */
    id: string;
  };

  type getThemeListParams = {
    /** 关键词 */
    keyword?: string;
  };

  type getThemePublicParams = {
    /** 关键词 */
    keyword?: string;
  };

  type Ledger = {
    /** 分类 */
    categories?: CategoryLedger[];
    create_time?: string;
    creator?: User;
    /** 账本创建者ID */
    creator_id?: string;
    delete_time?: DeletedAt;
    /** 账本描述 */
    description?: string;
    id?: string;
    /** 账本成员数量 */
    member_count?: number;
    /** 账本名称 */
    name?: string;
    /** 标签 */
    tags?: TagLedger[];
    /** 缩略图 */
    thumbnail?: string;
    /** 账本类型 */
    type?: string;
    update_time?: string;
    /** 账本成员ID */
    user?: User[];
  };

  type LedgerCategory = {
    category_ledger_id?: string;
    ledger_id?: string;
  };

  type LedgerTag = {
    ledger_id?: string;
    tag_id?: string;
  };

  type LoginRequest = {
    captcha: string;
    captcha_id: string;
    password: string;
    user_name: string;
  };

  type PaginatedData = {
    list?: any;
    total?: number;
  };

  type postFileUploadParams = {
    /** 携带的平台token参数 */
    token: string;
  };

  type Response = {
    code: number;
    data: any;
    msg: string;
    success: boolean;
  };

  type RetrievePasswordRequest = {
    email?: string;
    nick_name?: string;
    password?: string;
    phone?: string;
    user_name?: string;
  };

  type RGBA = {
    r?: number;
  };

  type SysRole = {
    children?: SysRole[];
    create_time?: string;
    delete_time?: DeletedAt;
    id?: string;
    /** 父角色ID */
    parent_id?: string;
    /** 角色名 */
    role_name?: string;
    update_time?: string;
  };

  type Tag = {
    /** 颜色 */
    color?: string;
    create_time?: string;
    delete_time?: DeletedAt;
    id?: string;
    /** 标签名 */
    name: string;
    /** 别名 */
    slug?: string;
    /** 缩略图 */
    thumbnail?: string;
    update_time?: string;
  };

  type TagLedger = {
    create_time?: string;
    creator?: User;
    /** 标签创建者ID */
    creator_id?: string;
    delete_time?: DeletedAt;
    /** 标签描述 */
    description?: string;
    id?: string;
    /** 标签名称 */
    name?: string;
    update_time?: string;
  };

  type Theme = {
    create_time?: string;
    /** 额外主题 */
    dark_theme?: string;
    delete_time?: DeletedAt;
    /** 描述 */
    description?: string;
    id?: string;
    /** 是否公开 */
    is_public?: boolean;
    /** 名字 */
    name?: string;
    /** 主题 */
    theme?: string;
    /** 简略图 */
    thumbnail?: string;
    update_time?: string;
    user?: User;
    /** 作者ID */
    user_id?: string;
  };

  type User = {
    avatar?: string;
    create_time?: string;
    delete_time?: DeletedAt;
    email?: string;
    id?: string;
    nick_name?: string;
    password?: string;
    phone?: string;
    /** 关联到角色表 */
    roles?: SysRole[];
    update_time?: string;
    user_config?: UserConfig;
    user_config_id?: string;
    user_name?: string;
  };

  type UserConfig = {
    create_time?: string;
    delete_time?: DeletedAt;
    id?: string;
    /** 是否是https */
    is_https?: boolean;
    /** 存储位置 */
    oss_type?: string;
    /** 七牛云 */
    qi_niu_access_key?: string;
    qi_niu_bucket?: string;
    qi_niu_domain?: string;
    qi_niu_position?: string;
    qi_niu_secret_key?: string;
    token?: string;
    /** 又拍云 */
    up_yun_bucket?: string;
    up_yun_domain?: string;
    up_yun_pass?: string;
    up_yun_user?: string;
    update_time?: string;
  };
}

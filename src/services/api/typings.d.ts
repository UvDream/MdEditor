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

  type Captcha = {
    'bg-color'?: RGBA;
    /** 验证码高度 */
    height?: number;
    /** 验证码语言 zh/en */
    language?: string;
    /** 验证码长度 */
    length?: number;
    /** 噪点数量 */
    'noise-count'?: number;
    /** 显示线条选项  2/4/8 */
    'show-line-options'?: number;
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
    parent_id?: number;
    /** 访问密码 */
    password?: string;
    /** 别名 */
    slug?: string;
    /** 缩略图 */
    thumbnail?: string;
    update_time?: string;
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

  type deleteTag_openAPI_deleteParams = {
    /** 删除tag */
    id: string;
  };

  type deleteTheme_openAPI_deleteParams = {
    /** 主题id */
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

  type getArticleMdParams = {
    /** 参数 */
    id: string;
  };

  type getFileListParams = {
    /** 关键字 */
    key_word?: string;
    page: number;
    page_size: number;
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

  type LoginRequest = {
    captcha: string;
    captcha_id: string;
    password: string;
    user_name: string;
  };

  type Response = {
    code: number;
    data: any;
    msg: string;
    success: boolean;
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

  type Theme = {
    create_time?: string;
    delete_time?: DeletedAt;
    /** 描述 */
    description?: string;
    id?: string;
    /** 是否公开 */
    is_public?: boolean;
    /** 名字 */
    name?: string;
    /** 主题 */
    theme: string;
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
    user_name?: string;
  };
}

declare namespace API {
  type DeletedAt = {
    time?: string;
    /** Valid is true if Time is not NULL */
    valid?: boolean;
  };

  type LoginRequest = {
    captcha: string;
    captcha_id: string;
    password: string;
    user_name: string;
  };

  type Response = {
    code?: number;
    data?: any;
    msg?: string;
  };

  type SysRole = {
    children?: SysRole[];
    created_at?: string;
    deleted_at?: DeletedAt;
    id?: number;
    /** 父角色ID */
    parent_id?: string;
    /** 角色名 */
    role_name?: string;
    updated_at?: string;
  };

  type SysUser = {
    avatar?: string;
    created_at?: string;
    deleted_at?: DeletedAt;
    email?: string;
    id?: number;
    nick_name?: string;
    password: string;
    phone?: string;
    /** 关联到角色表 */
    roles?: SysRole[];
    updated_at?: string;
    user_name: string;
    uuid?: string;
  };
}

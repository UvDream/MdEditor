/*
 * @Author: wangzhongjie
 * @Date: 2022-04-26 22:32:09
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2022-04-26 22:32:10
 * @Description:
 * @Email: UvDream@163.com
 */
import "./index.less"
import Login from "@/pages/login/login";
import Register from "@/pages/login/register";
export default function LoginPage() {
  return(
      <div className={"login-page"}>
          {/*<Login />*/}
          <Register />
      </div>
  );
}

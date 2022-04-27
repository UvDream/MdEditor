/*
 * @Author: wangzhongjie
 * @Date: 2022-04-26 22:35:56
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2022-04-27 09:41:31
 * @Description:
 * @Email: UvDream@163.com
 */
export enum DeviceTypeEnum {
  PC,
  MOBILE,
  Pad,
}
/**
 * 判断设备
 * @returns {DeviceTypeEnum}
 */
export const DeviceType = () => {
  let ua = navigator.userAgent.toLowerCase();
  let isAndroid = ua.indexOf("android") > -1;
  let isIphone = ua.indexOf("iphone") > -1;
  let isIpad = ua.indexOf("ipad") > -1;
  if (isAndroid || isIphone) {
    return DeviceTypeEnum.MOBILE;
  }
  if (isIpad) {
    return DeviceTypeEnum.Pad;
  }
  return DeviceTypeEnum.PC;
};

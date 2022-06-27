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

/**
 * 判断是mac/window
 */
export const GetSystem = () => {
    let ua = navigator.userAgent.toLowerCase();
    let isMac = ua.indexOf("macintosh") > -1;
    let isWindow = ua.indexOf("windows") > -1;
    if (isMac) {
        return "mac";
    }
    if (isWindow) {
        return "window";
    }
}
/**
 * CalcWordCount 计算字数
 * @param data
 */
export const CalcWordCount = (data:string) => {
    const pattern = /[a-zA-Z0-9_\u0392-\u03c9\u0410-\u04F9]+|[\u4E00-\u9FFF\u3400-\u4dbf\uf900-\ufaff\u3040-\u309f\uac00-\ud7af]+/g;
    const m = data.match(pattern);
    let count = 0;
    if (m === null) return count;
    for (let i = 0; i < m.length; i++) {
        if (m[i].charCodeAt(0) >= 0x4e00) {
            count += m[i].length;
        } else {
            count += 1;
        }
    }
    return count;
};

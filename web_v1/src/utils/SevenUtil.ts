import * as _ from "lodash";

export const lodashUtil = _;

export const getJsonData = (obj: any, key: string): any => {
    if (!obj) {
        throw new Error("obj is undefined");
    }
    if (!key) {
        throw new Error("key is undefined");
    }
    const data = _.get(obj, key);
    if (data === undefined) {
        console.log("没有对应属性：", key, obj)
    }
    return data;
}

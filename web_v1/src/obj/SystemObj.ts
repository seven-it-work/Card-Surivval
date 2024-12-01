import {BaseStatus, Phase} from "./status/BaseStatus.ts";

export class SystemObj {
    currentTime: number = 0;


}

export class Environment {
    // 光亮
    light: number = 0;
    // weather: Weather;

    // 这是环境影响的基础数据
    readonly environmentData: BaseStatus[] = [
        {
            id: "light",
            baseValue: 0,
            changeWhen15Minutes: 0,
            minValue: 0,
            maxValue: 100,
            phases: [{
                min: 0,
                max: 0,
                description: "太黑了，什么都看不见",
                impact: [
                    {
                        property: "清醒度",
                        value: -0.25
                    }, {
                        property: "世界观",
                        value: -5
                    },
                ]
            },{
                min: 1,
                max: 100,
                description: "",
                impact: [
                    {
                        property: "监视者的凝视",
                        value: -99
                    },
                ]
            }]
        }
    ];
}

export interface Weather {
    name: string;
}



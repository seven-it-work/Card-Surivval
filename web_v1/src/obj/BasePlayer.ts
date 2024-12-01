import {BaseStatus} from "./status/BaseStatus.ts";

export default class BasePlayer {
    // 走路时产生。可以通过袜子、包脚布或更好的鞋子来缓解。
    footDamage: number = 0;
    stat: Stat = {};


    readonly statData: BaseStatus[] = [
        {
            id: "morale",
            baseValue: 0,
            minValue: -350,
            maxValue: 350,
            changeWhen15Minutes: 0,
            // todo 衰减: 相同来源1天内衰减为50%，叠加2次
            name: "情绪",
            description: "显示你当前的基本情绪。情绪会影响你的免疫系统，在极端情况下会导致抑郁或狂躁状态。\n" +
                "你的情绪代表了你当前的心情。\n" +
                "\n" +
                "情绪低落会削弱你的免疫系统，让你睡得更多，工作生活效率低下，因为无论你做什么都感觉没有意义。\n" +
                "\n" +
                "为了保持高昂的情绪，一定要避免处于负面状态中，如饥饿、口渴或疼痛时，别忘了时不时地休息一下。",
            phases: [
                {
                    min: 326,
                    max: 350,
                    description: "我对生活很满意",
                    impact: [
                        {property: "免疫系统", value: 100},
                        {property: "情绪", value: -3},
                        {property: "世界观", value: -4},
                        {property: "孤独感", value: -1},
                        {property: "狂躁", value: 0.75},
                        {property: "失实症", value: -100},
                    ]
                }, {
                    min: 251,
                    max: 325,
                    description: "我对生活很满意",
                    impact: [
                        {property: "免疫系统", value: 75},
                        {property: "情绪", value: -2},
                        {property: "孤独感", value: -0.5},
                        {property: "狂躁", value: 0.5},
                        {property: "失实症", value: -50},
                    ]
                }, {
                    min: 100,
                    max: 250,
                    description: "我很满意现在的生活",
                    impact: [
                        {property: "免疫系统", value: 50},
                        {property: "情绪", value: -1},
                        {property: "失实症", value: -25},
                    ]
                }, {
                    min: -250,
                    max: 100,
                    description: "我有点难过",
                    impact: [
                        {property: "免疫系统", value: -25},
                        {property: "食欲", value: -25},
                        {property: "情绪", value: 0.5},
                        {property: "世界观", value: -1},
                        {property: "士气", value: -25},
                    ]
                }, {
                    min: -300,
                    max: -251,
                    description: "撑不下去了……",
                    impact: [
                        {property: "免疫系统", value: -50},
                        {property: "食欲", value: -50},
                        {property: "情绪", value: 1},
                        {property: "失实症", value: -10},
                        {property: "士气", value: -25},
                    ]
                }
            ]
        }
    ]
}

export interface Stat {
    spirit: Spirit;


}

/**
 * 精神分类
 */
export interface Spirit {
    morale: number;

}
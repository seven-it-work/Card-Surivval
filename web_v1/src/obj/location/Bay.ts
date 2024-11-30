import BaseCard from "../BaseCard.ts";
import {CardWeight, Condition, Impact} from "../status/BaseStatus.ts";
import {ExploreProgress} from "./BaseLocation.ts";
import {getJsonData} from "../../utils/SevenUtil.ts";
import {randomDropCard} from "../../utils/ProbabilityUtil.ts";


export default class Bay implements BaseCard {
    name = "海湾"
    description = "位于小岛南岸的美丽海湾。在其丰饶的水域中可以发现许多鱼、动物和植物，包括牡蛎、海藻、珊瑚、海蛇甚至鲨鱼"
    tags = [];
    environmentalImpact: Impact[] = [];
    exploreValue: number = 0;
    exploreSpendTime: number = 15;
    exploreProgress: ExploreProgress[] = [
        {value: 33, locationId: "丛林小经"}
    ]
    exploreCondition: Condition[] = [
        {property: '光', min: 10, max: 100}
    ];
    exploreStateChange: Impact[] = [
        {property: 'footDamage', value: 8}
    ];
    exploreDropCard: CardWeight[] = [
        {
            weight: 200,
            maxCount: -1,
            cardId: "漂亮贝壳",
            number: 1,
        },
        {
            weight: 350,
            maxCount: -1,
            cardId: "棕榈叶",
            minNumber: 4,
            maxNumber: 8,
        },
        {
            weight: 3000,
            maxCount: 1,
            cardId: "石头",
            number: 1,
        },
        {
            weight: 900,
            maxCount: -1,
            cardId: "石头",
            number: 1,
        },
        {
            weight: 0,
            maxCount: -1,
            otherWight(obj: any): number {
                // 螃蟹种群数量为1000～60000时权重+100～+200
                // 视力为1～3时权重-100～-200
                return 100;
            },
            cardId: "螃蟹",
            number: 1,
        },
        {
            weight: 0,
            maxCount: -1,
            otherWight(obj: any): number {
                // 海湾椰子树种群数量为1000～30000时权重+5000，否则权重-1000000
                // 椰子树存在于手中/面板，权重-5000(可叠加),
                return 100;
            },
            cardId: "椰子树",
            number: 1,
        }
    ]

    // 是否能探索
    canExplore(obj: any): boolean {
        for (let i = 0; i < this.exploreCondition.length; i++) {
            var condition = this.exploreCondition[i];
            var jsonData = getJsonData(obj, condition.property);
            if (jsonData < condition.min || jsonData > condition.max) {
                return false;
            }
        }
        return true
    }

    // 执行探索
    doExplore(obj: any) {
        this.exploreValue++;
        // 系统世界改变

        // 状态改变
        for (let i = 0; i < this.exploreStateChange.length; i++) {
            var impact = this.exploreStateChange[i];
            // todo 调用player的状态改变方法
        }
        // 探索dropCard生成
        const cardWeights = randomDropCard(obj, this.exploreDropCard);
        // 放置到各种的位置
    }
}
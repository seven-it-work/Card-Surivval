import {BaseStatus} from "./BaseStatus.ts";

export default class FootDamageStatus implements BaseStatus{
    baseValue= 0;
    changeWhen15Minutes= -1;
    maxValue= 1000;
    minValue= 0;
    phases= [
        {
            min: 250, max: 500, description: "我的脚好疼\n割伤和水泡使走路更困难。", impact: []
        }, {
            min: 501, max: 1000, description: "我的脚上都是割伤和水泡，太疼了。", impact: []
        },
    ]
}
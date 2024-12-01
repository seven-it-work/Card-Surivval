export interface Impact {
    property: string;
    value: number;
}

export interface Condition {
    property: string;
    min: number;
    max: number;
}

export interface Phase {
    min: number;
    max: number;
    description: string;
    impact: Impact[];
}

export interface CardWeight {
    weight: number;// 基础权重
    maxCount: number;// 限制次数，-1表示无限制
    otherWight?(obj: any):number;// 额外权重计算
    cardId: string;
    minNumber?: number;
    maxNumber?: number;
    number?:number;
}

export interface BaseStatus {
    id:string;
    baseValue: number;
    minValue: number;
    maxValue: number;
    // 每15分钟变化率
    changeWhen15Minutes: number;
    phases: Phase[];
    name?: string;
    description?: string;
}
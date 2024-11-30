import {CardWeight} from "../obj/status/BaseStatus.ts";
import Chance from "chance";
import {lodashUtil} from "./SevenUtil.ts";


export const randomUtil = new Chance()


export const uuid = () => randomUtil.guid()


export const randomDropCard = (obj: any, cardList: CardWeight[], size: number = 1): CardWeight[] => {
    let result = [];
    for (let i = 0; i < size; i++) {
        result.push(randomOneDropCard(obj, cardList))
    }
    return result;
}

export const randomOneDropCard = (obj: any, cardList: CardWeight[]): CardWeight => {
    if (!cardList) {
        throw new Error('No card list');
    }
    let sum = lodashUtil.sum(cardList.map(item => {
        if (!item.otherWight) {
            item.otherWight = () => {
                return 0;
            }
        }
        return item.weight + item.otherWight(obj);
    }));
    const integer = randomUtil.integer({min: 0, max: sum});
    let temp = 0;
    for (let i = 0; i < cardList.length; i++) {
        const cardWeight = cardList[i];
        temp += cardWeight.weight
        if (cardWeight.otherWight) {
            temp += cardWeight.otherWight(obj);
        }
        if (integer >= temp) {
            return cardWeight;
        }
    }
    console.log("obj data", obj)
    console.log("cardList data", cardList)
    console.log("sum data", sum)
    console.log("integer data", integer)
    console.log("temp data", temp)
    throw new Error("Invalid card weight");
}
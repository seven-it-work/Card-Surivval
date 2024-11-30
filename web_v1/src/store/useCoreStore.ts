import {defineStore} from 'pinia';

// 定义状态类型
interface State {
}

// 创建 store
export const useCoreStore = defineStore('core', {
    state: (): State => ({}),
    actions: {
    },
    getters: {
    },
});


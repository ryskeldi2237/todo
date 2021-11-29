import { makeAutoObservable } from "mobx";
import {ITodo} from '../components/interface'
class Store {
    constructor() {
        makeAutoObservable(this)
    }
    count: number = 0;
    todos: ITodo[] = [
        {
        id: 0,
        title: 'Wake up at 8:00',
        done: true
    },{
        id: 1,
        title: 'Learn TypeScript',
        done: false
    },{
        id: 2,
        title: 'Implement a project with weather',
        done: false
    }];
    addTodo(value: string) {
        const item: ITodo = {
            id: this.todos.length,
            title: value,
            done: false
        }
        if (/\S/.test(value)) {
            this.todos.unshift(item)
        }
    }
    removeItem(id: number): void {
        this.todos = this.todos.filter(elem => elem.id !== id)
    }
    changeCompleate(id: number): void {
        this.todos.forEach(el => {
            if (el.id === id) {
                el.done = !el.done
            }
        })
    }
    get compleated() {
        return this.count = this.todos.filter(item => item.done).length
    }
    get sort() {
        return this.todos.slice().sort((a, b) => a.done === b.done ? 0 : a.done ? 1 : -1)
    }
    report() {
        return this.compleated
    }
}
export default new Store()
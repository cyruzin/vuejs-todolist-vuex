import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        todo: []
    },
    mutations: {
        addTodo(state, task) {
            if (task === null) return false;
            state.todo = [
                ...state.todo,
                { id: Date.now(), name: task, completed: false }
            ];
        },
        markTodo(state, task) {
            state.todo.find(t => {
                if (t.id === task.id) t.completed = !t.completed;
            });
        },
        removeTodo(state, task) {
            state.todo = state.todo.filter(t => t.id !== task.id);
        }
    }
})
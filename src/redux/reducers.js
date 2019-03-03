import { combineReducers } from 'redux'
import { 
    ADD_TODO,
    TOGGLE_TODO,
    SET_VISIBILITY_FILTER,
    VisibilityFilters 
} from './action-creators'

const { SHOW_ALL } = VisibilityFilters

// const initialState = {
//     visibilityFilter: VisibilityFilters.SHOW_ALL,
//     todos: []
// }

function visibilityFilter(state = SHOW_ALL, action) {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return action.filter
        default:
            return state
    }
}

function todos(state = [], action) {
    //Handle actions
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    text: action.text,
                    completed: false    
                }
            ]
        case TOGGLE_TODO:
            return state.map((todo, index) => {
                if (index === action.index) {
                    return Object.assign({}, todo, {
                        completed: !todo.completed
                    })
                }
                return todo
            })
        default: 
            return state
    }
}


const todoApp = combineReducers({
    a: visibilityFilter,
    b: todos
})

//Above block is equivalent to block below
// export default function todoApp(state = {}, action) {
//     return {
//       visibilityFilter: visibilityFilter(state.visibilityFilter, action),
//       todos: todos(state.todos, action)
//     }
//   }

export default todoApp

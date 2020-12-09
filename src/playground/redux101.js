import { createStore } from 'redux';

const incrementCount = ({ incrementBy = 1 } = {}) => {
    return {
        type: 'INCREMENT',
        incrementBy: incrementBy
    }
};

const decrementCount = ({ decrementBy = 1 } = {}) => {
    return {
        type: 'DECREMENT',
        decrementBy: decrementBy
    }
}

const setCount = ({ count }) => {
    return {
        type: 'SET',
        count: count
    }
}

const resetCount = () => {
    return {
        type: 'RESET'
    }
}

// Reducers
// 1. Reducers are pure functions
// 2. Never change state or actions

const countReducer = (state = { count: 0 }, action) => {
    switch(action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            }
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            }
        case 'RESET':
            return {
                count: 0
            }
        case 'SET':
            return {
                count: action.count
            }
        default: 
            return state;
    }
}

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
})

store.dispatch(incrementCount({ incrementBy: 5 }));
store.dispatch(incrementCount());

store.dispatch(decrementCount({ decrementBy: 5 }));
store.dispatch(decrementCount());

store.dispatch(setCount({ count: 200 }));

store.dispatch(resetCount());
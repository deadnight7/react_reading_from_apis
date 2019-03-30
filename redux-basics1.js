const redux = require("redux");
const createStore = redux.createStore;

initialState = {
    counter : 0
}

//create a reducer 
rootReducer = (state = initialState, action)=> {
    if (action.type==="INC_CONTER"){
        return {
            ...state,
            counter: state.counter + 1
        }
    }if (action.type==="ADD_CONTER"){
        return {
            ...state,
            counter: state.counter + action.value
        }
    }
    return state;
}

//Create Store with initial state
const store = createStore(rootReducer);
console.log(store.getState());

store.subscribe(()=>{
    console.log("SUBSCRIBE: ", store.getState());
});

//dispatch an event
store.dispatch ({ type: "INC_CONTER"});
store.dispatch ({ type: "ADD_CONTER", value: 10});
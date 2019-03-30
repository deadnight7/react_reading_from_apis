const redux = require ("redux");
const createStore = redux.createStore;

//Create inital state
initialState = {
    counter : 0
}

//Create a reducer which will mutate the state based on any dispatch actions 
rootReducer =  (state = initialState, action) => {
    if (action.type === "ADD_COUNTER"){
        return {
             ...state,
             counter : state.counter + action.value
        }
 
    }
    if (action.type === "INC_COUNTER"){
        return {
             ...state,
             counter : state.counter + 1
        }
 
    }
    return state;
}

//Create a store having that reducer
let store = createStore(rootReducer);
console.log(store.getState());

//Subscribe to that state change 
store.subscribe (()=>{
    console.log("[SUBSCRIPTION] : ",store.getState());
})

//Dispatch that state
store.dispatch({type: "ADD_COUNTER", value : 10});
store.dispatch({type: "INC_COUNTER"});
console.log(store.getState());
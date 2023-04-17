import { Decrement, Increment } from "../actions/action.types"

const initialState = {
    counter: 0
}

const changeValueReducer = (state = initialState, action) => {
    switch (action.type) {
        case Increment:
            return { ...state, counter: state.counter + action.payload };
        case Decrement:
            if (state.counter > 0) {
                return { ...state, counter: state.counter - action.payload };
            }
        default:
            return state;
    }
}

export default changeValueReducer;
import { Fetch_Request_End, Fetch_Request_Error, Fetch_Request_Start } from "../actions/action.types";

const initialState = {
    loading: true,
    item: [],
    error: null
};

const getCatReducer = (state = initialState, action) => {
    switch (action.type) {
        case Fetch_Request_Start:
            return { ...state, loading: action.loading, item: action.payload};
        case Fetch_Request_End:
            return { ...state, loading: action.loading, item: action.payload};
        case Fetch_Request_Error:
            return { ...state, loading: action.loading, error: action.payload};
        default:
            return initialState;
    }
}

export default getCatReducer;
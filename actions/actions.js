import { Decrement, Fetch_Request_End, Fetch_Request_Error, Fetch_Request_Start, Increment } from "./action.types";

export const incrementCount = (num) => {
    return ({
        type: Increment,
        payload: num
    });
};

export const decrementCount = (num) => {
    return ({
        type: Decrement,
        payload: num
    });
};


export const getCatList = () => (dispatch) => {
    dispatch({
        type: Fetch_Request_Start,
        payload: [],
        loading: true
    });

    fetch("https://api.thecatapi.com/v1/images/search?limit=10&page=1")
        // Case2 Thunk received response
        .then(response => response.json())
        .then(responseJson => {
            dispatch({
                type: Fetch_Request_End,
                payload: responseJson,
                loading: false
            });
        })
        .catch((error) => {
            console.error(error);
            dispatch({
                type: Fetch_Request_Error,
                payload: error,
                loading: false
            });
        })
}

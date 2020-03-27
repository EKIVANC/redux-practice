const counterReducer = ( state = { counter: 0 }, action ) => {
    const newState = { ...state};

    switch (action.type) {
        case 'INCREMENT':
            newState.counter = state.counter + action.payload;
            break;
        case 'DECREMENT':
            newState.counter = state.counter - action.payload;
            break;
    }

    return newState;
};

export default counterReducer;
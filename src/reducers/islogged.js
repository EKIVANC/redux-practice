const isLoggedInReducer = (state= { isloggedIn: false }, action) => {
    const newState = { ...state};

    switch (action.type) {
        case 'SIGN_IN':
            newState.isloggedIn = !state.isloggedIn;
    }
    return newState;
};

export default isLoggedInReducer;
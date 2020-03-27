export const increment = (incAmount) => {
    return {
        type: 'INCREMENT',
        payload: incAmount
    }
};

export const decrement = (decAmount) => {
    return {
        type: 'DECREMENT',
        payload: decAmount
    }
};


export const login = () => {
    return {
        type: 'SIGN_IN'
    }
};
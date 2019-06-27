
export const add = payload => {
    return {
        type: 'ADD',
        payload,
    }
}

export const remove = payload => {
    return {
        type: 'REMOVE',
        payload,
    }
};

export const reset = () => {
    return {
        type: 'RESET',
    }
};
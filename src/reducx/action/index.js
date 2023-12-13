export const addCart = (product) => {
    return {
        type: 'ADDITEM',
        payload: product,
    };
};
export const delCart = (product) => {
    return {
        type: 'DELITEM',
        payload: product,
    };
};

export const toggleCart = () => {
    return {
        type: 'TOGGLE_CART',
    };
};

export const increaseQty = (productId) => ({
    type: 'INCREASE_QTY',
    payload: { id: productId },
});

export const decreaseQty = (productId) => ({
    type: 'DECREASE_QTY',
    payload: { id: productId },
});

export const removeItem = (productId) => ({
    type: 'REMOVE_ITEM',
    payload: { id: productId },
});

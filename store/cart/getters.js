export const productQuantity = (state) => (product) => {
    const item = state.cart.find(i => i.id === product.id)
    if(item) return item.quantity
    else return null
}

export const cartTotal = (state) => {
    return state.cart.reduce((a, b)=> a + (b.price * b.quantity), 0) 
}

export const cartItems = (state) => {
    return state.cart
}
let cartItems = [];

// addToCart
const addToCart = (product) => {
	cartItems.push(product);
};

// display cart items
const getCartItems = () => {
	return cartItems;
};

module.exports = { addToCart, getCartItems };

const { Product } = require('./product');

/**
 * Represents a line item inside the cart.
 */
class CartItem {
    /**
     * @param {Product} product
     * @param {number}  quantity
     */
    constructor(product, quantity) {
        // TODO: store product and quantity as instance properties
    }

    /**
     * Returns the subtotal for this line item (price × quantity).
     * @returns {number}
     */
    subtotal() {
        // TODO: return product.price multiplied by quantity
    }
}

/**
 * A simple shopping cart.
 */
class Cart {
    constructor() {
        // TODO: initialise an empty array called `items` to hold CartItem objects
    }

    /**
     * Adds `quantity` units of `product` to the cart.
     * If the product is already in the cart, increase its quantity.
     *
     * @param {Product} product
     * @param {number}  quantity
     */
    add(product, quantity) {
        // TODO: check if an item with the same product name already exists.
        //       If yes, increase its quantity.
        //       If no, push a new CartItem.
    }

    /**
     * Removes the item with the given product name from the cart entirely.
     * Does nothing if the product is not in the cart.
     *
     * @param {string} productName
     */
    remove(productName) {
        // TODO: filter out the item whose product.name matches productName
    }

    /**
     * Returns the sum of all line item subtotals.
     * @returns {number}
     */
    total() {
        // TODO: reduce items to the sum of their subtotals
    }

    /**
     * Returns the current list of CartItem objects (in insertion order).
     * @returns {CartItem[]}
     */
    getItems() {
        // TODO: return the items array
    }
}

module.exports = { Cart };

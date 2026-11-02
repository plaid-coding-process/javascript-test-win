const { Product } = require('./product');
const { Cart } = require('./cart');

// Fixed scenario — do not change these values.
const apple = new Product('Apple', 1.50);
const bread = new Product('Bread', 2.50);
const milk  = new Product('Milk',  1.50);

const cart = new Cart();

// TODO: add 2x Apple, 1x Bread, 3x Milk to the cart

// TODO: print the cart receipt followed by the total in this format:
//
//   Cart:
//     Apple        x2  $3.00
//     Bread        x1  $2.50
//     Milk         x3  $4.50
//   --------------------------
//   Total:             $10.00
//
// Name is left-aligned in 12 chars, quantity right-aligned in 2 chars,
// subtotal right-aligned in 6 chars with a leading $.

// TODO: remove Bread from the cart and print:
//   "Removed: Bread"

// TODO: print the updated cart receipt and total

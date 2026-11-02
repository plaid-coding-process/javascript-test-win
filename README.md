# JavaScript Live Coding Challenge — Shopping Cart

## Before You Start

- Create a new Git branch named after yourself or something recognisable (e.g. `git checkout -b your-name`).
- Googling and reading documentation/tutorials are allowed.
- **Do not use AI tools** (ChatGPT, Copilot, etc.).

## Overview

You have **5–10 minutes** to implement a simple shopping cart from a set of partially written JavaScript files.

## Files

| File | Description |
|---|---|
| `product.js` | Defines a `Product` class |
| `cart.js` | Implements the `Cart` class with add, remove, and total logic |
| `main.js` | Entry point — drives a fixed scenario and prints the receipt |

## What You Need to Do

1. Read each file and complete every function that has a `TODO` body.
2. Run `node main.js` — the output must match the **Expected Output** section below.

## Expected Output

```
Cart:
  Apple        x2  $3.00
  Bread        x1  $2.50
  Milk         x3  $4.50
--------------------------
Total:             $10.00

Removed: Bread
Cart:
  Apple        x2  $3.00
  Milk         x3  $4.50
--------------------------
Total:              $7.50
```

## Rules

- Use **only** Node.js built-ins — no `npm install`.
- Do **not** change function signatures or class structure.
- Do **not** create additional files.

## How to Run

```bash
node main.js
```

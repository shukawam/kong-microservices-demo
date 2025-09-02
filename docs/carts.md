# Carts API

## Endpoints

### GET /carts/{cartId}

- **Summary:** Get cart by ID
- **Parameters:**
  - `cartId` (path, required): The ID of the cart.
- **Responses:**
  - `200 OK`: A single cart.
    - **Content:** `application/json`
      - **Schema:** `Cart`

### POST /carts/{cartId}

- **Summary:** Add item to cart
- **Parameters:**
  - `cartId` (path, required): The ID of the cart.
- **Request Body:**
  - **Content:** `application/json`
    - **Schema:** `Item`
- **Responses:**
  - `201 Created`: Item added.

### GET /carts/{cartId}/items

- **Summary:** Get all items in a cart
- **Parameters:**
  - `cartId` (path, required): The ID of the cart.
- **Responses:**
  - `200 OK`: A list of items.
    - **Content:** `application/json`
      - **Schema:** Array of `Item`

## Schemas

### Cart

| Name   | Type   | Description                    |
| ------ | ------ | ------------------------------ |
| cartId | string | The ID of the cart.            |
| items  | array  | An array of items in the cart. |

### Item

| Name      | Type    | Description                 |
| --------- | ------- | --------------------------- |
| itemId    | string  | The ID of the item.         |
| quantity  | integer | The quantity of the item.   |
| unitPrice | number  | The unit price of the item. |

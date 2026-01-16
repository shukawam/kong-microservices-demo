# Orders API

## Endpoints

### POST /orders

- **Summary:** Create a new order
- **Request Body:**
  - **Content:** `application/json`
    - **Schema:** `Order`
- **Responses:**
  - `201 Created`: Order created.
    - **Content:** `application/json`
      - **Schema:** `Order`

### GET /orders/{orderId}

- **Summary:** Get order by ID
- **Parameters:**
  - `orderId` (path, required): The ID of the order.
- **Responses:**
  - `200 OK`: A single order.
    - **Content:** `application/json`
      - **Schema:** `Order`

## Schemas

### Order

| Name    | Type   | Description                     |
| ------- | ------ | ------------------------------- |
| orderId | string | The ID of the order.            |
| items   | array  | An array of items in the order. |
| total   | number | The total price of the order.   |

### Item

| Name      | Type    | Description                 |
| --------- | ------- | --------------------------- |
| itemId    | string  | The ID of the item.         |
| quantity  | integer | The quantity of the item.   |
| unitPrice | number  | The unit price of the item. |

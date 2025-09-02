# Catalogue API

## Endpoints

### GET /products

- **Summary:** Get all products
- **Responses:**
  - `200 OK`: A list of products.
    - **Content:** `application/json`
      - **Schema:** Array of `Product`

### GET /products/{productId}

- **Summary:** Get product by ID
- **Parameters:**
  - `productId` (path, required): The ID of the product.
- **Responses:**
  - `200 OK`: A single product.
    - **Content:** `application/json`
      - **Schema:** `Product`

## Schemas

### Product

| Name        | Type   | Description                     |
| ----------- | ------ | ------------------------------- |
| id          | string | The ID of the product.          |
| name        | string | The name of the product.        |
| description | string | The description of the product. |
| price       | number | The price of the product.       |
| imageUrl    | string | The URL of the product image.   |

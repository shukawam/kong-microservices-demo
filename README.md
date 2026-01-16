# ec-kong: Microservices EC Site Sample

This is a sample e-commerce site built with a microservices architecture, inspired by the famous "Sock Shop" demo application. It is designed to be deployed on Kubernetes and is intended for use in service mesh demonstrations.

## Architecture

![architecture](./img/architecture.png)

The application is composed of the following microservices:

- **frontend**: A React-based user interface.
- **catalogue**: Manages product information (Node.js/Express).
- **cart**: Manages shopping cart data (Node.js/Express).
- **order**: Manages order processing (Node.js/Express).

### Intentional Failure for Service Mesh Demos

For the purpose of demonstrating service mesh capabilities like retries and circuit breakers, the **orders** service has been intentionally designed to fail. It will return a `500 Internal Server Error` approximately 50% of the time when an order is placed.

## How to Use

### Running Locally with Docker Compose

You can run the entire application locally using Docker Compose.

1. **Build and start all services:**

   ```bash
   docker compose up --build
   ```

2. **Access the application:**
   Open your web browser and navigate to `http://localhost:3000`.

   You will notice that sometimes the product list fails to load. This is the intended behavior of the `catalogue` service.

3. **Stop the services:**

```bash
docker compose down
```

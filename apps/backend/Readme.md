# Backend - Conversion Rate Tracker

This is the backend service for the Conversion Rate Tracker, responsible for fetching and serving real-time conversion rate updates over WebSockets.

## Prerequisites

Ensure you have the following installed before running the backend:

- [Node.js](https://nodejs.org/) (16.x or higher)
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

## Installation

1. **Clone the repository**:
   ```bash
    git clone https://github.com/mirashz/conversion-rate-tracker.git
    cd conversion-rate-tracker/apps/backend
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up environment variables**:
   Create a `.env` file and configure necessary values.

## Environment Variables

The backend requires the following environment variables:

```
PORT=3001  # Port for the backend server
CONTRACT_ADDRESS=0xD9A442124...  # Ethereum contract address
WEB3_PROVIDER_URL=https://eth.llamarpc.com  # Web3 provider for blockchain interaction
WS_PORT=8081  # WebSocket server port
RATE_UPDATE_INTERVAL_MS=5000  # Interval for fetching rate updates in milliseconds
```

## Running the Backend

### Development Mode

Start the backend in development mode:
```bash
npm run dev
```
- Uses `nodemon` for automatic restarts.
- Runs TypeScript files with `ts-node`.

### Build

To compile TypeScript into JavaScript:
```bash
npm run build
```
- Outputs files to the `dist/` directory.

### Start in Production Mode

Run the compiled JavaScript files:
```bash
npm start
```
- Uses Node.js to serve the built files from `dist/`.

## Docker Setup

Run the backend using Docker:
```bash
docker-compose up --build
```

## Health Check

Once running, verify the backend is available at:
```
http://localhost:3001
```

## Dependencies

### Main Dependencies:
- `express` - Web server framework.
- `ws` - WebSockets support.
- `ethers` - Blockchain interactions.
- `helmet` - Security headers.
- `dotenv` - Environment variable management.
- `winston` - Logging.

### Development Dependencies:
- `nodemon` - Auto-restarts in development.
- `typescript` - TypeScript support.
- `ts-node` - Run TypeScript directly.
- Type definitions (`@types/...`) for TypeScript support.

## License

This project is licensed under the ISC License.


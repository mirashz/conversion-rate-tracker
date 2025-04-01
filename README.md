# Conversion Rate Tracker

Conversion Rate Tracker is a web application that monitors and displays real-time conversion rate updates. It consists of a backend service that fetches data and a frontend that visualizes the information.

## Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (16.x or higher)
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

## Installation

### Clone the Repository
```bash
git clone https://github.com/mirashz/conversion-rate-tracker.git
cd conversion-rate-tracker
```

### Backend Setup
```bash
cd backend
npm install
```

### Frontend Setup
```bash
cd ../frontend
npm install
```

## Environment Variables

Create a `.env` file in both `backend/` and `frontend/` directories with the following values:

### Backend
```
PORT=3001  # Port for the backend server
CONTRACT_ADDRESS=0x12213...  # Ethereum contract address
WEB3_PROVIDER_URL=https://eth.llamarpc.com  # Web3 provider for blockchain interaction
WS_PORT=8081  # WebSocket server port
RATE_UPDATE_INTERVAL_MS=5000  # Interval for fetching rate updates in milliseconds
```

### Frontend
```
REACT_APP_WS_SERVER_URL=ws://your-websocket-server-url.com  # WebSocket server URL
REACT_APP_MAX_DATA_POINTS=17280  # Max number of data points to store
```

## Running the Application

### Development Mode
#### Backend
```bash
cd backend
npm run dev
```

#### Frontend
```bash
cd frontend
npm start
```

### Production Mode
#### Backend
```bash
cd backend
npm run build
npm start
```

#### Frontend
```bash
cd frontend
npm run build
```

### Running with Docker
```bash
docker-compose up --build
```

## Accessing the Application

- **Frontend**: [http://localhost](http://localhost)
- **Backend Health Check**: [http://localhost:3001](http://localhost:3001)
- **WebSocket Connection**: `ws://localhost:8081`

## Dependencies

### Backend
- `express` - Web server framework.
- `ws` - WebSockets support.
- `ethers` - Blockchain interactions.
- `helmet` - Security headers.
- `dotenv` - Environment variable management.
- `winston` - Logging.

### Frontend
- `react` - Core frontend library.
- `react-dom` - React rendering.
- `chart.js` & `react-chartjs-2` - Data visualization.
- `ws` - WebSockets support.

## TODOs

- Add tests.
- Improve WebSocket connection handling.
- Optimize frontend performance and bundle size.
- Enhance error logging.
- Implement Prettier & Linting checks.

## License

This project is licensed under the ISC License.
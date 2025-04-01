# Frontend - Conversion Rate Tracker

This is the frontend application for the Conversion Rate Tracker, providing a visual representation of conversion rate updates over time.

## Prerequisites

Ensure you have the following installed before running the frontend:

- [Node.js](https://nodejs.org/) (16.x or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/mirashz/conversion-rate-tracker.git
   cd conversion-rate-tracker/apps/frontend
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up environment variables**:
   Create a `.env` file and configure necessary values.

## Environment Variables

The frontend requires the following environment variables:

```
REACT_APP_WS_SERVER_URL=ws://your-websocket-server-url.com  # WebSocket server URL
REACT_APP_MAX_DATA_POINTS=17280  # Max data points stored in the chart
```

## Running the Frontend

### Development Mode

Start the frontend in development mode:
```bash
npm start
```
- Runs a development server with hot-reloading.

### Build

To create an optimized production build:
```bash
npm run build
```
- Outputs files to the `build/` directory.

## Docker Setup

Run the frontend using Docker:
```bash
docker-compose up
```

## Dependencies

### Main Dependencies:
- `react` - UI framework.
- `react-chartjs-2` - Charting library.
- `chart.js` - Core chart library.
- `ws` - WebSockets support.

### Development Dependencies:
- `typescript` - TypeScript support.
- `@types/react` - TypeScript definitions.
- `@testing-library/react` - Testing utilities.

## TODOs

- Add tests.
- Improve WebSocket connection handling.
- Optimize bundle size.
- Improve component structure.
- Add Prettier & Linting checks.

## License

This project is licensed under the ISC License.
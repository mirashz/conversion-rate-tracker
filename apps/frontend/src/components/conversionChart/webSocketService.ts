import { useEffect, useState } from 'react';
import { CONFIG } from "../../config/env";

interface ConversionRateData {
  rate: number;
  timestamp: number;
}

// Use values from the environment configuration
const SOCKET_SERVER_URL = CONFIG.WS_SERVER_URL;
const MAX_DATA_POINTS = CONFIG.MAX_DATA_POINTS;

// Custom hook to manage WebSocket connection
export const useWebSocket = () => {
  const [conversionRateData, setConversionRateData] = useState<ConversionRateData[]>([]);
  const [connectionStatus, setConnectionStatus] = useState<string>('Connecting'); // Track connection status

  useEffect(() => {
    // Establish WebSocket connection
    const socketConnection = new WebSocket(SOCKET_SERVER_URL);

    // Handle incoming messages
    socketConnection.onmessage = (event) => {
      const data = JSON.parse(event.data);
      if (data && data.rate && data.timestamp) {
        setConversionRateData((prevData) => {
          const updatedData = [...prevData, data];

          // Keep only the last 'MAX_DATA_POINTS' data points
          if (updatedData.length > MAX_DATA_POINTS) {
            updatedData.shift();
          }

          return updatedData;
        });
      }
    };

    // Handle WebSocket connection open
    socketConnection.onopen = () => {
      setConnectionStatus('Connected');
    };

    // Handle WebSocket connection errors
    socketConnection.onerror = (error) => {
      console.error('WebSocket Error:', error);
      setConnectionStatus('Error');
    };

    // Handle WebSocket connection close
    socketConnection.onclose = () => {
      console.log('WebSocket connection closed');
      setConnectionStatus('Closed');
    };

    // Cleanup on component unmount
    return () => {
      socketConnection.close();
    };
  }, []);

  return { conversionRateData, connectionStatus };
};

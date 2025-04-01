import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { useWebSocket } from './webSocketService';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const ConversionRateChart: React.FC = () => {
  // Fetch data and connection status from WebSocket service
  const { conversionRateData, connectionStatus } = useWebSocket();

  // Get the last data point (latest rate and timestamp)
  const lastDataPoint = conversionRateData.length > 0 ? conversionRateData[conversionRateData.length - 1] : null;

  // Prepare chart data
  const chartData = {
    labels: conversionRateData.map((entry) => new Date(entry.timestamp).toLocaleTimeString()),
    datasets: [
      {
        label: 'Conversion Rate',
        data: conversionRateData.map((entry) => entry.rate),
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: true,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Conversion Rate Over Time',
      },
      tooltip: {
        callbacks: {
          label: function (context: any) {
            return `Rate: ${context.raw}`;
          },
        },
      },
    },
  };

  return (
    <div>
      {/* Display connection status */}
      <div style={{ marginBottom: '10px', fontSize: '18px', fontWeight: 'bold' }}>
        Connection Status: {connectionStatus}
      </div>

      {/* Display last rate and timestamp in UTC */}
      {lastDataPoint && (
        <div style={{ marginBottom: '10px' }}>
          <strong>Last Rate:</strong> {lastDataPoint.rate} <br />
          <strong>Last Timestamp (UTC):</strong> {new Date(lastDataPoint.timestamp).toISOString()}
        </div>
      )}

      {/* Render the chart */}
      <Line data={chartData} options={chartOptions} />
    </div>
  );
};

export default ConversionRateChart;

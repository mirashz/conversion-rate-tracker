export const CONFIG = {
    WS_SERVER_URL: process.env.REACT_APP_WS_SERVER_URL || 'ws://localhost:8081',
    MAX_DATA_POINTS: parseInt(process.env.REACT_APP_MAX_DATA_POINTS || '17280', 10),
  };
import React from "react";
import { LineChart, Line, XAxis, Tooltip, CartesianGrid } from "recharts";

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div style={{ backgroundColor: 'red', padding: '5px', color: 'white' }}>
        {`${payload[0].value} min`}
      </div>
    );
  }
  return null;
};

const AverageSessions = ({ data }) => {
  return (
    <div style={{ backgroundColor: 'red', color: 'white' }}>
      <h2 style={{ textAlign: 'center' }}>Durée moyenne des sessions</h2>
      <LineChart width={300} height={300} data={data}>
        <XAxis dataKey="day" tickFormatter={(tick) => ['L', 'M', 'M', 'J', 'V', 'S', 'D'][tick - 1]} />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip content={<CustomTooltip />} />
        <Line type="monotone" dataKey="sessionLength" stroke="white" dot={false} />
      </LineChart>
    </div>
  );
};

export default AverageSessions;

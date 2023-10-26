import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="averageSessions__tooltip">
        {`${payload[0].value} min`}
      </div>
    );
  }
  return null;
};

const AverageSessions = ({ data }) => {
  return (
    <div className="averageSessions">
      <h2>Durée moyenne des <br /> sessions</h2>
      <LineChart width={300} height={180} data={data}>
        <XAxis
          dataKey="day"
          tickFormatter={(tick) => ['L', 'M', 'M', 'J', 'V', 'S', 'D'][tick - 1]} 
          tick={{ fill: 'white' }}
          axisLine={false}
          tickLine={false} 
          />
        <YAxis domain={[10, 120]} hide={true} />  
        <Tooltip content={<CustomTooltip />} />
        <Line
          type="natural"
          dataKey="sessionLength"
          stroke="white"
          dot={false}
        />  
      </LineChart>
    </div>
  );
};

export default AverageSessions;

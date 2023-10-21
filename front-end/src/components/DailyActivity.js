import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

const CustomLegend = () => (
  <div style={{ textAlign: 'right' }}>
    <span style={{ color: 'black' }}>● Poids (kg)</span>
    <span style={{ color: 'red', marginLeft: '10px' }}>● Calories brûlées (kcal)</span>
  </div>
);

const formatDateToDay = (tickItem) => {
  return new Date(tickItem).getDate();
};

const DailyActivity = ({ data }) => {
  return (
    <div>
      <h2 style={{ textAlign: 'left' }}>Activité quotidienne</h2>
      <CustomLegend />
      <BarChart width={600} height={300} data={data}>
        <XAxis dataKey="day" tickFormatter={formatDateToDay} />
        <YAxis domain={[65, 'auto']} orientation="right" interval={0} />
        {/* <YAxis ticks={[0, 69, 70, 71]} orientation="right" /> */}
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Bar dataKey="kilogram" fill="black" barSize={7} radius={[5, 5, 0, 0]} />
        <Bar dataKey="calories" fill="red" barSize={7} radius={[5, 5, 0, 0]} />
      </BarChart>
    </div>
  );
};

export default DailyActivity;



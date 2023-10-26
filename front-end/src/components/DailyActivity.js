import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

const CustomLegend = () => (
  <div className="dailyActivity__legend">
    <p className="dailyActivity__kg"><span className="dailyActivity__dotDark">●</span>Poids (kg)</p>
    <p className="dailyActivity__kcal"><span className="dailyActivity__dotRed">●</span>Calories brûlées (kcal)</p>  
  </div>
);

const formatDateToDay = (tickItem) => {
  return new Date(tickItem).getDate();
};

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className= "dailyActivity__tooltip">
        <span>{`${payload[0].value}kg`}</span>
        <span>{`${payload[1].value}Kcal`}</span>
      </div>
    );
  }
  return null;
};

const DailyActivity = ({ data }) => {
  return (
    <div className="dailyActivity">
      <div className="dailyActivity__infos">
        <h2>Activité quotidienne</h2>
        <CustomLegend />
      </div>
        <BarChart width={500} height={200} data={data} barGap={10}>
          <XAxis dataKey="day"
                 tickFormatter={formatDateToDay} 
                 tickLine={false} 
         />
    
          {/* Axe Y pour le poids */}
          <YAxis 
              yAxisId="left" 
              type="number" 
              domain={[65, 85]} 
              orientation="right" 
              ticks={[65, 75, 85]}
              axisLine={false}
              tickLine={false}
          />
    
          {/* Axe Y pour les calories (sans affichage) */}
          <YAxis yAxisId="right" hide={true} />

          <CartesianGrid vertical={false} />
          <Tooltip content={<CustomTooltip />} />

          {/* Barre pour le poids utilisant le premier axe Y */}
          <Bar yAxisId="left" dataKey="kilogram" fill="#282D30" barSize={7} radius={[5, 5, 0, 0]} />

          {/* Barre pour les calories utilisant le second axe Y */}
          <Bar yAxisId="right" dataKey="calories" fill="#E60000" barSize={7} radius={[5, 5, 0, 0]} />
        </BarChart>  
    </div>
  );
};

export default DailyActivity;



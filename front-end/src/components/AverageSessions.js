import React from "react";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";

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
      <ResponsiveContainer width="100%" height={224}>
        <LineChart  
          data={data} 
          strokeWidth={1}
          onMouseMove={(e) => {
            if (e.isTooltipActive === true) {
              let div = document.querySelector(".averageSessions")
              let windowWidth = div.clientWidth
              let mouseXpercentage = Math.round(
                (e.activeCoordinate.x / windowWidth) * 100
              )
              div.style.background = `linear-gradient(90deg, rgba(255,0,0,1) ${mouseXpercentage}%, rgba(175,0,0,1.5) ${mouseXpercentage}%, rgba(175,0,0,1.5) 100%)`
            }
          }}
        >
          <XAxis
            dataKey="day"
            tickFormatter={(tick) => ['L', 'M', 'M', 'J', 'V', 'S', 'D'][tick - 1]}
            tickLine={false}
            stroke="red"
            padding={{right:10, left:10}}
            tick={{ fontSize: 13, fill: "white", opacity: 0.8 }}
            axisLine={false}
          />
          <YAxis
            dataKey="sessionLength"
            domain={[0, "dataMax + 80"]}
            hide={true}
          />
          <Tooltip content={<CustomTooltip />} />
          <Line
            type="basis"
            dataKey="sessionLength"
            stroke="rgba(255, 255, 255, 0.7)"
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 4, strokeWidth: 4, stroke: "white" }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AverageSessions;

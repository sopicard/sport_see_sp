import React from "react";
import { RadialBarChart, RadialBar, Cell, ResponsiveContainer } from "recharts";

const TodayScore = ({ score }) => {
  const data = [
    { name: "score", value: score, fill: "#FF0000" },
    { name: "remaining", value: 1 - score, fill: "transparent" }
  ];

  return (
    <div className="todayScore">
      <h2>Score</h2>
      <ResponsiveContainer width="100%" height={224}>
        <RadialBarChart
          cx="50%"
          cy="50%"
          innerRadius="70%" 
          outerRadius="90%"
          barSize={10}
          data={data}
          startAngle={180}
          endAngle={-270}
          background={{ fill: "#FFFFFF" }} 
        >
          <RadialBar
            minAngle={15}
            dataKey="value"
            cornerRadius={10}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.fill} />
            ))}
          </RadialBar>
        </RadialBarChart>
      </ResponsiveContainer> 
      <div className="todayScore__text">
        <div className="todayScore__percentage">{`${(score * 100).toFixed(0)}%`}</div>
        <div className="todayScore__objective">
            <div>de votre</div>
            <div>objectif</div>
        </div>
      </div>
      <div className="todayScore__text-bg" />
    </div>
  );
};

export default TodayScore;

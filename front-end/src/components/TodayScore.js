import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const TodayScore = ({ score }) => {
  const data = [
    { name: "score", value: score },
    { name: "remaining", value: 1 - score },
  ];

  return (
    <div className="todayScore">
      <h2>Score</h2>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie 
            data={data} 
            innerRadius={70} 
            outerRadius={85} 
            startAngle={90}
            dataKey="value"
          >
            {data.map((entry, index) =>
              index === 0 ? (
                <Cell key={`cell-${index}`} cornerRadius={10} fill="#ff0000" />
              ) : (
                <Cell key={`cell-${entry}`} fill="#FBFBFB" />
              )
            )}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <div className="todayScore__text">
        <div className="todayScore__percentage">{`${(score * 100).toFixed(0)}%`}</div>
        <div className="todayScore__objective">
            <div>de votre</div>
            <div>objectif</div>
        </div>
      </div>
    </div>
  );
};

export default TodayScore;

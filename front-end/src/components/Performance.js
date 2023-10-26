import React from "react";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis } from 'recharts';

const translations = {
    cardio: "Cardio",
    energy: "Énergie",
    endurance: "Endurance",
    strength: "Force",
    speed: "Vitesse",
    intensity: "Intensité"
  };
  
  function translate(key) {
    return translations[key] || key;
  }


function Performance ({ data }) {
    const dataForRadarChart = data.data.map(item => ({
        subject: translate(data.kind[item.kind]),
        value: item.value
    }));
  
    return (
      <div className="performance">  
        <RadarChart cx={150} cy={100} outerRadius={75} width={300} height={200} data={dataForRadarChart}>
            <PolarGrid />
            <PolarAngleAxis dataKey="subject" />
            <Radar name="Performance" dataKey="value" stroke="#FF0101" fill="#FF0101" fillOpacity={0.7} />
        </RadarChart>
      </div>
    );
  }

  export default Performance;
  

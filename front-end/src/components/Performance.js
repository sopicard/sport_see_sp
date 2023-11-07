import React from "react";
import { ResponsiveContainer, Radar, RadarChart, PolarGrid, PolarAngleAxis } from 'recharts';

const translations = {
  1: "Intensité",
  2: "Vitesse",
  3: "Force",
  4: "Endurance",
  5: "Énergie",
  6: "Cardio",
};

function Performance ({ data }) {

    // Traduction et tri des données
    const dataForRadarChart = data.data
      .map((item) => ({
        ...item,
        kind: translations[item.kind],
      }))
      .sort((a, b) => {
        const order = ["Intensité", "Vitesse", "Force", "Endurance", "Énergie", "Cardio"];
        return order.indexOf(a.kind) - order.indexOf(b.kind);
      })
      .map(item => ({ // Reformatage des données pour le graphique
        subject: item.kind,
        value: item.value,
      }));
  
    return (
      <div className="performance">  
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart cx="50%" cy="50%" outerRadius="65%" data={dataForRadarChart}>
              <PolarGrid />
              <PolarAngleAxis dataKey="subject" tick={{ fontSize: 12 }}/>
              <Radar name="Performance" dataKey="value" stroke="#FF0101" fill="#FF0101" fillOpacity={0.7} />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    );
}

export default Performance;

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavTop from "./components/NavTop";
import NavLeft from "./components/NavLeft";
import Header from "./components/Header";
import KeyData from "./components/KeyData";
import iconFire from "./assets/icons/iconFire.svg";
import iconProtein from "./assets/icons/iconProtein.svg";
import iconCarbs from "./assets/icons/iconCarbs.svg";
import iconFats from "./assets/icons/iconFats.svg";
import DailyActivity from "./components/DailyActivity";
import AverageSessions from "./components/AverageSessions";
import Performance from "./components/Performance";
import { getUserById, getActivityById, getAverageSessionsById, getPerformanceById } from "./services/apiServices";

function App() {
  const { id } = useParams();
  const [userData, setUserData] = useState(null);
  const [dailyActivity, setDailyActivity] = useState(null);
  const [averageSessions, setAverageSessions] = useState(null);
  const [performanceData, setPerformanceData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
        const data = await getUserById(id);
        setUserData(data);
    };

    const fetchDailyActivity = async () => {
        const activityData = await getActivityById(id);
        setDailyActivity(activityData);
    };

    const fetchAverageSessions = async () => {
        const sessionsData = await getAverageSessionsById(id);
        setAverageSessions(sessionsData);
    };

    const fetchPerformanceData = async () => {
        const perfData = await getPerformanceById(id);
        setPerformanceData(perfData);
    };

    fetchUserData();
    fetchDailyActivity();
    fetchAverageSessions();
    fetchPerformanceData();
}, [id]);
 

  return (
    <div className="main-container">
      <NavTop />
      <NavLeft />
      {userData && <Header firstName={userData.data.userInfos.firstName} />}
      {dailyActivity && <DailyActivity data={dailyActivity} />}
      {averageSessions && <AverageSessions data={averageSessions} />}
      {performanceData && <Performance data={performanceData} />}
      {userData && (
        <>
          <KeyData title="Calories" value={userData.data.keyData.calorieCount} icon={iconFire} />
          <KeyData title="Protéines" value={userData.data.keyData.proteinCount} icon={iconProtein} />
          <KeyData title="Glucides" value={userData.data.keyData.carbohydrateCount} icon={iconCarbs} />
          <KeyData title="Lipides" value={userData.data.keyData.lipidCount} icon={iconFats} />
        </>
      )}
    </div>
  );
}

export default App;

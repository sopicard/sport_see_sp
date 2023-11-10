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
import TodayScore from "./components/TodayScore";
import { getUserById, getActivityById, getAverageSessionsById, getPerformanceById } from "./services/apiServices";

function App() {
  const { id } = useParams();
  const [userData, setUserData] = useState(null);
  const [dailyActivity, setDailyActivity] = useState(null);
  const [averageSessions, setAverageSessions] = useState(null);
  const [performanceData, setPerformanceData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const useMock = process.env.REACT_APP_useMock === "true";

    const fetchUserData = async () => {
      try {
        const response = await getUserById(id, useMock);
        let userData = response.data;
      
        if (!("todayScore" in userData)) {
          // Utilise la valeur de "score" si "todayScore" n'est pas présent
          userData = { ...userData, todayScore: userData.score };
        }
        setUserData(userData);
      } catch (err) {
        setError(err.message);
      }
    };
    
    const fetchDailyActivity = async () => {
      try {
        const activityData = await getActivityById(id, useMock);       
        setDailyActivity(activityData);
      } catch (err) {
        setError(err.message);
      } 
    };

    const fetchAverageSessions = async () => {
      try {
        const sessionsData = await getAverageSessionsById(id, useMock);
        setAverageSessions(sessionsData);
      } catch (err) {
        setError(err.message);
      } 
    };

    const fetchPerformanceData = async () => {
      try {
        const perfData = await getPerformanceById(id, useMock);
        setPerformanceData(perfData);
      } catch (err) {
        setError(err.message);
      } 
    };

    fetchUserData();
    fetchDailyActivity();
    fetchAverageSessions();
    fetchPerformanceData();
}, [id]);
 
  return (
    <div className="main-container">
      {error ? (
        <div className="error-message">
          <p>Oups !...</p>
          <p>Il semble que les données ne puissent pas être chargées.</p>           
        </div>
      ) : (
        <>
          <NavTop />
          <NavLeft />
          {userData && <Header firstName={userData.userInfos.firstName} />}  
          <div className="graphics">
            {dailyActivity && <DailyActivity data={dailyActivity} />}
            <div className="squares">
              {averageSessions && <AverageSessions data={averageSessions} />}
              {performanceData && <Performance data={performanceData} />}
              {userData && <TodayScore score={userData.todayScore} />}
            </div>
          </div>
          {userData && (
            <div className="metrics">
              <KeyData title="Calories" value={userData.keyData.calorieCount} icon={iconFire} />
              <KeyData title="Protéines" value={userData.keyData.proteinCount} icon={iconProtein} />
              <KeyData title="Glucides" value={userData.keyData.carbohydrateCount} icon={iconCarbs} />
              <KeyData title="Lipides" value={userData.keyData.lipidCount} icon={iconFats} />
            </div>
          )}
        </>
      )}  
    </div>
  );
}  


export default App;

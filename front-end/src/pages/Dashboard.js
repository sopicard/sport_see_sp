import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import KeyDatasWrapper from "../components/KeyDatasWrapper";
import DailyActivity from "../components/DailyActivity";
import AverageSessions from "../components/AverageSessions";
import { getUserById, getActivityById, getAverageSessionsById } from "../services/apiServices"; // Ajoutez la nouvelle fonction API

const Dashboard = () => {
  const { id } = useParams();
  const [userData, setUserData] = useState(null);
  const [dailyActivity, setDailyActivity] = useState(null);
  const [averageSessions, setAverageSessions] = useState(null);

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

    fetchUserData();
    fetchDailyActivity();
    fetchAverageSessions();
  }, [id]);

  return (
    <div>
      {userData && (
        <>
          <Header firstName={userData.data.userInfos.firstName} />
          <KeyDatasWrapper keyData={userData.data.keyData} />
        </>
      )}
      {dailyActivity && <DailyActivity data={dailyActivity} />}
      {averageSessions && <AverageSessions data={averageSessions} />}
    </div>
  );
};

export default Dashboard;

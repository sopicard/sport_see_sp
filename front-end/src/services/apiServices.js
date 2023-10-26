const mockData = {
    data: {
        id: 12,
        userInfos: {
        firstName: "Karl",
        lastName: "Dovineau",
        age: 31
        },
        todayScore: 0.12,
        keyData: {
        calorieCount: 1930,
        proteinCount: 155,
        carbohydrateCount: 290,
        lipidCount: 50
        }
    }
  };

  export const getUserById = async (id, useMock = false) => {
    if (useMock) {
      return new Promise((resolve) => {
        resolve(mockData);
      });
    } else {
      const response = await fetch(`http://localhost:3000/user/${id}`);
      const data = await response.json();
      return data;
    }
  };

  export const getActivityById = async (id) => {
    const response = await fetch(`http://localhost:3000/user/${id}/activity`);
    const data = await response.json();
    return data.data.sessions;
  };

  export const getAverageSessionsById = async (id) => {
    const response = await fetch(`http://localhost:3000/user/${id}/average-sessions`);
    const data = await response.json();
    return data.data.sessions;
  };
  
  export const getPerformanceById = async (id) => {
    const response = await fetch(`http://localhost:3000/user/${id}/performance`);
    const data = await response.json();
    return data.data;
  };
  


  
  
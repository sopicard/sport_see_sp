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

  export const getUserById = async (id, useMock = true) => {
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

  export const getKeyDataById = async (id, useMock = true) => {
    if (useMock) {
      return new Promise((resolve) => {
        resolve({
          calorieCount: 1930,
          proteinCount: 155,
          carbohydrateCount: 290,
          lipidCount: 50,
        });
      });
    } else {
      const response = await fetch(`http://localhost:3000/user/${id}/key-data`);
      const data = await response.json();
      return data.keyData;
    }
  };
  
  
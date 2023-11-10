import mockData from "../mockData.json";

export const getUserById = async (id, useMock = false) => {
  if (useMock) {
    return { data: mockData.data[id] }; 
  } else {
    const response = await fetch(`http://localhost:3000/user/${id}`);
    const data = await response.json();
    return data; 
  }
};

export const getActivityById = async (id, useMock = false) => {
  if (useMock) {
    return  mockData.data[id].sessions;
  } else {
    const response = await fetch(`http://localhost:3000/user/${id}/activity`);
    const data = await response.json();
    return data.data.sessions;
  }
};

export const getAverageSessionsById = async (id, useMock = false) => {
  if (useMock) {
    return mockData.data[id].averageSessions;
  } else {
    const response = await fetch(`http://localhost:3000/user/${id}/average-sessions`);
    const data = await response.json();
    return data.data.sessions;
  }
};

export const getPerformanceById = async (id, useMock = false) => {
  if (useMock) {
    return mockData.data[id].performance;
  } else {
    const response = await fetch(`http://localhost:3000/user/${id}/performance`);
    const data = await response.json();
    return data.data;
  }
};
  


  
  
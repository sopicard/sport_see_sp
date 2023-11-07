
export const getUserById = async (id, useMock = false) => {
  if (useMock) {
    const mockData = JSON.parse(process.env.REACT_APP_MOCK_USER_DATA);
    return { data: mockData }; 
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
  


  
  
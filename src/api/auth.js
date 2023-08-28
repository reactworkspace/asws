import api from './api';

const authenticateUser = async (userName, userPassword) => {
  try {
    const response = await api.post('/authenticate', {
      userName,
      userPassword
    });

    const token = response.data.token; // Assuming the JWT is returned as 'token'
    // Store the token in local storage or state for later use
    localStorage.setItem('authToken', token);

    return token;
  } catch (error) {
    throw new Error('Authentication failed');
  }
};

export { authenticateUser };

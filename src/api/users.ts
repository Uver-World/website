import axios, { AxiosResponse} from 'axios';

const API_URL = 'http://localhost:8080';
const TOKEN = 'qFcO6cNYJxSfS8SsHiE2HY5aKlSVUjs3';

export const registerUser = async (email: string, password: string): Promise<AxiosResponse> => {
  try {
    const response = await axios.post(
      `${API_URL}/user/register`,
      {
        Credentials: {
          email,
          password
        }
      },
      {
        headers: {
          'X-User-Token': TOKEN
        }
      }
    );
    return response;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('AxiosError:', error.message);
      console.error('Response data:', error.response?.data);
    } else {
      console.error('Error:', (error as Error).message);
    }
    throw error;
  }
};

export const renewToken = async (email: string, password: string): Promise<AxiosResponse> => {
  try {
    const response = await axios.post(
      `${API_URL}/user/renew`,
      {
        Credentials: {
          email,
          password
        }
      },
      {
        headers: {
          'X-User-Token': TOKEN
        }
      }
    );
    return response;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('AxiosError:', error.message);
      console.error('Response data:', error.response?.data);
    } else {
      console.error('Error:', (error as Error).message);
    }
    throw error;
  }
};

export const loginWithToken = async (token: string): Promise<AxiosResponse> => {
  try {
    const response = await axios.get(
      `${API_URL}/user/token/${token}`,
      {
        headers: {
          'X-User-Token': TOKEN
        }
      }
    );
    return response;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('AxiosError:', error.message);
      console.error('Response data:', error.response?.data);
    } else {
      console.error('Error:', (error as Error).message);
    }
    throw error;
  }
};

export const loginWithID = async (id: string): Promise<AxiosResponse> => {
  try {
    const response = await axios.get(
      `${API_URL}/user/id/${id}`,
      {
        headers: {
          'X-User-Token': TOKEN
        }
      }
    );
    return response;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('AxiosError:', error.message);
      console.error('Response data:', error.response?.data);
    } else {
      console.error('Error:', (error as Error).message);
    }
    throw error;
  }
};

export const checkUserExists = async (email: string): Promise<AxiosResponse> => {
  try {
    const response = await axios.get(
      `${API_URL}/user/email_exists/${email}`,
      {
        headers: {
          'X-User-Token': TOKEN
        }
      }
    );
    console.log(response)
    return response;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('AxiosError:', error.message);
      console.error('Response data:', error.response?.data);
    } else {
      console.error('Error:', (error as Error).message);
    }
    throw error;
  }
};

export const deleteWithToken = async (token: string): Promise<AxiosResponse> => {
  try {
    const response = await axios.delete(
      `${API_URL}/user/delete/${token}`,
      {
        headers: {
          'X-User-Token': TOKEN
        }
      }
    );
    return response;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('AxiosError:', error.message);
      console.error('Response data:', error.response?.data);
    } else {
      console.error('Error:', (error as Error).message);
    }
    throw error;
  }
};

export const deleteWithID = async (id: string): Promise<AxiosResponse> => {
  try {
    const response = await axios.delete(
      `${API_URL}/user/id/${id}`,
      {
        headers: {
          'X-User-Token': TOKEN
        }
      }
    );
    return response;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('AxiosError:', error.message);
      console.error('Response data:', error.response?.data);
    } else {
      console.error('Error:', (error as Error).message);
    }
    throw error;
  }
};

export const patchWithToken = async (token: string, newUsername: string): Promise<AxiosResponse> => {
  try {
    const response = await axios.patch(
      `${API_URL}/user/token/${token}`,
      [
        {
          Username: newUsername
        }
      ],
      {
        headers: {
          'X-User-Token': TOKEN
        }
      }
    );
    return response;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('AxiosError:', error.message);
      console.error('Response data:', error.response?.data);
    } else {
      console.error('Error:', (error as Error).message);
    }
    throw error;
  }
};

export const getOrganizations = async (id: string, token: string): Promise<AxiosResponse> => {
  try {
    const response = await axios.get(
      `${API_URL}/user/id/${id}/organizations`,
      {
        headers: {
          'X-User-Token': token
        }
      }
    );
    return response;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('AxiosError:', error.message);
      console.error('Response data:', error.response?.data);
    } else {
      console.error('Error:', (error as Error).message);
    }
    throw error;
  }
};
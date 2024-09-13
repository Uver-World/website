import axios, { AxiosResponse } from "axios";

const API_URL = process.env.REACT_APP_API_URL;
const TOKEN = process.env.REACT_APP_API_TOKEN;

export const registerUser = async (
  email: string,
  password: string,
  username: string
): Promise<AxiosResponse> => {
  try {
    const response = await axios.post(
      `${API_URL}/user`,
      {
        Credentials: {
          email,
          username,
          password,
        },
      },
      {
        headers: {
          "X-User-Token": TOKEN,
        },
      }
    );
    return response;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("AxiosError:", error.message);
      console.error("Response data:", error.response?.data);
    } else {
      console.error("Error:", (error as Error).message);
    }
    throw error;
  }
};

export const renewToken = async (
  email: string,
  password: string
): Promise<AxiosResponse> => {
  try {
    const username = "jacques";
    const response = await axios.post(
      `${API_URL}/user/renew`,
      {
        Credentials: {
          email,
          username,
          password,
        },
      },
      {
        headers: {
          "X-User-Token": TOKEN,
        },
      }
    );
    return response;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("AxiosError:", error.message);
      console.error("Response data:", error.response?.data);
    } else {
      console.error("Error:", (error as Error).message);
    }
    throw error;
  }
};

export const loginWithToken = async (token: string): Promise<AxiosResponse> => {
  try {
    const response = await axios.get(`${API_URL}/user/${token}`, {
      headers: {
        "X-User-Token": TOKEN,
      },
    });
    return response;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("AxiosError:", error.message);
      console.error("Response data:", error.response?.data);
    } else {
      console.error("Error:", (error as Error).message);
    }
    throw error;
  }
};

export const loginWithID = async (id: string): Promise<AxiosResponse> => {
  try {
    const response = await axios.get(`${API_URL}/user/${id}`, {
      headers: {
        "X-User-Token": TOKEN,
      },
    });
    return response;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("AxiosError:", error.message);
      console.error("Response data:", error.response?.data);
    } else {
      console.error("Error:", (error as Error).message);
    }
    throw error;
  }
};

export const checkUserExists = async (
  email: string
): Promise<AxiosResponse> => {
  try {
    const response = await axios.get(`${API_URL}/user/email_exists/${email}`, {
      headers: {
        "X-User-Token": TOKEN,
      },
    });
    return response;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("AxiosError:", error.message);
      console.error("Response data:", error.response?.data);
    } else {
      console.error("Error:", (error as Error).message);
    }
    throw error;
  }
};

export const deleteWithToken = async (
  token: string
): Promise<AxiosResponse> => {
  try {
    const response = await axios.delete(`${API_URL}/user/delete/${token}`, {
      headers: {
        "X-User-Token": TOKEN,
      },
    });
    return response;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("AxiosError:", error.message);
      console.error("Response data:", error.response?.data);
    } else {
      console.error("Error:", (error as Error).message);
    }
    throw error;
  }
};

export const deleteWithID = async (id: string): Promise<AxiosResponse> => {
  try {
    const response = await axios.delete(`${API_URL}/user/id/${id}`, {
      headers: {
        "X-User-Token": TOKEN,
      },
    });
    return response;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("AxiosError:", error.message);
      console.error("Response data:", error.response?.data);
    } else {
      console.error("Error:", (error as Error).message);
    }
    throw error;
  }
};

export const patchWithToken = async (
  token: string,
  newUsername: string
): Promise<AxiosResponse> => {
  try {
    const response = await axios.patch(
      `${API_URL}/user/token/${token}`,
      [
        {
          Username: newUsername,
        },
      ],
      {
        headers: {
          "X-User-Token": TOKEN,
        },
      }
    );
    return response;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("AxiosError:", error.message);
      console.error("Response data:", error.response?.data);
    } else {
      console.error("Error:", (error as Error).message);
    }
    throw error;
  }
};

export const getOrganizations = async (
  id: string,
  token: string
): Promise<AxiosResponse> => {
  try {
    const response = await axios.get(`${API_URL}/user/id/${id}/organizations`, {
      headers: {
        "X-User-Token": token,
      },
    });
    return response;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("AxiosError:", error.message);
      console.error("Response data:", error.response?.data);
    } else {
      console.error("Error:", (error as Error).message);
    }
    throw error;
  }
};

export const getLicenses = async (id: string): Promise<AxiosResponse> => {
  try {
    const response = await axios.get(`${API_URL}/user/id/${id}/license`, {
      headers: {
        "X-User-Token": TOKEN,
      },
    });
    return response;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("AxiosError:", error.message);
      console.error("Response data:", error.response?.data);
    } else {
      console.error("Error:", (error as Error).message);
    }
    throw error;
  }
};

export const getWithEmail = async (email: string): Promise<AxiosResponse> => {
  try {
    const response = await axios.get(`${API_URL}/user/email/${email}`, {
      headers: {
        "X-User-Token": TOKEN,
      },
    });
    return response;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("AxiosError:", error.message);
      console.error("Response data:", error.response?.data);
    } else {
      console.error("Error:", (error as Error).message);
    }
    throw error;
  }
};

export const createLicense = async (id: string): Promise<AxiosResponse> => {
  try {
    const response = await axios.post(
      `${API_URL}/user/${id}/license`,
      {},
      {
        headers: {
          "X-User-Token": TOKEN,
        },
      }
    );
    return response;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("AxiosError:", error.message);
      console.error("Response data:", error.response?.data);
    } else {
      console.error("Error:", (error as Error).message);
    }
    throw error;
  }
};

export const updateUsername = async (
  token: string,
  newUsername: string
): Promise<AxiosResponse> => {
  try {
    const response = await axios.patch(
      `${API_URL}/user/token/${token}`,
      [
        {
          Username: newUsername,
        },
      ],
      {
        headers: {
          "X-User-Token": TOKEN,
        },
      }
    );
    return response;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("AxiosError:", error.message);
      console.error("Response data:", error.response?.data);
    } else {
      console.error("Error:", (error as Error).message);
    }
    throw error;
  }
};

export const verifyPermission = async (
  userId: string,
  permissionName: string,
  token: string
): Promise<AxiosResponse> => {
  try {
    const response = await axios.get(
      `${API_URL}/user/check-permission/${userId}/permissions/${permissionName}`,
      {
        headers: {
          "X-User-Token": token,
        },
      }
    );
    return response;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("AxiosError:", error.message);
      console.error("Response data:", error.response?.data);
    } else {
      console.error("Error:", (error as Error).message);
    }
    throw error;
  }
};

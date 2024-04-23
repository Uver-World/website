import axios, { AxiosResponse } from 'axios';

const API_URL = process.env.REACT_APP_API_URL;
const TOKEN = process.env.REACT_APP_API_TOKEN;

interface PatchRequestBody {
    Name?: string;
    OwnerId?: string;
}

export const createOrganisation = async (name: string, owner_id: string): Promise<AxiosResponse> => {
    try {
        const response = await axios.post(
            `${API_URL}/organization/`,
            {
                name: name,
                owner_id: owner_id
            },
            {
                headers: {
                    'X-User-Token': TOKEN
                }
            }
        );
        console.log(response);
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

export const getWithID = async (id: string): Promise<AxiosResponse> => {
    console.log(id);
    try {
        const response = await axios.get(
            `${API_URL}/organization/${id}`,
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
            `${API_URL}/organization/${id}`,
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

export const updateOrganization = async (id: string, requestBody: PatchRequestBody): Promise<AxiosResponse> => {
    try {
        const response = await axios.patch(
            `${API_URL}/organization/${id}`,
            [requestBody],
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

export const addUserToOrganization = async (id: string, member_id: string): Promise<AxiosResponse> => {
    try {
        const response = await axios.post(
            `${API_URL}/organization/${id}/members`,
            {
                member_id: member_id
            },
            {
                headers: {
                    'X-User-Token': TOKEN
                }
            }
        );
        console.log(response);
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
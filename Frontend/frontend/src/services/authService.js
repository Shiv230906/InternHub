import API from "../api/axios";

export const registerUser = async (userData) => {
    const response = await API.post("users/register/", userData);
    return response.data;
};

export const loginUser = async (userData) => {
    const response = await API.post("users/login/", userData);
    return response.data;
};
import API from "../api/axios";

export const getInternships = async () => {
    const response = await API.get("internships/");
    return response.data;
};
import API from "../api/axios";

export const getInternships = async () => {
    const response = await API.get("internships/");
    return response.data;
};

export const createInternship = async (internshipData) => {
    const response = await API.post("internships/", internshipData);
    return response.data;
};

export const getInternshipById = async (id) => {
    const response = await API.get(`internships/${id}/`);
    return response.data;
};

export const updateInternship = async (id, internshipData) => {
    const response = await API.put(`internships/${id}/`, internshipData);
    return response.data;
};
export const deleteInternship = async (id) => {
    const response = await API.delete(`internships/${id}/`);
    return response.data;
};
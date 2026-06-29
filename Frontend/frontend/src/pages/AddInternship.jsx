import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createInternship } from "../services/internshipService";
import "../styles/addInternship.css";
function AddInternship() {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        company_name: "",
        role: "",
        location: "",
        salary: "",
        application_date: "",
        deadline: "",
        status: "Applied",
        job_link: "",
        notes: "",
        resume_name: ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await createInternship(formData);

            alert("Internship Added Successfully!");

            navigate("/dashboard");

        } 
        catch (error) {
            console.log(error);
            alert("Failed to add internship.");
        }
        };

    return (
        <div style={{ padding: "30px" }}>

            <h1>Add Internship</h1>

            <form onSubmit={handleSubmit}>

                <input
                    type="text"
                    name="company_name"
                    placeholder="Company Name"
                    onChange={handleChange}
                />

                <br /><br />

                <input
                    type="text"
                    name="role"
                    placeholder="Role"
                    onChange={handleChange}
                />

                <br /><br />

                <input
                    type="text"
                    name="location"
                    placeholder="Location"
                    onChange={handleChange}
                />

                <br /><br />

                <input
                    type="number"
                    name="salary"
                    placeholder="Salary"
                    onChange={handleChange}
                />

                <br /><br />

                <input
                    type="date"
                    name="application_date"
                    onChange={handleChange}
                />

                <br /><br />

                <input
                    type="date"
                    name="deadline"
                    onChange={handleChange}
                />

                <br /><br />

                <select
                    name="status"
                    onChange={handleChange}
                >
                    <option>Applied</option>
                    <option>Interview</option>
                    <option>Selected</option>
                    <option>Rejected</option>
                </select>

                <br /><br />

                <input
                    type="text"
                    name="job_link"
                    placeholder="Job Link"
                    onChange={handleChange}
                />

                <br /><br />

                <textarea
                    name="notes"
                    placeholder="Notes"
                    onChange={handleChange}
                />

                <br /><br />

                <input
                    type="text"
                    name="resume_name"
                    placeholder="Resume Name"
                    onChange={handleChange}
                />

                <br /><br />

                <button type="submit">
                    Save Internship
                </button>

            </form>

        </div>
    );
}

export default AddInternship;
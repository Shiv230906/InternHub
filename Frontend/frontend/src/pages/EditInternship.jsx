import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  getInternshipById,
  updateInternship,
} from "../services/internshipService";

function EditInternship() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    company_name: "",
    role: "",
    location: "",
    salary: "",
    application_date: "",
    deadline: "",
    status: "",
    job_link: "",
    notes: "",
    resume_name: "",
  });

  useEffect(() => {
    fetchInternship();
  }, []);

  const fetchInternship = async () => {
    try {
      const data = await getInternshipById(id);
      setFormData(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await updateInternship(id, formData);
      alert("Internship Updated Successfully!");
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
      alert("Update Failed!");
    }
  };

  return (
    <div style={{ padding: "30px" }}>
      <h1>Edit Internship</h1>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="company_name"
          value={formData.company_name}
          onChange={handleChange}
          placeholder="Company Name"
        />

        <br /><br />

        <input
          type="text"
          name="role"
          value={formData.role}
          onChange={handleChange}
          placeholder="Role"
        />

        <br /><br />

        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
          placeholder="Location"
        />

        <br /><br />

        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
        >
          <option value="Applied">Applied</option>
          <option value="Interview">Interview</option>
          <option value="Selected">Selected</option>
          <option value="Rejected">Rejected</option>
        </select>

        <br /><br />

        <button type="submit">
          Update Internship
        </button>

      </form>
    </div>
  );
}

export default EditInternship;
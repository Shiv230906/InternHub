import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getInternships } from "../services/internshipService";
import {
    deleteInternship
} from "../services/internshipService";

function Dashboard() {

    const navigate = useNavigate();

    const [internships, setInternships] = useState([]);

    useEffect(() => {
        fetchInternships();
    }, []);

    const fetchInternships = async () => {
        try {
          const data = await getInternships();
          console.log("Internships:", data);
          setInternships(data);
        } catch (error) {
            console.log(error);
        }
    };

    const handleLogout = () => {
        localStorage.removeItem("access");
        localStorage.removeItem("refresh");
        navigate("/");
    };
    const handleDelete = async (id) => {

    const confirmDelete = window.confirm(
        "Are you sure you want to delete this internship?"
    );

    if (!confirmDelete) return;

    try {

        await deleteInternship(id);

        alert("Internship Deleted!");

        fetchInternships();

    } catch (error) {

        console.log(error);

        alert("Delete Failed");

    }

};

    return (
        <div style={{ padding: "30px" }}>

            <h1>InternHub Dashboard</h1>

            <button onClick={handleLogout}>
                Logout
            </button>

            <hr />
            <button onClick={() => navigate("/add")}>
            Add Internship
            </button>

            <hr />
            <h2>My Internships</h2>

            {internships.length === 0 ? (
                <p>No internships found.</p>
            ) : (
                internships.map((internship) => (
                    <div
                        key={internship.id}
                        style={{
                            border: "1px solid black",
                            padding: "10px",
                            marginBottom: "10px",
                        }}
                    >
                        <h3>{internship.company_name}</h3>
                        <p>Role: {internship.role}</p>
                        <p>Status: {internship.status}</p>
                        <p>Location: {internship.location}</p>
                        <button onClick={() => navigate(`/edit/${internship.id}`)}>
                            Edit
                        </button>
                        <button onClick={() => handleDelete(internship.id)}>
                            Delete
                        </button>
                    </div>
                ))
            )}

        </div>
    );
}

export default Dashboard;
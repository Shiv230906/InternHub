import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getInternships } from "../services/internshipService";
import {
    deleteInternship
} from "../services/internshipService";
import "../styles/dashboard.css";

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
    <div className="dashboard">

        <header className="dashboard-header">

            <div>
                <h1>InternHub</h1>
                <p>Manage all your internship applications</p>
            </div>

            <div className="top-buttons">
                <button
                    className="add-btn"
                    onClick={() => navigate("/add")}
                >
                    + Add Internship
                </button>

                <button
                    className="logout-btn"
                    onClick={handleLogout}
                >
                    Logout
                </button>
            </div>

        </header>

        <h2 className="section-title">My Internships</h2>

        {internships.length === 0 ? (

            <div className="empty-card">
                No internships found.
            </div>

        ) : (

            internships.map((internship) => (

                <div
                    className="internship-card"
                    key={internship.id}
                >

                    <div className="card-left">

                        <h3>{internship.company_name}</h3>

                        <p><strong>Role</strong> • {internship.role}</p>

                        <p><strong>Location</strong> • {internship.location}</p>

                        <span className="status">
                            {internship.status}
                        </span>

                    </div>

                    <div className="card-right">

                        <button
                            className="edit-btn"
                            onClick={() =>
                                navigate(`/edit/${internship.id}`)
                            }
                        >
                            Edit
                        </button>

                        <button
                            className="delete-btn"
                            onClick={() =>
                                handleDelete(internship.id)
                            }
                        >
                            Delete
                        </button>

                    </div>

                </div>

            ))

        )}

    </div>
);
}

export default Dashboard;
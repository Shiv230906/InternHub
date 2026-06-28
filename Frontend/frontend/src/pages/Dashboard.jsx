import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getInternships } from "../services/internshipService";

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

    return (
        <div style={{ padding: "30px" }}>

            <h1>InternHub Dashboard</h1>

            <button onClick={handleLogout}>
                Logout
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
                    </div>
                ))
            )}

        </div>
    );
}

export default Dashboard;
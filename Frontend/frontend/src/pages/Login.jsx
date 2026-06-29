import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { loginUser } from "../services/authService";
import "../styles/Login.css";

function Login() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        username: "",
        password: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const data = await loginUser(formData);

            localStorage.setItem("access", data.access);
            localStorage.setItem("refresh", data.refresh);

            alert("Login Successful!");

            navigate("/dashboard");
        } catch (error) {
            alert("Invalid Username or Password");
        }
    };

    return (
        <div className="login-page">

            <div className="circle circle1"></div>
            <div className="circle circle2"></div>

            <div className="login-card">

                <h1>InternHub</h1>
                <p>Track your internship journey effortlessly.</p>

                <form onSubmit={handleSubmit}>

                    <input
                        type="text"
                        name="username"
                        placeholder="Username"
                        value={formData.username}
                        onChange={handleChange}
                    />

                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                    />

                    <button type="submit">
                        Login
                    </button>

                </form>

                <div className="register">
                    <Link to="/register">
                        Don't have an account? Register
                    </Link>
                </div>

            </div>

        </div>
    );
}

export default Login;
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../services/authService";
import "../styles/register.css";

function Register() {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const handleChange = (e) => {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            alert("Passwords do not match.");
            return;
        }

        try {

            await registerUser({
                username: formData.username,
                email: formData.email,
                password: formData.password,
            });

            alert("Registration Successful!");

            navigate("/");

        } catch (error) {

            console.log(error);

            alert("Registration Failed");

        }

    };

    return (

        <div className="register-page">

            <div className="circle circle1"></div>
            <div className="circle circle2"></div>

            <div className="register-card">

                <h1>Create Account</h1>

                <p>Join InternHub and track your internship journey.</p>

                <form onSubmit={handleSubmit}>

                    <input
                        type="text"
                        name="username"
                        placeholder="Username"
                        value={formData.username}
                        onChange={handleChange}
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={handleChange}
                    />

                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                    />

                    <input
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                    />

                    <button type="submit">
                        Create Account
                    </button>

                </form>

                <div className="login-link">

                    <Link to="/">
                        Already have an account? Login
                    </Link>

                </div>

            </div>

        </div>

    );

}

export default Register;
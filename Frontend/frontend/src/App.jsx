import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import AddInternship from "./pages/AddInternship";
import EditInternship from "./pages/EditInternship";
function App() {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/add" element={
                <ProtectedRoute>
                    <AddInternship />
                </ProtectedRoute>
            } />

            <Route
                path="/dashboard"
                element={
                    <ProtectedRoute>
                        <Dashboard />
                    </ProtectedRoute>
                }
            />
            <Route
              path="/edit/:id"
              element={
              <ProtectedRoute>
                <EditInternship />
              </ProtectedRoute>
              }
            />
        </Routes>
    );
}

export default App;
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
  <div className="container">
    <h1>Authentication System</h1>

    <h2>Welcome Mahesh 🚀</h2>

    <p>✅ User Registration Working</p>
    <p>✅ Login Authentication Working</p>
    <p>✅ JWT Token Generated</p>
    <p>✅ Protected Routes Enabled</p>

    <button onClick={logout}>
      Logout
    </button>
  </div>
);

}

export default Dashboard;
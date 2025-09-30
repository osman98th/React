import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import Footer from "../../components/Footer";

const ManageUser = () => {
  const [activeTab, setActiveTab] = useState("login");
  const [message, setMessage] = useState("");
  const [loginData, setLoginData] = useState({ email: "", password: "", rememberMe: false });
  const [registerData, setRegisterData] = useState({ fullName: "", email: "", password: "", confirmPassword: "" });
  const [loggedInUser, setLoggedInUser] = useState(null);

  // Auto login if remembered
  useEffect(() => {
    const remembered = JSON.parse(localStorage.getItem("rememberedUser"));
    if (remembered) setLoggedInUser(remembered);
  }, []);

  // Handle login input
  const handleLoginChange = (e) => {
    const { name, value, type, checked } = e.target;
    setLoginData({ ...loginData, [name]: type === "checkbox" ? checked : value });
  };

  // Handle register input
  const handleRegisterChange = (e) => {
    const { name, value } = e.target;
    setRegisterData({ ...registerData, [name]: value });
  };

  // Register submit
  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    const { fullName, email, password, confirmPassword } = registerData;
    if (!fullName || !email || !password || !confirmPassword) return setMessage("Fill all fields!");
    if (password !== confirmPassword) return setMessage("Passwords do not match!");

    const users = JSON.parse(localStorage.getItem("users") || "[]");
    if (users.find(u => u.email === email)) return setMessage("User already exists!");

    users.push({ fullName, email, password });
    localStorage.setItem("users", JSON.stringify(users));
    setMessage("✅ Registration successful!");
    setRegisterData({ fullName: "", email: "", password: "", confirmPassword: "" });
  };

  // Login submit
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const user = users.find(u => u.email === loginData.email && u.password === loginData.password);
    if (!user) return setMessage("❌ Invalid credentials!");

    setLoggedInUser(user);
    setMessage(`✅ Welcome, ${user.fullName}!`);
    if (loginData.rememberMe) localStorage.setItem("rememberedUser", JSON.stringify(user));
    else localStorage.removeItem("rememberedUser");
    setLoginData({ email: "", password: "", rememberMe: false });
  };

  const handleLogout = () => {
    setLoggedInUser(null);
    localStorage.removeItem("rememberedUser");
    setMessage("Logged out successfully.");
  };

  return (
    <div>
      <div className="wrapper">
        <Navbar />
        <Sidebar />
        <div className="content-wrapper">
          <section className="content-header">
            <div className="container-fluid"><h1>User Authentication</h1></div>
          </section>

          <section className="content">
            <div className="card">
              {!loggedInUser && (
                <>
                  <div className="card-header d-flex justify-content-between">
                    <button className={`btn btn-sm ${activeTab === "login" ? "btn-primary" : "btn-outline-primary"}`} onClick={() => setActiveTab("login")}>Login</button>
                    <button className={`btn btn-sm ${activeTab === "register" ? "btn-success" : "btn-outline-success"}`} onClick={() => setActiveTab("register")}>Register</button>
                  </div>

                  <div className="card-body">
                    {activeTab === "login" && (
                      <form onSubmit={handleLoginSubmit}>
                        <div className="form-group">
                          <label>Email</label>
                          <input type="email" name="email" value={loginData.email} onChange={handleLoginChange} className="form-control" placeholder="Enter email" />
                        </div>
                        <div className="form-group">
                          <label>Password</label>
                          <input type="password" name="password" value={loginData.password} onChange={handleLoginChange} className="form-control" placeholder="Password" />
                        </div>
                        <div className="form-check mb-3">
                          <input type="checkbox" name="rememberMe" checked={loginData.rememberMe} onChange={handleLoginChange} className="form-check-input" id="rememberMe" />
                          <label htmlFor="rememberMe" className="form-check-label">Remember  Me</label>
                        </div>
                        <button type="submit" className="btn btn-primary btn-block">Login</button>
                      </form>
                    )}

                    {activeTab === "register" && (
                      <form onSubmit={handleRegisterSubmit}>
                        <div className="form-group">
                          <label>Full Name</label>
                          <input type="text" name="fullName" value={registerData.fullName} onChange={handleRegisterChange} className="form-control" placeholder="Enter full name" />
                        </div>
                        <div className="form-group">
                          <label>Email</label>
                          <input type="email" name="email" value={registerData.email} onChange={handleRegisterChange} className="form-control" placeholder="Enter email" />
                        </div>
                        <div className="form-group">
                          <label>Password</label>
                          <input type="password" name="password" value={registerData.password} onChange={handleRegisterChange} className="form-control" placeholder="Password" />
                        </div>
                        <div className="form-group">
                          <label>Confirm Password</label>
                          <input type="password" name="confirmPassword" value={registerData.confirmPassword} onChange={handleRegisterChange} className="form-control" placeholder="Confirm Password" />
                        </div>
                        <button type="submit" className="btn btn-success btn-block">Register</button>
                      </form>
                    )}
                  </div>
                </>
              )}

              {loggedInUser && (
                <div className="card-body text-center">
                  <h3>Welcome, {loggedInUser.fullName}!</h3>
                  <p>Email: {loggedInUser.email}</p>
                  <button className="btn btn-danger mt-3" onClick={handleLogout}>Logout</button>
                </div>
              )}

              {message && <p className="mt-3 text-center">{message}</p>}
            </div>
          </section>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default ManageUser;

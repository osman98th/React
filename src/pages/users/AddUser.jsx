import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import Footer from "../../components/Footer";

const AddUser = () => {
  const [activeTab, setActiveTab] = useState("login");

  return (
    <div>
      <div className="wrapper">
        {/* Navbar */}
        <Navbar />
        {/* Sidebar */}
        <Sidebar />

        {/* Content Wrapper */}
        <div className="content-wrapper">
          {/* Page Header */}
          <section className="content-header">
            <div className="container-fluid">
              <div className="row mb-2">
                <div className="col-sm-6">
                  <h1>User Authentication</h1>
                </div>
              </div>
            </div>
          </section>

          {/* Main Content */}
          <section className="content">
            <div className="card">
              <div className="card-header d-flex justify-content-between">
                <button
                  className={`btn btn-sm ${
                    activeTab === "login" ? "btn-primary" : "btn-outline-primary"
                  }`}
                  onClick={() => setActiveTab("login")}
                >
                  Login
                </button>
                <button
                  className={`btn btn-sm ${
                    activeTab === "register"
                      ? "btn-success"
                      : "btn-outline-success"
                  }`}
                  onClick={() => setActiveTab("register")}
                >
                  Register
                </button>
              </div>

              <div className="card-body">
                {activeTab === "login" && (
                  <form>
                    <div className="form-group">
                      <label>Email address</label>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Enter email"
                      />
                    </div>
                    <div className="form-group">
                      <label>Password</label>
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Password"
                      />
                    </div>
                    <div className="form-check mb-3">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="rememberMe"
                      />
                      <label className="form-check-label" htmlFor="rememberMe">
                        Remember Me
                      </label>
                    </div>
                    <button type="submit" className="btn btn-primary btn-block">
                      Login
                    </button>
                  </form>
                )}

                {activeTab === "register" && (
                  <form>
                    <div className="form-group">
                      <label>Full Name</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter full name"
                      />
                    </div>
                    <div className="form-group">
                      <label>Email address</label>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Enter email"
                      />
                    </div>
                    <div className="form-group">
                      <label>Password</label>
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Password"
                      />
                    </div>
                    <div className="form-group">
                      <label>Confirm Password</label>
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Confirm Password"
                      />
                    </div>
                    <div className="form-group">
                      <label>Upload Profile Picture</label>
                      <input type="file" className="form-control-file" />
                    </div>
                    <button
                      type="submit"
                      className="btn btn-success btn-block"
                    >
                      Register
                    </button>
                  </form>
                )}
              </div>
            </div>
          </section>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default AddUser;

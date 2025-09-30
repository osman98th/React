import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import Footer from "../../components/Footer";

const AddRoom = () => {
  const [activeTab, setActiveTab] = useState("room");

  // --- Room Form State ---
  const [roomData, setRoomData] = useState({
    roomName: "",
    bedCount: "",
    foodBill: "",
    note: "",
  });

  // --- Login Form State ---
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  // --- Handlers ---
  const handleRoomChange = (e) => {
    setRoomData({ ...roomData, [e.target.name]: e.target.value });
  };

  const handleRoomSubmit = (e) => {
    e.preventDefault();
    console.log("Room Added:", roomData);
    setRoomData({ roomName: "", bedCount: "", foodBill: "", note: "" });
  };

  const handleLoginChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log("Login Data:", loginData);
  };

  return (
    <div className="wrapper">
      <Navbar />
      <Sidebar />

      <div className="content-wrapper p-3">
        {/* Tabs */}
        <div className="mb-3">
          <button
            className={`btn btn-${activeTab === "room" ? "primary" : "secondary"} me-2`}
            onClick={() => setActiveTab("room")}
          >
            Add Room
          </button>
          <button
            className={`btn btn-${activeTab === "login" ? "primary" : "secondary"}`}
            onClick={() => setActiveTab("login")}
          >
            Login
          </button>
        </div>

        {/* Tab Contents */}
        {activeTab === "room" && (
          <div className="card p-3">
            <h4>Add Student Room</h4>
            <form onSubmit={handleRoomSubmit}>
              <div className="form-group mb-2">
                <label>Room Name</label>
                <select
                  className="form-control"
                  name="roomName"
                  value={roomData.roomName}
                  onChange={handleRoomChange}
                  required
                >
                  <option value="">-- Select Room --</option>
                  <option value="Room A">Room A</option>
                  <option value="Room B">Room B</option>
                  <option value="Room C">Room C</option>
                  <option value="Room D">Room D</option>
                </select>
              </div>

              <div className="form-group mb-2">
                <label>Number of Beds</label>
                <input
                  type="number"
                  className="form-control"
                  name="bedCount"
                  value={roomData.bedCount}
                  onChange={handleRoomChange}
                  placeholder="Enter Bed Count"
                  min="1"
                  required
                />
              </div>

              <div className="form-group mb-2">
                <label>Food Bill / Day (৳)</label>
                <input
                  type="number"
                  className="form-control"
                  name="foodBill"
                  value={roomData.foodBill}
                  onChange={handleRoomChange}
                  placeholder="Enter Food Bill per Day"
                  min="0"
                  required
                />
              </div>

              <div className="form-group mb-2">
                <label>Note</label>
                <input
                  type="text"
                  className="form-control"
                  name="note"
                  value={roomData.note}
                  onChange={handleRoomChange}
                  placeholder="Enter Note"
                />
              </div>

              <button type="submit" className="btn btn-primary mt-2">
                Add Room
              </button>
            </form>
          </div>
        )}

        {activeTab === "login" && (
          <div className="card p-3">
            <h4>Login</h4>
            <form onSubmit={handleLoginSubmit}>
              <div className="form-group mb-2">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={loginData.email}
                  onChange={handleLoginChange}
                  className="form-control"
                  required
                />
              </div>
              <div className="form-group mb-2">
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  value={loginData.password}
                  onChange={handleLoginChange}
                  className="form-control"
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary mt-2">
                Login
              </button>
            </form>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default AddRoom;

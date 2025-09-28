import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import Footer from "../../components/Footer";

const AddRoom = () => {
  const [roomData, setRoomData] = useState({
    roomName: "",
    note: "",
  });

  const handleChange = (e) => {
    setRoomData({ ...roomData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Room Added:", roomData);

    // Clear form after submit
    setRoomData({
      roomName: "",
      note: "",
    });
  };

  return (
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
                <h4>Add Student Room</h4>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="content">
          <div className="card">
            <div className="card-body">
              <div className="row">
                <div className="col-8">
                  <form onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label>Room Name</label>
                      <input
                        type="text"
                        className="form-control"
                        name="roomName"
                        value={roomData.roomName}
                        onChange={handleChange}
                        placeholder="Enter Room Name"
                      />
                    </div>

                    <div className="form-group">
                      <label>Note</label>
                      <input
                        type="text"
                        className="form-control"
                        name="note"
                        value={roomData.note}
                        onChange={handleChange}
                        placeholder="Enter Note"
                      />
                    </div>

                    <button type="submit" className="btn btn-primary">
                      Add Room
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AddRoom;

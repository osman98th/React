import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import Footer from "../../components/Footer";

const  Female = () => {
  const [bookingData, setBookingData] = useState({
    fullName: "",
    email: "",
    phone: "",
    roomType: "",
    checkIn: "",
    checkOut: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setBookingData({ ...bookingData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Female House Booking:", bookingData);
    setMessage("✅ Booking Submitted Successfully!");

    // clear form
    setBookingData({
      fullName: "",
      email: "",
      phone: "",
      roomType: "",
      checkIn: "",
      checkOut: "",
    });
  };

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
                  <ol className="breadcrumb float-sm-right">
                    <li className="breadcrumb-item">
                      <a href="#">Student</a>
                    </li>
                    <li className="breadcrumb-item active"> Female</li>
                  </ol>
                </div>
              </div>
            </div>
          </section>

          {/* Main content */}
          <section className="content">
            {/* Female House Booking Form - উপরে */}
            <div className="card mb-4">
              <div className="card-header">
                <h3 className="card-title">Female House Booking Form</h3>
              </div>
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label>Full Name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="fullName"
                      value={bookingData.fullName}
                      onChange={handleChange}
                      placeholder="Enter Full Name"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label>Email</label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      value={bookingData.email}
                      onChange={handleChange}
                      placeholder="Enter Email"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label>Phone</label>
                    <input
                      type="text"
                      className="form-control"
                      name="phone"
                      value={bookingData.phone}
                      onChange={handleChange}
                      placeholder="Enter Phone Number"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label>Room Type</label>
                    <select
                      className="form-control"
                      name="roomType"
                      value={bookingData.roomType}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select Room</option>
                      <option value="Single">Single</option>
                      <option value="Double">Double</option>
                      <option value="Shared">Shared</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label>Check-In Date</label>
                    <input
                      type="date"
                      className="form-control"
                      name="checkIn"
                      value={bookingData.checkIn}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label>Check-Out Date</label>
                    <input
                      type="date"
                      className="form-control"
                      name="checkOut"
                      value={bookingData.checkOut}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <button type="submit" className="btn btn-primary">
                  Female Submit
                  </button>
                </form>

                {message && <p style={{ marginTop: "10px" }}>{message}</p>}
              </div>
            </div>

            {/* Student Data Table - নিচে */}
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col-12">
                    <div className="card">
                      <div className="card-header">
                        <h3 className="card-title">Student</h3>
                        <div className="card-tools">
                          <div
                            className="input-group input-group-sm"
                            style={{ width: 150 }}
                          >
                            <input
                              type="text"
                              name="table_search"
                              className="form-control float-right"
                              placeholder="Search"
                            />
                            <div className="input-group-append">
                              <button type="submit" className="btn btn-default">
                                <i className="fas fa-search" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Student Table */}
                      <div className="card-body table-responsive p-0">
                        <table className="table table-hover text-nowrap">
                          <thead>
                            <tr>
                              <th>ID</th>
                              <th>User</th>
                              <th>Date</th>
                              <th>Status</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>1</td>
                              <td>Azmira</td>
                              <td>25-10-2025</td>
                              <td>
                                <span className="tag tag-success">
                                  Alhamdulillah
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td>2</td>
                              <td>Sarmin Khatun</td>
                              <td>11-8-2025</td>
                              <td>
                                <span className="tag tag-warning">Pending</span>
                              </td>
                            </tr>
                            <tr>
                              <td>3</td>
                              <td>Rafia Boona</td>
                              <td>11-09-2025</td>
                              <td>
                              Subhana-Allah
                              </td>
                            </tr>

                            <tr>
                              <td>4</td>
                              <td>Farhana Akter</td>
                              <td>11-09-2025</td>
                              <td>
                                <span className="tag tag-danger">Cancel</span>
                              </td>
                            </tr>

                            <tr>
                              <td>5</td>
                              <td>Israt Jahan</td>
                              <td>11-11-2025</td>
                              <td>
                                <span className="tag tag-danger">Submit</span>
                              </td>
                            </tr>


                          </tbody>
                        </table>
                      </div>
                      {/* /.card-body */}
                    </div>
                  </div>
                </div>
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

export default  Female;

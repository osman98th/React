
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import Footer from '../../components/Footer';
import { NavLink } from "react-router-dom";
const ManageCategory = () => {

    const [items, setItems] = useState([]);

  const itemDelete = (id) => {
    axios.post("http://localhost/React-Mid/php/category/delete_cat.php?id=" + id)
      .then((res) => (console.log(res)))

    axios.get("http://localhost/React-Mid/php/category/list_catagory.php")
      .then((res) => setItems(res.data))
  }

  useEffect(() => {
    axios.get("http://localhost/React-Mid/php/category/list_catagory.php")
      .then((res) => setItems(res.data))
  }, [])
    return (
        <div>
        <div>
      {/* <!-- Site wrapper --> */}
      <div className="wrapper">
        {/* Navbar */}
        <Navbar />
        {/* /.navbar */}
        {/* Main Sidebar Container */}
        <Sidebar />
        {/* Content Wrapper. Contains page content */}
        <div className="content-wrapper">
          {/* Content Header (Page header) */}
          <section className="content-header">
            <div className="container-fluid">
              <div className="row mb-2">
                <div className="col-sm-6">
                  <ol className="breadcrumb float-sm-right">
                    <li className="breadcrumb-item">
                      <a href="#">Home</a>
                    </li>
                    <li className="breadcrumb-item active">Manage Category</li>
                  </ol>
                </div>
              </div>
            </div>
            {/* /.container-fluid */}
          </section>
          {/* Main content */}
          <section className="content">
            {/* Default box */}
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col-12">
                    <div className="card">
                      <div className="card-header">
                        <h3 className="card-title">Manage Category</h3>
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
                      {/* /.card-header */}
                      <div className="card-body table-responsive p-0">
                        <table className="table table-hover text-nowrap">
                          <thead>
                            <tr>
                              <th>ID</th>
                              <th>Category Name</th>
                              <th>note</th>
                              <th>Status</th>
                            </tr>
                          </thead>
                         <tbody>
                          {items.map((data, i) => {
                            return (

                              <tr key={i}>
                                <th scope="row">{++i}</th>
                                <td>{data.name}</td>
                                <td>{data.note}</td>
                                <td>
                                  <NavLink to={`/editcategory/${data.id}`}>
                                    <button className='btn btn-info mb-2 mt-2'>Update</button>
                                  </NavLink>
                                  <button className='btn btn-danger' onClick={() => { itemDelete(data.id) }}>Delete</button>
                                </td>
                              </tr>

                            )
                          })}

                        </tbody>
                        </table>
                      </div>
                      {/* /.card-body */}
                    </div>
                    {/* /.card */}
                  </div>
                </div>
              </div>
              {/* /.card-body */}
            </div>
            {/* /.card */}
          </section>
          {/* /.content */}
        </div>
        {/* /.content-wrapper */}
        <Footer />
        {/* /.control-sidebar */}
      </div>
      {/* ./wrapper */}
    </div>
        </div>
    );
};

export default ManageCategory;
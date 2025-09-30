import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import Footer from "../../components/Footer";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import React, { useEffect, useState } from "react";

const EditCategory = () => {
     const { id } = useParams();
  const [name, setFirstName] = useState("");
  const [note, setNote] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
        axios
            .get(
                `http://localhost/React-Mid/php/category/edit_cat.php?id=${id}`
            )
            .then((res) => {
                setFirstName(res.data.name);
                setNote(res.data.note);
            });
    }, []);
    const save = () => {
        const formdata = new FormData();
        formdata.append('name', name)
        formdata.append('note', note)
        formdata.append("id", id);

        axios
            .post(
                "http://localhost/React-Mid/php/category/update_user.php",
                formdata,
                {
                    headers: {
                        "content-type": "multipart/form-data",
                    },
                }
            )
            .then((res) => {
                console.log(res.data);
                setFirstName('');
                setNote('');
                navigate("/manage-cat");
            });
    };
  return (
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
                      <a href="#">Add Category</a>
                    </li>
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
                  <div className="col-8">
                    <form>
                      <div className="card-body">
                        <div className="form-group">
                          <label htmlFor="exampleInputEmail1">
                            Category Name
                          </label>
                          <input
                            type="email"
                            className="form-control"
                            id="exampleInputEmail1"
                            placeholder="Enter Category"
                            onChange={(e) => setFirstName(e.target.value)}
                            value={name}
                          />
                        </div>

                        <div className="form-group">
                          <label htmlFor="exampleInputPassword1">Note</label>
                          <textarea
                            cols={30}
                            rows={4}
                            className="form-control"
                            onChange={(e) => setNote(e.target.value)}
                            value={note}
                            placeholder="Additional note"
                          />
                        </div>
                      </div>
                      {/* /.card-body */}
                      <div className="card-footer">
                        <div className="row">
                          <div className="form-group col-md-12">
                            <button
                              type="submit"
                              className="btn btn-primary pull-right"
                              onClick={save}
                            >
                              Save
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
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
  );
};

export default EditCategory;

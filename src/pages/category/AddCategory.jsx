import React from 'react';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import Footer from '../../components/Footer';

const AddCategory = () => {
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
                      <label htmlFor="exampleInputEmail1">Category Name</label>
                      <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        placeholder="Enter Category"
                      />
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="exampleInputPassword1">Note</label>
                      <input
                        type="text"
                        className="form-control"
                        id="exampleInputPassword1"
                        placeholder="Note"
                      />
                    </div>
                    
                   
                  </div>
                  {/* /.card-body */}
                  <div className="card-footer">
                    <button type="submit" className="btn btn-primary">
                      Submit
                    </button>
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

export default AddCategory;
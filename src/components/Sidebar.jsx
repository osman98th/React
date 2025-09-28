import React from 'react';
import { Link } from "react-router-dom";
const Sidebar = () => {
    return (
        <div>
            <aside className="main-sidebar sidebar-dark-primary elevation-4">
          {/* Brand Logo */}
          <a href="../../index.html" className="brand-link">
            <img
              src="assets-admin/dist/img/intefadah.jpg"
              alt="AdminLTE Logo"
              className="brand-image img-circle elevation-3"
              style={{ opacity: ".8" }}
            />
            <span className="brand-text font-weight-light">Administration</span>
          </a>
          {/* Sidebar */}
          <div className="sidebar">
            {/* Sidebar user (optional) */}
            <div className="user-panel mt-3 pb-3 mb-3 d-flex">
              <div className="image">
                <img
                  src="assets-admin/dist/img/DSC_2926.JPG"
                  className="img-circle elevation-2"
                  alt="User Image"
                />
              </div>
              <div className="info">
                <a href="#" className="d-block">
                 Osman Goni
                </a>
              </div>
            </div>
            {/* SidebarSearch Form */}
            <div className="form-inline">
              <div className="input-group" data-widget="sidebar-search">
                <input
                  className="form-control form-control-sidebar"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <div className="input-group-append">
                  <button className="btn btn-sidebar">
                    <i className="fas fa-search fa-fw" />
                  </button>
                </div>
              </div>
            </div>
            {/* Sidebar Menu */}
            <nav className="mt-2">
              <ul
                className="nav nav-pills nav-sidebar flex-column"
                data-widget="treeview"
                role="menu"
                data-accordion="false"
              >
                {/* Add icons to the links using the .nav-icon class
         with font-awesome or any other icon font library */}
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    <i className="nav-icon fas fa-tachometer-alt" />
                    <p>
                      Dashboard
                      <i className="right fas fa-angle-left" />
                    </p>
                  </a>
                
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    <i className="nav-icon fas fa-edit" />
                    <p>
                      Forms
                      <i className="fas fa-angle-left right" />
                    </p>
                  </a>
                  <ul className="nav nav-treeview">
                    <li className="nav-item">
                      <a href="../forms/general.html" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>General Elements</p>
                      </a>
                    </li>
                   
                    <li className="nav-item">
                      <a href="../forms/validation.html" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>Validation</p>
                      </a>
                    </li>
                  </ul>
                </li>
               
                <li className="nav-header">Context Menu</li>

                <li className="nav-item">
                  <Link to="#" className="nav-link">
                    <i className="nav-icon fas fa-book" />
                    <p>
                      User
                      <i className="fas fa-angle-left right" />
                    </p>
                  </Link>
                  <ul className="nav nav-treeview">
                    <li className="nav-item">
                      <Link to="/add-user" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>Add User</p>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/manage-user" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>Manage User</p>
                      </Link>
                    </li>
                  
                  </ul>
                </li>

                    {/* Category */}
                 <li className="nav-item">
                  <a href="#" className="nav-link">
                    <i className="nav-icon fas fa-book" />
                    <p>
                      Category
                      <i className="fas fa-angle-left right" />
                    </p>
                  </a>
                  <ul className="nav nav-treeview">
                    <li className="nav-item">
                      <Link to="/add-cat" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>Add Category</p>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/manage-cat" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>Manage Category</p>
                      </Link>
                    </li>
                  
                  </ul>
                </li>



                   {/* Student  */}
                 <li className="nav-item">
                  <a href="#" className="nav-link">
                    <i className="nav-icon fas fa-book" />
                    <p>
                      Student
                      <i className="fas fa-angle-left right" />
                    </p>
                  </a>
                  <ul className="nav nav-treeview">
                    <li className="nav-item">
                      <Link to="/student-female" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>Female</p>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/student-male" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>Male</p>
                      </Link>
                    </li>
                  
                  </ul>
                </li>
                
                  {/* room */}
                   <li className="nav-item">
                  <a href="#" className="nav-link">
                    <i className="nav-icon fas fa-book" />
                    <p>
                      Room
                      <i className="fas fa-angle-left right" />
                    </p>
                  </a>
                  <ul className="nav nav-treeview">
                    <li className="nav-item">
                      <Link to="/add-room" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>Add Room</p>
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link to="/manege-room" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>Manege Room</p>
                      </Link>
                    </li>
                  
                  </ul>
                </li>
                
                  

                <li className="nav-header">MISCELLANEOUS</li>
              
              </ul>
            </nav>
            {/* /.sidebar-menu */}
          </div>
          {/* /.sidebar */}
        </aside>
        </div>
    );
};

export default Sidebar;
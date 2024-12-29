import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import 'bootstrap-icons/font/bootstrap-icons.css';  // For Bootstrap Icons

const View = () => {
  const [user, setUser] = useState([]);
  const [search, setSearch] = useState("");
  const [selectName, setName] = useState("");
  const [selectSort, setSelectSort] = useState("");

  async function show() {
    const res = await axios.get("https://66fe6a302b9aac9c997bd736.mockapi.io/user");
    setUser(res.data);
  }

  useEffect(() => {
    show();
  }, []);

  const Names = user.map((users) => users.name);

  async function trash(id) {
    if (window.confirm("Are you sure you want to delete this user?")) {
      await axios.delete(`https://66fe6a302b9aac9c997bd736.mockapi.io/user/${id}`);
      show();
    }
  }

  const filterData = user
    .filter((user) => {
      const searched = search.toUpperCase();
      const username = user.name.toUpperCase();
      const useremail = user.email.toUpperCase();
      return username.includes(searched) || useremail.includes(searched);
    })
    .filter((user) => user.name.includes(selectName))
    .sort((a, b) => {
      if (selectSort === "asc") return a.name.localeCompare(b.name);
      if (selectSort === "desc") return b.name.localeCompare(a.name);
    });

  return (
    <div className="container my-5 shadow">
      <h2 className="text-center mb-4 text-primary">User Management</h2>

      <div className="row mb-4 justify-content-center">
        {/* Search input */}
        <div className="col-lg-4 col-md-6 col-sm-8 mb-3">
          <input
            className="form-control shadow-sm border-primary"
            type="search"
            placeholder="Search by Name or Email"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Filter by Name */}
        <div className="col-lg-4 col-md-6 col-sm-8 mb-3">
          <select
            className="form-select shadow-sm border-primary"
            onChange={(e) => setName(e.target.value)}
          >
            <option value="">--Filter by Name--</option>
            {Names.map((name) => (
              <option key={name}>{name}</option>
            ))}
          </select>
        </div>

        {/* Sort by Name */}
        <div className="col-lg-4 col-md-6 col-sm-8">
          <select
            className="form-select shadow-sm border-primary"
            onChange={(e) => setSelectSort(e.target.value)}
          >
            <option>Select by Sorting</option>
            <option value="asc">A-Z</option>
            <option value="desc">Z-A</option>
          </select>
        </div>
      </div>

      {/* User Table */}
      <table className="table table-hover table-bordered text-center align-middle table-responsive">
        <thead className="table-primary text-center">
          <tr>
            <th>S.No</th>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filterData.map((item, index) => (
            <tr key={item.id} className="text-center align-middle">
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.mobile}</td>
              <td>
                <div className="d-flex justify-content-center">
                  <NavLink to={`/SingleUser/${item.id}`}>
                    <button className="btn btn-outline-success btn-sm me-2 shadow-sm">
                      <i className="bi bi-eye-fill"></i>
                    </button>
                  </NavLink>

                  <NavLink to={`/Update/${item.id}`}>
                    <button className="btn btn-outline-warning btn-sm me-2 shadow-sm">
                      <i className="bi bi-pencil-fill"></i>
                    </button>
                  </NavLink>

                  <button
                    className="btn btn-outline-danger btn-sm shadow-sm"
                    onClick={() => trash(item.id)}
                  >
                    <i className="bi bi-trash-fill"></i>
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* No users found message */}
      {filterData.length === 0 && (
        <div className="text-center text-muted">No users found.</div>
      )}
    </div>
  );
};

export default View;

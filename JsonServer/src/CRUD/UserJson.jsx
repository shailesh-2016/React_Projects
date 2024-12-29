import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";

const UserJson = () => {
  const { register, handleSubmit,reset } = useForm();
  const [userData, setUserData] = useState([]);

  async function UserApi() {
    try {
      const res = await axios.get("http://localhost:5000/Users");
      setUserData(res.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    UserApi();
  }, []);

  async function form(data) {
    try {
      const res = await axios.post("http://localhost:5000/Users", data);
      if (res) {
        alert("Data inserted successfully");
        UserApi();
        reset()
      }
    } catch (error) {
      console.error(error);
    }
  }

  async function trash(id) {
    if (confirm("Are you sure you want to delete this user?")) {
      await axios.delete(
        `http://localhost:5000/Users/${id}`
      );
      UserApi();  
    }
  }

  return (
    <>
      <form
        onSubmit={handleSubmit(form)}
        className="col-6 mx-auto p-5 shadow my-5"
      >
        <div className="mt-4">
          <input
            type="text"
            placeholder="Enter Username"
            className="form-control"
            {...register("username")}
          />
        </div>
        <div className="mt-4">
          <input
            type="text"
            placeholder="Enter Email"
            className="form-control"
            {...register("email")}
          />
        </div>
        <div className="mt-4">
          <input
            type="text"
            placeholder="Enter Mobile"
            className="form-control"
            {...register("mobile")}
          />
        </div>
        <button className="btn btn-outline-success my-4">Submit</button>
      </form>

      <div className="container my-3">
        <table className="table table-responsive table-striped table-hover my-3">
          <thead className="table-dark">
            <tr>
              <th>S.No</th>
              <th>Username</th>
              <th>Email</th>
              <th>Mobile</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {userData.map((item, index) => (
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>{item.username}</td>
                <td>{item.email}</td>
                <td>{item.mobile}</td>
                <td>
                <NavLink to={`/View/${item.id}`}>
                  <button className="btn btn-outline-success btn-sm me-2">
                    <i className="fa-solid fa-eye"></i>
                  </button>
                </NavLink>

                <NavLink to={`/Update/${item.id}`}>
                  <button className="btn btn-outline-warning btn-sm me-2">
                    <i className="fa-solid fa-pen"></i>
                  </button>
                </NavLink>

                <button
                  className="btn btn-outline-danger btn-sm"
                  onClick={() => trash(item.id)}
                >
                  <i className="fa-solid fa-trash"></i>
                </button>
              </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default UserJson;

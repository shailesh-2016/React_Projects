import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import dbFire from "./Firestore";
import { NavLink, useNavigate } from "react-router-dom";

const ShowData = () => {
  const [users, setUser] = useState([]);
  const redirect=useNavigate()

  async function showFirebase() {
    const res = await getDocs(collection(dbFire, "usersData"));

    const arr = [];
    res.forEach((doc) => {
      const newUser = {
        id: doc.id,
        ...doc.data(),
      };
      arr.push(newUser);
    });

    setUser(arr);
  }

  useEffect(() => {
    showFirebase();
  }, []);

  async function trash(id) {
    if (window.confirm("Do you want to delete the user?")) {
      await deleteDoc(doc(dbFire, "usersData", id));
      showFirebase();
    }
  }

  return (
    <>
    
      <div className="container my-5">
  <h3 className="text-center mb-4">All User Datalist</h3>
  <div className="table-responsive">
    <table className="table table-hover table-bordered text-center align-middle">
      <thead className="bg-gradient-primary text-white">
        <tr>
          <th>S.No</th>
          <th>Username</th>
          <th>Email</th>
          <th>Mobile</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {users.map((User, index) => (
          <tr key={User.id} className="table-row-hover">
            <td>{index + 1}</td>
            <td>{User.username}</td>
            <td>{User.email}</td>
            <td>{User.mobile}</td>
            <td>
              <NavLink
                className="btn btn-gradient-info btn-sm me-2"
                to={`/view/${User.id}`}
              >
                <i className="fa-solid fa-eye"></i>
              </NavLink>

              <NavLink
                className="btn btn-gradient-warning btn-sm me-2"
                to={`/update/${User.id}`}
              >
                <i className="fa-solid fa-pen-to-square"></i>
              </NavLink>

              <button
                className="btn btn-gradient-danger btn-sm"
                onClick={() => trash(User.id)}
              >
                <i className="fa-solid fa-user-minus"></i>
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    <div className="text-center mt-4">
      <button
        type="button"
        className="btn btn-gradient-secondary px-4"
        onClick={() => redirect(-1)}
      >
        <i className="fa-solid fa-arrow-left"></i> Back
      </button>
    </div>
  </div>
</div>

    </>
  );
};

export default ShowData;

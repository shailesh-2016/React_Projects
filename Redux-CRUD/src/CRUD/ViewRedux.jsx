import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteUser } from "../Pages/userSlice";
import { NavLink } from "react-router-dom";

const ViewRedux = () => {
  const { userList } = useSelector((state) => state);
  console.log("user..............");
  console.log(userList);
  const dispatch = useDispatch();

  function trash(id) {
    dispatch(deleteUser(id));
  }

  return (
    <>
      <div className="container my-5">
        <table className="table table-striped table-success">
          <thead>
            <tr>
              <th>UserName</th>
              <th>Email</th>
              <th>Mobile</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {userList.map((user) => {
              return (
                <tr>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.mobile}</td>
                  <td>
                    <button
                      className="btn btn-danger me-2"
                      onClick={() => {
                        trash(user.id);
                      }}
                    >
                      Delete
                    </button>
                    <NavLink className="btn btn-warning" to={`/UpdateRedux/${user.id}`}>Update</NavLink>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};
export default ViewRedux;

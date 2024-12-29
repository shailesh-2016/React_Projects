import React, { useEffect, useState } from "react";
import db from "../../Firebase";
import { get, push, ref, remove, set } from "firebase/database";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
// import toast, { Toaster } from "react-hot-toast";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Create = () => {
  const { register, handleSubmit, reset } = useForm();
  const [users, setUser] = useState([]);

  function SubmitData(data) {
    set(push(ref(db, "firebase")), data)
      .then(() => {
        showFirebase();
        reset();
        toast.success("🦄 Data Submited!", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: 0,
          theme: "dark",
          transition: Bounce,
        });
      })
      .catch((error) => {
        console.error(error);
      
      });
  }

  async function showFirebase() {
    const res = await get(ref(db, "firebase"));
    const obj = res.val();
    const arr = [];

    for (const key in obj) {
      const User = obj[key];
      const newUser = {
        id: key,
        ...User,
      };

      console.log(newUser);
      arr.push(newUser);
    }
    console.log("final arr.......");
    console.log(arr);
    setUser(arr);
  }

  useEffect(() => {
    showFirebase();
  }, []);

  async function trash(id) {
    if (confirm("do you want to delete this data?")) {
      const single_User = ref(db, `firebase/${id}`);
      await remove(single_User);
      showFirebase();
    }
  }

  return (
    <>

        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <div className="card shadow-lg mt-5 border-0 rounded-3">
                <div className="card-header text-center bg-gradient-primary text-white py-4 rounded-top">
                  <h3>Add User Data</h3>
                </div>
                <div className="card-body p-4">
                  <form onSubmit={handleSubmit(SubmitData)}>
                    <div className="form-floating mb-3">
                      <input
                        type="text"
                        className="form-control"
                        id="username"
                        placeholder="Enter Username"
                        {...register("username")}
                      />
                      <label htmlFor="username">
                        <i className="fa-solid fa-user me-2"></i> Username
                      </label>
                    </div>

                    <div className="form-floating mb-3">
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Enter Email"
                        {...register("email")}
                      />
                      <label htmlFor="email">
                        <i className="fa-solid fa-envelope me-2"></i> Email
                      </label>
                    </div>

                    <div className="form-floating mb-3">
                      <input
                        type="text"
                        className="form-control"
                        id="mobile"
                        placeholder="Enter Mobile"
                        {...register("mobile")}
                      />
                      <label htmlFor="mobile">
                        <i className="fa-solid fa-phone me-2"></i> Mobile
                      </label>
                    </div>

                    <div className="d-flex justify-content-between align-items-center mt-4">
                      <button type="submit" className="btn btn-outline-primary px-4">
                        <i className="fa-solid fa-check me-2"></i> Submit
                      </button>

                   
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      
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
      
    </div>
  </div>
</div>

      {/* <Toaster
        position="top-center"
        reverseOrder={true}
        gutter={100}
        toastOptions={{
          // Define default options
          className: "",
          duration: 2000,
          style: {
            background: "#000",
            color: "#fff",
          }
        }}
      /> */}
      <ToastContainer />
    </>
  );
};

export default Create;

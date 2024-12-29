import { addDoc, collection } from "firebase/firestore";
import React from "react";
import dbFire from "./Firestore";
import { useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";
import { Bounce, toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CreateFire = () => {
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();

  async function SubmitData(data) {
    await addDoc(collection(dbFire, "usersData"), data);
    reset();

    toast.success("🦄 Data successfully submitted!", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
  }

  return (
    <>
      <div className="form-bg">
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

                      <NavLink to="/ShowData" className="btn  btn-outline-dark">
                        <i className="fa-solid fa-users-viewfinder"></i> View Data
                      </NavLink>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ToastContainer />
    </>
  );
};

export default CreateFire;

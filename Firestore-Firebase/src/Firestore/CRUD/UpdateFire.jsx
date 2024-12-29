import { collection, doc, getDoc, updateDoc } from "firebase/firestore";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import dbFire from "./Firestore";
import { Bounce, toast, ToastContainer } from "react-toastify";

const UpdateFire = () => {
  const { register, handleSubmit, reset } = useForm();
  const redirect = useNavigate();
  const { id } = useParams();

  async function SingleUser() {
    const SingleData = await getDoc(doc(dbFire, "usersData", id));
    // console.log(SingleData.data());
    reset(SingleData.data());
  }
  useEffect(() => {
    SingleUser();
  }, []);

  async function UpdateData(data) {
    await updateDoc(doc(dbFire, "usersData", id), data).then(() => {
      toast.warn("🦄 Data Updated!", {
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
      setTimeout(() => {
        redirect("/ShowData");
      }, 2000);
    });
    // alert("updated");

    // redirect("/");
  }
  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card shadow-lg mt-5 border-0">
              <div className="card-header text-center bg-gradient-warning text-dark">
                <h3>Update User Data</h3>
              </div>
              <div className="card-body p-4">
                <form onSubmit={handleSubmit(UpdateData)}>
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control shadow-sm"
                      id="username"
                      placeholder="Enter Username"
                      {...register("username")}
                    />
                    <label htmlFor="username">
                      <i className="fa-solid fa-user me-2"></i>Username
                    </label>
                  </div>

                  <div className="form-floating mb-3">
                    <input
                      type="email"
                      className="form-control shadow-sm"
                      id="email"
                      placeholder="Enter Email"
                      {...register("email")}
                    />
                    <label htmlFor="email">
                      {" "}
                      <i className="fa-solid fa-envelope me-2"></i>Email
                    </label>
                  </div>

                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control shadow-sm"
                      id="mobile"
                      placeholder="Enter Mobile"
                      {...register("mobile")}
                    />
                    <label htmlFor="mobile">
                      <i className="fa-solid fa-phone me-2"></i>Mobile
                    </label>
                  </div>

                  <div className="d-flex justify-content-between mt-4">
                    <button
                      type="submit"
                      className="btn btn-gradient-warning px-4"
                    >
                      <i className="fa-solid fa-pencil me-2"></i> Update Data
                    </button>
                    <button
                      type="button"
                      className="btn btn-gradient-secondary px-4"
                      onClick={() => redirect(-1)}
                    >
                      <i className="fa-solid fa-arrow-left me-2"></i> Back
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ToastContainer></ToastContainer>
    </>
  );
};

export default UpdateFire;

import { get, ref, set } from "firebase/database";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import db from "../../Firebase";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Update = () => {
  const { register, handleSubmit, reset } = useForm();
  const { id } = useParams();
  const redirect = useNavigate();
  
  async function single() {
    const single_User = await get(ref(db, `firebase/${id}`));
    console.log(single_User.val());
    reset(single_User.val());
  }
  useEffect(() => {
    single();
  }, []);

  async function UpdateData(data) {
    await set(ref(db, `firebase/${id}`), data)
      .then(() => {
        toast.success("🦄 Data Updated!", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: 0,
          theme: "dark",
          transition: Bounce,
        });

        setTimeout(() => {
          redirect("/");
        }, 2000);
      })
      .catch((err) => {
        console.log(err);
      });
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
      <ToastContainer />
    </>
  );
};

export default Update;

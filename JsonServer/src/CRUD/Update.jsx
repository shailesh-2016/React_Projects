import axios from "axios";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";

const Update = () => {
  const { register, handleSubmit, reset } = useForm();
  const redirect = useNavigate();
  const { id } = useParams();

  async function UserApi() {
    const res = await axios.get(`http://localhost:5000/Users/${id}`);
    reset(res.data);
  }
  useEffect(() => {
    UserApi();
  }, []);

  async function editUser(data) {
    try {
      await axios.
        put(`http://localhost:5000/Users/${id}`,data)
          .then((res) => {
            console.log(res);
            redirect('/');
          })
          .catch((err) => {
            console.log(err);
          });
    } catch (error) {
      console.log(error);
    }
  }
 

  return (
    <>
      <form
        onSubmit={handleSubmit(editUser)}
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
        <button className="btn btn-outline-warning my-4">Update</button>
      </form>
    </>
  );
};

export default Update;

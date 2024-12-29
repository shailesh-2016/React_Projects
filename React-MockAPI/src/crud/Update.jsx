import axios from "axios";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";

const Update = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const redirect = useNavigate();
  const { id } = useParams();

  async function show() {
    const res = await axios.get(
      `https://66fe6a302b9aac9c997bd736.mockapi.io/user/${id}`
    );
    reset(res.data);
  }
  useEffect(() => {
    show();
  }, []);


  async function editUser(data) {
    try {
      await axios.
        put(`https://66fe6a302b9aac9c997bd736.mockapi.io/user/${id}`, data)
          .then((res) => {
            console.log(res);
            redirect('/View');
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
            {...register("name", {
              required: {
                value: true,
                message: "Enter name",
              },
              minLength: {
                value: 3,
                message: "Enter min 3 characters",
              },
              maxLength: {
                value: 10,
                message: "Enter max 10 characters",
              },
              pattern: {
                value: /^[A-Za-z]+$/,
                message: "Enter only characters",
              },
            })}
          />
          <p className="text-danger">{errors?.name?.message}</p>
        </div>
        <div className="mt-4">
          <input
            type="text"
            placeholder="Enter Email"
            className="form-control"
            {...register("email", {
              required: {
                value: true,
                message: "Enter email",
              },
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Enter a valid email address",
              },
            })}
          />
          <p className="text-danger">{errors?.email?.message}</p>
        </div>
        <div className="mt-4">
          <input
            type="text"
            placeholder="Enter Mobile"
            className="form-control"
            {...register("mobile", {
              required: {
                value: true,
                message: "Enter mobile",
              },
              minLength: {
                value: 10,
                message: "Enter exactly 10 digits",
              },
              maxLength: {
                value: 10,
                message: "Enter exactly 10 digits",
              },
              pattern: {
                value: /^[0-9]{10}$/,
                message: "Enter a valid mobile number",
              },
            })}
          />
          <p className="text-danger">{errors?.mobile?.message}</p>
        </div>
        <button className="btn btn-outline-warning my-4">Update</button>
      </form>
    </>
  );
};
export default Update;

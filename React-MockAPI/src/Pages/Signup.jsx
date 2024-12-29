import React from "react";
import { useForm } from "react-hook-form";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function form(data) {
    console.log(data);
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
            {...register("username", {
              required: {
                value: true,
                message: "Enter username",
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
          <p className="text-danger">{errors?.username?.message}</p>
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
        <button className="btn btn-outline-success my-4">Submit</button>
      </form>
    </>
  );
};

export default Signup;

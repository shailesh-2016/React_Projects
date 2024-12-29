import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const User = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [user, setUser] = useState([]);

  async function submitUserData(data) {
    try {
      const res = await axios.post(
        "https://66fe6a302b9aac9c997bd736.mockapi.io/user",
        data
      );
      console.log(res);

      if (res) {
        alert("Data has been inserted successfully!");
        reset();
        showData();
      } else {
        alert("You entered wrong data...");
      }
    } catch (error) {
      console.error("Error submitting data:", error);
      alert("Error submitting data");
    }
  }

  async function showData() {
    try {
      const res = await axios.get(
        "https://66fe6a302b9aac9c997bd736.mockapi.io/user"
      );
      console.log(res.data);
      setUser(res.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {
    showData();
  }, []);

  return (
    <>
      <form
        onSubmit={handleSubmit(submitUserData)}
        className="col-6 mx-auto p-5 shadow my-5 rounded bg-light"
      >
        <h2 className="text-center mb-4">User Information</h2>
        <div className="form-group mt-4">
          <input
            type="text"
            placeholder="Enter Username"
            className={`form-control ${errors.name ? "is-invalid" : ""}`}
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
                value: 15,
                message: "Enter max 10 characters",
              },
              pattern: {
                value: /^[A-Za-z ]+$/,
                message: "Enter only characters",
              },
            })}
          />
          <div className="invalid-feedback">{errors?.name?.message}</div>
        </div>
        <div className="form-group mt-4">
          <input
            type="text"
            placeholder="Enter Email"
            className={`form-control ${errors.email ? "is-invalid" : ""}`}
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
          <div className="invalid-feedback">{errors?.email?.message}</div>
        </div>
        <div className="form-group mt-4">
          <input
            type="text"
            placeholder="Enter Mobile"
            className={`form-control ${errors.mobile ? "is-invalid" : ""}`}
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
          <div className="invalid-feedback">{errors?.mobile?.message}</div>
        </div>
        <button className="btn btn-outline-success my-4 w-100">Submit</button>
      </form>
    </>
  );
};

export default User;

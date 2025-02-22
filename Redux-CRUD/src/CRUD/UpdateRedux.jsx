import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, redirect, useParams, Navigate } from 'react-router-dom'
import { editUser } from '../Pages/userSlice';

const UpdateRedux = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },reset
  } = useForm();

    const {id}=useParams()
    console.log(id);

    const dispatch=useDispatch()
    const navigate=useNavigate()
   
      const {userList}=useSelector((state)=>state)
      // const userList = useSelector((state)=>(state.userList))
      console.log(userList);
      

      //single user data
      useEffect(()=>{
        const singleUser=userList.find((user)=>{
            return user.id==id
        })
        reset(singleUser)
      },[])

      

      function form(data) {
        dispatch(editUser(data));
        // redirect('/View')
        navigate('/View');
        
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
                value: 15,
                message: "Enter max 15 characters",
              },
              pattern: {
                value: /^[A-Za-z0-9]+$/,
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
        <button className="btn btn-outline-warning my-4">Update</button>
      </form>
    </>
  )
}

export default UpdateRedux

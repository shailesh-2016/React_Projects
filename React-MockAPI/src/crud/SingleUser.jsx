import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SingleUser = () => {
  const [user, setUser] = useState({});
  const { id } = useParams();

  async function show() {
    const res = await axios.get(
      `https://66fe6a302b9aac9c997bd736.mockapi.io/user/${id}`
    );
    setUser(res.data);
  }

  useEffect(() => {
    show();
  }, []);

  return (
    <>
      <div className="col-6 p-5 my-5 shadow mx-auto">
        <ul>
          <li>Name   : {user.name}</li>
          <li>Email  : {user.email}</li>
          <li>Mobile : {user.mobile}</li>
        
        </ul>
      </div>
    </>
  );
};
export default SingleUser;

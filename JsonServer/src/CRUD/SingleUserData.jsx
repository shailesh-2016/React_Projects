import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SingleUserData = () => {
  const [user, setUser] = useState({});
  const { id } = useParams();

  async function UserApi() {
    const res = await axios.get(`http://localhost:5000/Users/${id}`);
    setUser(res.data);
  }
  useEffect(() => {
    UserApi();
  }, []);

  return (
    <>
    <h1 className="text text-center">View data</h1>
      <div className="col-6 p-5 my-5 shadow mx-auto">
        <ul>
          <li>Name : {user.username}</li>
          <li>Email : {user.email}</li>
          <li>Mobile : {user.mobile}</li>
        </ul>
      </div>
    </>
  );
};

export default SingleUserData;

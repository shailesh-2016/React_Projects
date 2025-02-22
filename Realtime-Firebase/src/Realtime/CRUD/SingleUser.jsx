import { get, ref } from "firebase/database";
import React, { useEffect, useState } from "react";
import db from "../../Firebase";
import { useNavigate, useParams } from "react-router-dom";

const SingleUser = () => {
  const [User, setUser] = useState({});
  const { id } = useParams();
  const redirect=useNavigate()

  async function Single() {
    const single_User = await get(ref(db, `firebase/${id}`));
    console.log(single_User.val());
    setUser(single_User.val());
  }
  useEffect(() => {
    Single();
  }, []);

  return (
    <>
       <h1 className="text-center my-4 text-info">User Details</h1>
      <div className="col-md-8 p-4 my-5 shadow rounded bg-light mx-auto border border-info">
        <ul className="list-group list-group-flush">
          <li className="list-group-item   align-items-center">
            <b>Username : </b> {User.username}
          </li>
          <li className="list-group-item  align-items-center">
            <b>Email : </b> {User.email}
          </li>
          <li className="list-group-item  align-items-center">
            <b>Mobile : </b> {User.mobile}
          </li>
        </ul>
        <div className="text-center mt-4">
          <button
            type="button"
            className="btn btn-outline-secondary px-4"
            onClick={() => redirect(-1)}
          >
            <i className="fa-solid fa-arrow-left"></i> Back
          </button>
        </div>
      </div>
    </>
  );
};

export default SingleUser;

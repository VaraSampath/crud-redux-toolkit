"use client";
import { createUser, readUsers } from "@/store/userSlice";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const CreateForm = () => {
  const [userDetails, setUserDEtails] = useState({
    name: "",
    age: "",
    gender: "",
  });
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createUser(userDetails));
  };
  useEffect(() => {
    dispatch(readUsers());
  }, []);
  return (
    <div>
      CreateForm
      <form
        className="flex flex-col max-w-[500px] mx-auto gap-3"
        onSubmit={handleSubmit}
      >
        <label htmlFor="name">Name</label>
        <input
          className="px-2 py-1 text-black"
          type="text"
          id="name"
          name="name"
          required
          value={userDetails.name}
          onChange={(e) => {
            setUserDEtails((prevState) => ({
              ...prevState,
              [e.target.name]: e.target.value,
            }));
          }}
        />
        <label htmlFor="age">Age</label>
        <input
          className="px-2 py-1 text-black"
          type="text"
          id="age"
          name="age"
          value={userDetails.age}
          required
          onChange={(e) => {
            setUserDEtails((prevState) => ({
              ...prevState,
              [e.target.name]: e.target.value,
            }));
          }}
        />
        <label htmlFor="gender">Gender</label>
        <input
          className="px-2 py-1 text-black"
          type="text"
          id="gender"
          name="gender"
          value={userDetails.gender}
          required
          onChange={(e) => {
            setUserDEtails((prevState) => ({
              ...prevState,
              [e.target.name]: e.target.value,
            }));
          }}
        />
        <button
          type="submit"
          className=" bg-white text-black mt-8 py-2"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateForm;

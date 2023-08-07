import { editUser } from "@/store/userSlice";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

const EditModal = ({ data, setCloseModal }) => {
  const dispatch = useDispatch();
  const [userDetails, setUserDEtails] = useState({
    name: data.name,
    age: data.age,
    gender: data.gender,
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Edit", data.name);
    dispatch(editUser({ ...userDetails, id: data.id }));
    setCloseModal(true);
  };
  return (
    <div className=" absolute w-full overflow-hidden top-0 left-[0] bg-black h-full">
      <h1 className="text-center text-2xl my-24">Edit Form</h1>
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

export default EditModal;

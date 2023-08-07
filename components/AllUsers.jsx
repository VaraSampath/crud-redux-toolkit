import { deleteUser, readUsers } from "@/store/userSlice";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import EditModal from "./EditModal";

const AllUsers = () => {
  useEffect(() => {
    dispatch(readUsers());
  }, []);
  const dispatch = useDispatch();
  const [closeModal, setCloseModal] = useState(true);
  const handleDelete = (id) => {
    console.log("delete", id);
    dispatch(deleteUser(id));
  };

  const { users, loading } = useSelector((state) => state.users);
  if (loading) {
    return "Loading";
  }
  return (
    <>
      <div>
        <h1>All users</h1>
        {users.map((each) => (
          <div
            key={each.name}
            className="px-10 flex justify-between my-4"
          >
            {!closeModal && (
              <EditModal
                data={each}
                setCloseModal={setCloseModal}
              />
            )}
            <p>{each.name}</p>
            <p>{each.age}</p>
            <p>{each.gender}</p>
            <div className="flex gap-5">
              <button
                className="border-2 border-white px-3"
                onClick={() => {
                  setCloseModal(false);
                }}
              >
                Edit
              </button>
              <button
                className="border-2 border-white px-3"
                onClick={() => handleDelete(each.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default AllUsers;

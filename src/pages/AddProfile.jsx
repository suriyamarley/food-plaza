import React from "react";

import { MdSaveAlt } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import { toast } from "react-toastify";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase.config";
import { useNavigate, useParams } from "react-router-dom";
import { useStateValue } from "../contexts/StateProvider";

const AddProfile = ({ form, setForm }) => {
  const { number, address, city } = form;

  const [{ user }] = useStateValue();

  const { id } = useParams();

  const navigate = useNavigate();

  // saving user details
  const saveDetails = async (e) => {
    e.preventDefault();
    if (number && address && user?.uid) {
      if (!id) {
        try {
          await addDoc(collection(db, "userInfo"), {
            number: number,
            address: address,
            city: city,
            userId: user.uid,
          });
          toast.success("Profile Added Successfully");
        } catch (error) {
          console.log(error);
        }
      } else {
        try {
          await updateDoc(doc(db, "userInfo", id), {
            number: number,
            address: address,
            city: city,
            userId: user.uid,
          });
          toast.success("Profile Updated Successfully");
        } catch (error) {
          console.log(error);
        }
      }
      navigate(`/userinfo`);
    } else {
      toast.error("All fields are mandatory to fill");
    }
  };

  return (
    <div className="bg-white w-full h-full flex flex-col min-h-screen justify-center items-center text-white">
      <div className="p-6 rounded-lg mt-24 bg-gray-200 w-[95%] sm:w-[450px]">
        <form onSubmit={saveDetails} className="flex flex-col gap-y-8">
          <div className="text-center">
            <div className="inline-flex justify-center items-center bg-gray-200 py-1 px-3 rounded-lg gap-2 text-gray-400 font-medium md:text-lg">
              <h1>{id ? "Edit Profile" : "Add Profile"}</h1>
              <h1>
                <FaUserCircle />
              </h1>
            </div>
          </div>
          <input
            type="text"
            placeholder="User Name"
            value={user?.displayName}
            readOnly
            className="py-3 capitalize rounded pl-3 bg-black/25"
          />
          <input
            type="email"
            placeholder="Email"
            value={user?.email}
            readOnly
            className="py-3 rounded pl-3 bg-black/25"
          />
          <input
            type="number"
            placeholder="Mobile Number"
            value={number}
            onChange={(e) => setForm({ ...form, number: e.target.value })}
            className="py-3 rounded pl-3 bg-black/25"
          />
          <textarea
            type="text"
            placeholder="Address"
            value={address}
            rows={3}
            onChange={(e) => setForm({ ...form, address: e.target.value })}
            className="py-3 rounded pl-3 bg-black/25"
          />
          <input
            type="text"
            placeholder="City"
            value={city}
            onChange={(e) => setForm({ ...form, city: e.target.value })}
            className="py-3 rounded pl-3 bg-black/25"
          />
          <div>
            <button
              type="submit"
              className="bg-blue-700 py-2 px-3 rounded-lg font-medium inline-flex gap-x-2 items-center"
            >
              Save <MdSaveAlt />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProfile;

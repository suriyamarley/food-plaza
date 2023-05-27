import React, { useState } from "react";
import {
  MdFastfood,
  MdCloudUpload,
  MdDelete,
  MdFoodBank,
  MdAttachMoney,
} from "react-icons/md";
import { categories } from "../utils/data";
import Loader from "../components/Loader";
import {
  deleteObject,
  getDownloadURL,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { storage } from "../firebase.config";
import { getAllFoodItems, saveItem } from "../utils/firebasefunctions";
import { actionType } from "../contexts/reducer";
import { useStateValue } from "../contexts/StateProvider";
import { toast } from "react-toastify";

const CreateContainer = () => {
  // states
  const [title, setTitle] = useState("");
  const [calories, setCalories] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("Select Category");
  const [imageAsset, setImageAsset] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  // dispatch
  const [dispatch] = useStateValue();

  const uploadImage = (e) => {
    setIsLoading(true);
    const imageFile = e.target.files[0];
    const storageRef = ref(storage, `Images/${Date.now()}-${imageFile.name}`);
    const uploadTask = uploadBytesResumable(storageRef, imageFile);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const uploadProgress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log(uploadProgress);
      },
      (error) => {
        toast.error(`Error while uploading : Try Again...`);
        console.log(error);
        setTimeout(() => {
          setIsLoading(false);
        }, 4000);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setImageAsset(downloadURL);
          setIsLoading(false);
          toast.success("Image uploaded successfully...!");
        });
      }
    );
  };

  const deleteImage = () => {
    setIsLoading(true);
    const deleteRef = ref(storage, imageAsset);
    deleteObject(deleteRef).then(() => {
      setImageAsset(null);
      setIsLoading(false);
      toast.success("Image Deleted successfully...!");
    });
  };

  const saveDetails = () => {
    setIsLoading(true);
    try {
      if (!title || !calories || !imageAsset || !price || !category) {
        toast.error(`Required fields can't be empty`);
        setTimeout(() => {
          setIsLoading(false);
        }, 4000);
      } else {
        const data = {
          id: `${Date.now()}`,
          title: title,
          imageURL: imageAsset,
          category: category,
          calories: calories,
          qty: 1,
          price: price,
        };
        saveItem(data);
        setIsLoading(false);
        toast.success(`Data uploaded Sucessfully...`);
        clearData();
      }
    } catch (error) {
      console.log(error);
      toast.error(`Error while uploading : Try Again...`);
      setTimeout(() => {
        setIsLoading(false);
      }, 4000);
    }
    fetchData();
  };

  const clearData = () => {
    setTitle("");
    setImageAsset(null);
    setCalories("");
    setPrice("");
    setCategory("Select Category");
  };

  const fetchData = async () => {
    await getAllFoodItems().then((data) => {
      dispatch({
        type: actionType.SET_FOOD_ITEMS,
        foodItems: data,
      });
    });
  };

  return (
    <>
      <main className="mt-14 md:mt-20 px-4 md:px-16 py-4 w-full">
        <div className="w-full min-h-screen flex items-center justify-center">
          <div className="w-[90%] md:w-[75%] border border-gray-300 rounded-lg p-4 flex flex-col items-center justify-center gap-4">
            <div className="w-full py-2 border-b border-gray-300 flex items-center gap-2">
              <MdFastfood className="text-xl text-gray-700" />
              <input
                type="text"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Give me a title..."
                className="w-full h-full text-lg bg-transparent outline-none border-none placeholder:text-gray-400 text-textColor"
              />
            </div>
            <div className="w-full">
              <select
                onChange={(e) => setCategory(e.target.value)}
                value={category}
                className="outline-none w-full text-base border-b-2 border-gray-200 p-2 rounded-md cursor-pointer"
              >
                <option value="other" className="bg-white">
                  Select Category
                </option>
                {categories &&
                  categories.map((item) => {
                    return (
                      <option
                        key={item.id}
                        className="text-base border-0 outline-none capitalize bg-white text-headingColor"
                        value={item.urlParamName}
                      >
                        {item.name}
                      </option>
                    );
                  })}
              </select>
            </div>

            <div className="group flex justify-center items-center flex-col border-2 border-dotted border-gray-300 w-full h-225 md:h-340 cursor-pointer rounded-lg">
              {isLoading ? (
                <Loader />
              ) : (
                <>
                  {!imageAsset ? (
                    <>
                      <label className="w-full h-full flex flex-col items-center justify-center cursor-pointer">
                        <div className="w-full h-full flex flex-col items-center justify-center gap-2">
                          <MdCloudUpload className="text-gray-500 text-3xl hover:text-gray-700" />
                          <p className="text-gray-500 hover:text-gray-700">
                            Click here to upload
                          </p>
                        </div>
                        <input
                          type="file"
                          name="uploadimage"
                          accept="image/*"
                          onChange={uploadImage}
                          className="w-0 h-0"
                        />
                      </label>
                    </>
                  ) : (
                    <>
                      <div className="relative h-full">
                        <img
                          src={imageAsset}
                          alt="uploadedimage"
                          className="w-full h-full object-cover"
                        />
                        <button
                          type="button"
                          className="absolute bottom-3 right-3 p-3 rounded-full bg-red-500 text-xl cursor-pointer outline-none hover:shadow-md hover:bg-red-600  duration-500 transition-all ease-in-out"
                          onClick={deleteImage}
                        >
                          <MdDelete className="text-white" />
                        </button>
                      </div>
                    </>
                  )}
                </>
              )}
            </div>
            <div className="w-full flex flex-col md:flex-row items-center gap-3">
              <div className="w-full py-2 border-b border-gray-300 flex items-center gap-2">
                <MdFoodBank className="text-gray-700 text-2xl" />
                <input
                  type="text"
                  required
                  value={calories}
                  onChange={(e) => setCalories(e.target.value)}
                  placeholder="Calories*"
                  className="w-full h-full text-lg bg-transparent outline-none border-none placeholder:text-gray-400 text-textColor"
                />
              </div>

              <div className="w-full py-2 border-b border-gray-300 flex items-center gap-2">
                <MdAttachMoney className="text-gray-700 text-2xl" />
                <input
                  type="text"
                  required
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  placeholder="Price*"
                  className="w-full h-full text-lg bg-transparent outline-none border-none placeholder:text-gray-400 text-textColor"
                />
              </div>
            </div>

            <div className="flex items-center w-full">
              <button
                type="button"
                className="ml-0 md:ml-auto w-full md:w-auto border-none outline-none bg-emerald-500 hover:bg-emerald-600 duration-200 transition-all  px-12 py-2 rounded-lg text-lg text-white font-semibold"
                onClick={saveDetails}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default CreateContainer;

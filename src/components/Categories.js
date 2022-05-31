import React from "react";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div className="">
      <div className="hidden lg:flex">
        <div className="bg-white  rounded-3xl container h-80 w-full">
          <div className="w-full flex justify-between">
            <h1 className="font-bold  text-3xl px-4 py-4">Categories</h1>

            <Link to="#" className="font-bold hover:text-orange-400 px-20 py-4">
              See more{" > "}
            </Link>
          </div>
          <div className="w-full  h-480 flex px-10 py-4">
            <div className="flex b w-9/12">
              <div className="w-40 h-40 bg-white mx-auto py-auto rounded-full">
                <img
                  src="https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                  alt=""
                  className="w-40 h-40 rounded-full object-cover"
                />
                <h1 className="text-black font-bold text-center">Samsungs</h1>
              </div>
              <div className="w-40 h-40 bg-white mx-auto my-auto rounded-full">
                <img
                  src="https://images.unsplash.com/photo-1633053699034-459674171bec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
                  alt=""
                  className="w-40 h-40 rounded-full object-cover"
                />
                <h1 className="text-black font-bold text-center">Iphones</h1>
              </div>
              <div className="w-40 h-40 bg-white mx-auto py-auto rounded-full">
                <img
                  src="https://images.unsplash.com/photo-1598327105740-820e04db502e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2127&q=80"
                  alt=""
                  className="w-40 h-40 rounded-full object-cover"
                />
                <h1 className="text-black font-bold text-center">The MIs</h1>
              </div>
              <div className="w-40 h-40 bg-white mx-auto py-auto rounded-full">
                <img
                  src="https://images.unsplash.com/photo-1635870723802-e88d76ae324e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
                  alt=""
                  className="w-40 h-40 rounded-full object-cover"
                />
                <h1 className="text-black font-bold text-center">
                  Google Pixel
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className=" lg:hidden rounded-3xl bg-white h-60 w-full">
          <div className="w-full flex justify-between">
            <h1 className="font-bold pl-6 text-lg py-4 ">Categories</h1>

            <Link to="#" className="font-bold hover:text-orange-400 px-6 py-4">
              See more{" > "}
            </Link>
          </div>
          <div className="w-full    flex px-10 py-4">
            <div className="flex flex-row justify-between pb-10  overflow-x-scroll    w-full">
              <div className="h-14 w-14 bg-white mx-auto py-auto  rounded-full">
                <img
                  src="https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                  alt=""
                  className="w-14 h-14 rounded-full object-cover"
                />
                <h1 className="text-black text-xs font-bold text-center">
                  Samsungs
                </h1>
              </div>
              <div className="h-14 w-14 bg-white mx-auto my-auto rounded-full">
                <img
                  src="https://images.unsplash.com/photo-1633053699034-459674171bec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
                  alt=""
                  className="w-14 h-14 rounded-full object-cover"
                />
                <h1 className="text-black text-xs font-bold text-center">
                  Iphones
                </h1>
              </div>
              <div className="h-14 w-14 bg-white mx-auto py-auto rounded-full">
                <img
                  src="https://images.unsplash.com/photo-1598327105740-820e04db502e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2127&q=80"
                  alt=""
                  className="w-14 h-14 rounded-full object-cover"
                />
                <h1 className="text-black text-xs font-bold text-center">
                  Xiaomi
                </h1>
              </div>
              <div className=" h-14 w-14 bg-white mx-auto py-auto rounded-full">
                <img
                  src="https://images.unsplash.com/photo-1635870723802-e88d76ae324e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
                  alt=""
                  className="w-14 h-14 rounded-full object-cover"
                />
                <h1 className="text-black text-xs font-bold text-center">
                  Pixel
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;

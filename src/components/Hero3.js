import React from "react";

const Hero3 = () => {
  return (
    <div>
      <div className="bg-gray-200">
        <div className="lg:container md:w-full   mx-auto py-9 md:py-12 lg:py-24">
          <div className="relative md:bg-red-300   mx-4">
            <img
              src="https://images.unsplash.com/photo-1647503380147-e075b24f4cbe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              alt="A work table with house plants"
              className="w-full rounded-2xl hidden object-cover lg:block"
              style={{ height: "600px" }}
            />
            <img
              src="https://images.unsplash.com/photo-1647503380147-e075b24f4cbe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              alt="A work table with house plants"
              className="hidden sm:block  lg:hidden "
              style={{ width: "720px", height: "480px" }}
            />
            <img
              src="https://images.unsplash.com/photo-1647503380147-e075b24f4cbe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              alt="A work table with house plants"
              className="sm:hidden w-full h-full object-cover"
              style={{ width: "500px", height: "380px" }}
            />

            <div className="absolute z-10 top-0 left-0 mx-4 sm:mx-0 mt-36 sm:mt-0 sm:py-20 md:py-28 lg:py-20 xl:py-28 sm:pl-14 flex flex-col sm:justify-start items-start">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-semibold text-white sm:w-8/12">
                The Iphone 13 is Here
              </h1>
              <p className="text-base leading-normal text-gray-200 mt-4 sm:mt-5 sm:w-5/12">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
              <button className="hidden w-40 justify-center text-lg rounded sm:flex bg-gray-500 py-3 px-4 t font-bold text-white mt-8 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 hover:bg-gray-700">
                Explores
              </button>
            </div>
            <button className="absolute bottom-0 sm:hidden h-10 text-gray-300 bg-gray-400 text-base font-medium  mt-8 flex justify-center items-center w-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 hover:bg-gray-700">
              Explored
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero3;

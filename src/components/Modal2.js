import React, { useState } from "react";

function Modal2({ ref, state, close, children }) {
  const [modal, setModal] = useState(true);
  const showClass =
    state === true
      ? "fixed top-0 left-0 w-screen h-screen bg-[#00000060] modal z-50 opacity-1 transition-all"
      : "fixed -top-[100%] left-0 w-screen h-screen bg-[#00000060] modal z-50 opacity-0 transition-all";

  const showContentClass =
    state === true
      ? "mx-auto w-[100%] md:w-[32rem] scale-100 transition-all"
      : "mx-auto w-[100%] md:w-[32rem] scale-0 transition-all";

  return (
    <div>
      <>
        {/* {modal && ( */}
        <>
          {" "}
          <div
            class="relative z-10 bg-blue-200"
            aria-labelledby="modal-title"
            role="dialog"
            aria-modal="true"
            // onClick={() => {
            //   setModal(!modal);
            // }}
            // Layout
          >
            <div class="fixed inset-0 shadow bg-gray-500 bg-opacity-75 transition-opacity"></div>

            <div class="fixed z-10 inset-0 overflow-y-auto">
              <div class="flex w-full items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0">
                <div
                  // whileHover={{ scale: 1.2 }}
                  // animate={{ x: 0 }}
                  layout
                  transition={{ type: "spring", duration: 2, bounce: 0.3 }}
                  class="relative  w-full lg:w-[35rem] bg-white  rounded-xl text-left overflow-hidden shadow-xl transform transition-all sm:my-8  "
                >
                  <div class=" w-full px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                    <div class="sm:flex sm:items-start">
                      {/* <div class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                      <svg
                        class="h-6 w-6 text-red-600"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                        />
                      </svg>
                    </div> */}
                      {/* <button
                      className="w-full font-bold flex justify-end"
                      onClick={() => setModal(false)}
                    >
                      X
                    </button> */}
                      <div class="  flex items-center justify-center">
                        {children}
                      </div>
                    </div>
                  </div>
                  {/* <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                  <button
                    type="button"
                    class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                  >
                    Deactivate
                  </button>
                  <button
                    onClick={() => {
                      setModal(false);
                    }}
                    type="button"
                    class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                  >
                    Cancel
                  </button>
                </div> */}
                </div>
              </div>
            </div>
          </div>
        </>
        {/* )} */}

        {/* <div className={showClass} ref={ref} id="modal">
          <div className="w-full absolute top-1/2 left-1/2 -translate-y-2/4 -translate-x-2/4">
            <div className={showContentClass} id="modal-content">
              {children}
            </div>
          </div>
        </div> */}
      </>
    </div>
  );
}

export default Modal2;

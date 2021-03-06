import { Formik } from "formik";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import StripeCheckoutForm from "../components/CheckoutForm";
import OrderReview from "../components/OrderReview";
import { AddToShippingInfo, auth, db } from "../firebase/config";
import Arrow from "../assets/svg/dropdown-arrow.svg";
import { doc, onSnapshot } from "firebase/firestore";
import { login } from "../store/actions/userActions";
import Modal2 from "../components/Modal2";

export const SaveIcon = () => {
  return (
    <svg
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="save" stroke="currentColor">
        <path
          id="Vector"
          d="M19.8398 21.8682H5.83984C5.30941 21.8682 4.8007 21.6574 4.42563 21.2824C4.05056 20.9073 3.83984 20.3986 3.83984 19.8682V5.86816C3.83984 5.33773 4.05056 4.82902 4.42563 4.45395C4.8007 4.07888 5.30941 3.86816 5.83984 3.86816H16.8398L21.8398 8.86816V19.8682C21.8398 20.3986 21.6291 20.9073 21.2541 21.2824C20.879 21.6574 20.3703 21.8682 19.8398 21.8682Z"
          stroke-width="1"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          id="Vector_2"
          d="M17.8398 21.8682V13.8682H7.83984V21.8682"
          stroke-width="1"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          id="Vector_3"
          d="M7.83984 3.86816V8.86816H15.8398"
          stroke-width="1"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
    </svg>
  );
};
export const EditIcon = () => {
  const dispatch = useDispatch();
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   auth.onAuthStateChanged(async (user) => {
  //     if (user === null) return;

  //     const userId = user.uid;
  //     const docSnap = onSnapshot(doc(db, "users", `${userId}`), (doc) => {
  //       if (doc.data() !== null) {
  //         dispatch(login(doc.data()));
  //       } else {
  //         console.log("No such document!");
  //       }
  //     });
  //   });
  // }, [dispatch]);
  return (
    <svg
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="edit">
        <path
          id="Vector"
          d="M11.4424 4.79883H4.44238C3.91195 4.79883 3.40324 5.00954 3.02817 5.38461C2.6531 5.75969 2.44238 6.2684 2.44238 6.79883V20.7988C2.44238 21.3293 2.6531 21.838 3.02817 22.213C3.40324 22.5881 3.91195 22.7988 4.44238 22.7988H18.4424C18.9728 22.7988 19.4815 22.5881 19.8566 22.213C20.2317 21.838 20.4424 21.3293 20.4424 20.7988V13.7988"
          stroke="#90EE90"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          id="Vector_2"
          d="M18.9424 3.29905C19.3402 2.90123 19.8798 2.67773 20.4424 2.67773C21.005 2.67773 21.5446 2.90123 21.9424 3.29905C22.3402 3.69688 22.5637 4.23645 22.5637 4.79905C22.5637 5.36166 22.3402 5.90123 21.9424 6.29905L12.4424 15.7991L8.44238 16.7991L9.44238 12.7991L18.9424 3.29905Z"
          stroke="#90EE90"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
    </svg>
  );
};
export const CloseIcon = () => {
  return (
    <svg
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="x">
        <path
          id="Vector"
          d="M18 6.91699L6 18.917"
          stroke="black"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          id="Vector_2"
          d="M6 6.91699L18 18.917"
          stroke="black"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
    </svg>
  );
};

function Checkout() {
  const handleAccordion = (x) => {
    const activeCard = document.getElementById(`content-${x}`);
    activeCard.classList.toggle("h-0");
    activeCard.classList.toggle("opacity-0");
    activeCard.classList.toggle("h-fit");
    activeCard.classList.toggle("opacity-1");
    activeCard.classList.toggle("mt-8");
  };
  const Authed = useSelector((state) => state.auth);
  // console.log(Authed.currentUser.shippingInfo.firstName);
  console.log(Authed);
  const [openShippingModal, setOpenShippingModal] = useState(false);
  return (
    <div>
      <div className="flex flex-wrap pb-20 gap-8 lg:gap-0 justify-between container mt-6">
        <section className="w-full  lg:w-[60%]">
          <div
            class="flex flex-col gap-8 items-center justify-center h-fit"
            id="accordion_container"
          >
            <section className="w-full bg-white rounded-3xl pt-6 pb-8 px-8">
              {" "}
              <div className="text-xl font-bold flex justify-between items-center mt-2">
                <h2>Shipping info</h2>
                <span onClick={() => setOpenShippingModal(!openShippingModal)}>
                  {/* <EditIcon /> */}
                </span>
              </div>
              <div className="mt-4 mb-8 text-left ">
                {Authed.currentUser.shippingInfo === undefined && (
                  <div>
                    {/* <div className="w-10 h-10 border-4 border-dashed rounded-full animate-spin border-green-400"></div> */}
                    No implementation of that yet
                  </div>
                )}
                {Authed.currentUser.shippingInfo === undefined ||
                  (Authed.currentUser.shippingInfo === null && (
                    <div>
                      <p>No exisiting shipping info, please create one</p>
                    </div>
                  ))}
                {Authed.currentUser.shippingInfo === undefined ||
                  (Authed.currentUser.shippingInfo !== null && (
                    <span>
                      <p>
                        {Authed.currentUser.shippingInfo.firstName}{" "}
                        {Authed.currentUser.shippingInfo.lastName}
                      </p>
                      <p>{Authed.currentUser.shippingInfo.phoneNumber}</p>
                      <p>{Authed.currentUser.shippingInfo.address}</p>
                    </span>
                  ))}

                {/* {Authed.currentUser.shippingInfo != null ||
            (Authed.currentUser.shippingInfo !== undefined && (
              <>
                <h1>loading</h1>
              </>
            ))} */}
              </div>
            </section>
            {/* <div
              className="w-full bg-white px-4 py-4 rounded-3xl "
              id="1"
              data-accordion="01"
            >
              <div
                className="text-xl font-bold flex justify-between items-center mt-2"
                onClick={() => handleAccordion(1)}
              >
                <h2>Shipping information</h2>
                <span>
                  <img src={Arrow} alt="" height="10" />
                </span>
              </div>

              <div className="h-fit opacity-1 mt-8 content" id="content-1">
                {Authed.currentUser.shippingInfo === undefined && (
                  <div>
                    <div className="w-10 h-10 border-4 border-dashed rounded-full animate-spin border-green-400"></div>
                  </div>
                )}
                {Authed.currentUser.shippingInfo === undefined ||
                  (Authed.currentUser.shippingInfo === null && (
                    <div>
                      <p>
                        No exisiting shipping info, please create one in your
                        profile
                      </p>
                    </div>
                  ))}
                {Authed.currentUser.shippingInfo === undefined ||
                  (Authed.currentUser.shippingInfo !== null && (
                    <span>
                      <p>
                        {Authed.currentUser.shippingInfo.firstName}{" "}
                        {Authed.currentUser.shippingInfo.lastName}
                      </p>
                      <p>{Authed.currentUser.shippingInfo.phoneNumber}</p>
                      <p>{Authed.currentUser.shippingInfo.address}</p>
                    </span>
                  ))}
              </div>
            </div> */}

            <div
              className="w-full bg-white rounded-3xl px-4 py-4 "
              id="2"
              data-accordion="02"
            >
              <div
                className="text-xl font-bold flex justify-between items-center mt-2"
                onClick={() => handleAccordion(2)}
              >
                <h2>Payment Method</h2>
                <span>
                  <img src={Arrow} alt="" height="10" />
                </span>
              </div>

              <div className="h-0 opacity-0 content" id="content-2">
                <StripeCheckoutForm />
              </div>
            </div>
          </div>
        </section>

        {openShippingModal && (
          <Modal2>
            <div className=" w-[92%] md:w-[32rem] mx-auto">
              <div className="w-full font-bold text-2xl mb-8 flex justify-between">
                <span className="block">Edit Shipping Info</span>
                <span
                  className="block"
                  onClick={() => setOpenShippingModal(false)}
                >
                  <CloseIcon />
                </span>
              </div>{" "}
              <Formik
                initialValues={{
                  firstName: Authed.currentUser?.shippingInfo?.firstName,
                  lastName: Authed.currentUser?.shippingInfo?.lastName,
                  phoneNumber: Authed.currentUser?.shippingInfo?.phoneNumber,
                  address: Authed.currentUser?.shippingInfo?.address,
                }}
                validate={(values) => {
                  const errors = {};
                  if (!values.firstName) {
                    errors.firstName = "Required";
                  }
                  if (!values.lastName) {
                    errors.lastName = "Required";
                  }
                  if (!values.phoneNumber) {
                    errors.phoneNumber = "Required";
                  }
                  if (!values.address) {
                    errors.address = "Required";
                  }
                  return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                  let userId = Authed.currentUser.uid;
                  AddToShippingInfo(values, userId);
                  setOpenShippingModal(!openShippingModal);
                }}
              >
                {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  isSubmitting,
                }) => (
                  <form
                    onSubmit={handleSubmit}
                    className="flex flex-col w-full"
                  >
                    <div className="flex flex-col">
                      <div className="flex mb-4 flex-col w-full">
                        <label className="font-bold">First Name</label>
                        <input
                          type="text"
                          name="firstName"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.firstName}
                          placeholder="John"
                          className="input"
                        />
                        <p className="text-red-600">
                          {errors.firstName &&
                            touched.firstName &&
                            errors.firstName}
                        </p>
                      </div>
                      <div className="flex mb-4 flex-col w-full">
                        <label className="font-bold">Last Name</label>
                        <input
                          type="text"
                          name="lastName"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.lastName}
                          placeholder="Doe"
                          className="input"
                        />
                        <p className="text-red-600">
                          {errors.lastName &&
                            touched.lastName &&
                            errors.lastName}
                        </p>
                      </div>
                      <div className="flex mb-4 flex-col w-full">
                        <label className="font-bold">Phone Number</label>
                        <input
                          type="tel"
                          name="phoneNumber"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.phoneNumber}
                          placeholder="+234 000 0000"
                          className="input"
                        />
                        <p className="text-red-600">
                          {errors.phoneNumber &&
                            touched.phoneNumber &&
                            errors.phoneNumber}
                        </p>
                      </div>
                      <div className="flex mb-4 flex-col w-full">
                        <label className="font-bold">Address</label>
                        <textarea
                          type="text"
                          name="address"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.address}
                          placeholder="Enter your shipping Adderess"
                          className="input h-[6rem] resize-none"
                        />
                        <p className="text-red-600">
                          {errors.address && touched.address && errors.address}
                        </p>
                      </div>
                    </div>

                    <div className="w-full flex justify-end gap-4">
                      <button
                        type="submit"
                        className="btn mt-4 flex justify-center items-center gap-2"
                        disabled={isSubmitting}
                      >
                        <SaveIcon />
                        Save
                      </button>
                    </div>
                  </form>
                )}
              </Formik>
            </div>
          </Modal2>
        )}
        <section className="w-full lg:w-[35%]">
          <div className="">
            <OrderReview />
          </div>
        </section>
      </div>
    </div>
  );
}

export default Checkout;

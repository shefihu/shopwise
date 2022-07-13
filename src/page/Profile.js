import React from "react";
import { useDispatch } from "react-redux";
import ProfileInfo from "../components/profile/ProfileInfo";
import ResetPassword from "../components/profile/ResetPassword";
import ShippingInfo from "../components/profile/ShippingInfo";
import { signingOut } from "../firebase/config";
import { logout } from "../store/actions/userActions";
import LogoutIcon from "../assets/svg/logout.svg";
const Profile = () => {
  const dispatch = useDispatch();
  return (
    <div>
      {" "}
      <div className="container h-screen pb-20">
        <div className="w-full my-6 flex justify-between items-center">
          <h2 className="page_heading text-4xl font-bold">Profile</h2>
        </div>
        <div className="flex  flex-wrap lg:flex-nowrap   justify-center mt-6">
          <section className="w-full lg:w-full ">
            <ProfileInfo />
          </section>

          {/* <section className="w-full lg:pl-20 pt-4 lg:w-1/2">
            <div className="flex w-full flex-col gap-8 items-center justify-center h-fit">
              <div className="w-full ">
                <ShippingInfo />
              </div>

              <div className="w-full">
                <ResetPassword />
              </div>
            </div>
          </section> */}
        </div>
      </div>
    </div>
  );
};

export default Profile;

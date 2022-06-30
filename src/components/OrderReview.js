import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const OrderReview = () => {
  const dispatch = useDispatch();
  const orderItems = useSelector((state) => state.orders.orderItems);
  const cartItems = useSelector((state) => state.favLists.favItems);
  // const totalCartPrice = useSelector(
  //   (state) => state.cart.totalCartPrice
  // );
  console.log(orderItems);
  //tax
  const [tax, setTax] = useState(10000);
  return (
    <div>
      {" "}
      <div className="bg-white px-4 rounded-3xl py-4 flex flex-col gap-8 h-fit">
        <p className="font-black">Order Reviews</p>

        <div className="flex flex-col gap-6">
          {cartItems.map((product) => {
            const {
              id,
              name,
              activeType,
              photo,
              quantity,
              price,
              totalItemPrice,
            } = product;

            return (
              <div key={id} className="flex items-center justify-start gap-4">
                <div className="w-40 h-30 lg:w-40 lg:h-40 w-30 h-30  flex items-center flex-[0.4]">
                  <img
                    src={photo}
                    alt=""
                    className="w-full  object-cover h-full"
                  />
                </div>
                <div className="flex-[0.6]">
                  <p className="font-bold">{name}</p>
                  <p className="font-black text-xs">₦{price}</p>
                  <p className="text-xs">Quantity : {quantity}</p>
                </div>

                {/* <Image
                  src={TrashIcon}
                  alt="Delete"
                  width="20"
                  height="20"
                  className="float-right"
                  onClick={() => {
                    dispatch(RemoveFromCart(product));
                  }}
                /> */}
              </div>
            );
          })}
        </div>
        <section>
          {orderItems.map((orderItem) => {
            return (
              <>
                <div className="border-t border-muted py-6">
                  <div className="flex justify-between items-center">
                    <p className="text-sm">Subtotal</p>
                    <p className="font-black text-xl">
                      ₦{orderItem.TotalPrice}
                    </p>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="text-sm">Tax</p>
                    <p className="font-black text-xl">₦{tax}</p>
                  </div>
                </div>

                <div className="flex justify-between items-center border-t border-muted py-6">
                  <p className="text-sm">Total</p>
                  <p className="font-black text-2xl">
                    ₦{tax + orderItem.TotalPrice}
                  </p>
                </div>
              </>
            );
          })}

          <button className="bg-green-300 py-3 rounded-3xl text-white font-bold text-lg w-full">
            Purchase
          </button>
        </section>
      </div>
    </div>
  );
};

export default OrderReview;

import React, { useEffect, useState } from "react";
import { classnames } from "../utils/classnames";
const ScrolltoTop = () => {
  const [isVisible, setIsVisible] = useState();
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
      if (window.pageYOffset < 300) {
        setIsVisible(false);
      }
    } else {
      setIsVisible(false);
    }
  };
  const scroler = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  });
  return (
    <div className="fixed bottom-2 right-2">
      <button
        type="button"
        onClick={scroler}
        className={classnames(
          isVisible ? "opacity-100" : "opacity-0",
          "inline-flex items-center p-3  font-bold rounded-full shadow-sm text-white bg-green-400 transition-opacity hover:bg-green-800"
        )}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          class="bi bi-arrow-up-circle"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"
          />
        </svg>
      </button>
    </div>
  );
};

export default ScrolltoTop;

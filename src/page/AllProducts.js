import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";
import { gaming, product } from "../data/Products";
import Slider, { Range } from "rc-slider";
import "rc-slider/assets/index.css";
import PriceRangeSlider from "../components/PriceRangeSlider";
import { OpenFilterNot } from "../animations/filter";
const AllProducts = () => {
  const [filterbox, setFilterbox] = useState(false);
  const [price, setPrice] = useState([1, 40000]);
  const [pageNumber, setPageNumber] = useState(0);
  const productsPerPage = 8;
  const pagesVisited = pageNumber * productsPerPage;
  const displayProducts = product.slice(
    pagesVisited,
    pagesVisited + productsPerPage
  );

  const pageCount = Math.ceil(product.length / productsPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  const prices = product.map((y) => y.price);
  console.log(price);
  console.log(prices);
  const moreforty = () => {
    setFilterbox(true);
    setPrice(prices);
  };
  console.log(filterbox);

  const [productArray, setProductArray] = useState(displayProducts);

  const [thumb, setThumb] = useState({
    lower: 10000,
    upper: 70000,
  });

  const filtering = () => {
    const LowerThumb = document
      .querySelector(".horizontal-slider")
      .childNodes[3].getAttribute("aria-valueNow");
    const UpperThumb = document
      .querySelector(".horizontal-slider")
      .childNodes[4].getAttribute("aria-valueNow");

    setThumb({
      lower: Number(LowerThumb),
      upper: Number(UpperThumb),
    });
  };

  useEffect(() => {
    const filteredProducts = product.filter((product) => {
      if (
        product.sellingPrice >= thumb.lower &&
        product.sellingPrice <= thumb.upper
      ) {
        return displayProducts;
      }
    });
    setProductArray(filteredProducts);
  }, [thumb]);
  return (
    <div>
      <div className="h-full container pb-20">
        <div className="lg:h-40 h-32  flex items-center justify-between">
          <h1 className="lg:text-4xl text-sm font-bold ">All Products</h1>
          {/* <div
            onClick={moreforty}
            className="border-2 flex items-center justify-between border-green-300 w-20 h-10 lg:w-40 lg:h-14 rounded-xl cursor-pointer "
          >
            <h1 className="font-bold text-xs lg:text-lg mx-auto">Filter</h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="green"
              className="mx-auto bi bi-funnel-fill"
              viewBox="0 0 16 16"
            >
              <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5v-2z" />
            </svg>
            {filterbox && (
              <>
                {" "}
                <div className="w-80 bg-white rounded-xl h-40 absolute mt-60  mr-40">
                  <PriceRangeSlider thumb={thumb} />
                  <button
                    className=" py-2 px-6 mr-2 float-right rounded-xl bg-green-300 mt-4"
                    onClick={() => {
                      filtering();
                      // OpenFilterNot();
                      // filter();
                      setFilterbox(false);
                    }}
                  >
                    Apply
                  </button>
                  <button
                    onClick={() => {
                      setFilterbox(false);
                    }}
                  >
                    cancel
                  </button>
                </div>
              </>
            )}
          </div> */}
        </div>
        <div className="grid grid-cols-2 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {displayProducts.map((product) => (
            <div className=" bg-white rounded-lg h-48  lg:h-96">
              <a key={product.id} href={`/product?id=${product.id}`}>
                <div className="w-full aspect-w-1 aspect-h-1 bg-white rounded-t-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                  <img
                    src={product.thumbnail}
                    alt={product.imageAlt}
                    className="w-full lg:h-60 h-20 object-center object-cover group-hover:opacity-75"
                  />
                  {/* <button className="lg:flex hidden justify-end ml-40 pt-14  w-40 text-white absolute">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="26"
                      height="26"
                      fill="green"
                      class="bi bi-cart3"
                      viewBox="0 0 16 16"
                    >
                      <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                    </svg>
                  </button> */}
                </div>
              </a>
              <h3 className="mt-4 lg:py-4 pl-4 text-xs lg:text-sm text-gray-700">
                {product.name}
              </h3>
              <p className="mt-1 pl-4 text-xs lg:text-lg font-medium text-gray-900">
                {product.price}
              </p>
            </div>
          ))}
        </div>
        <div className="container  flex justify-center h-10 mt-20 ">
          <ReactPaginate
            previousLabel={"Previous"}
            nextLabel={"Next"}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName=" w-96 flex justify-between"
            previousLinkClassName=""
            nextLinkClassName=""
            disabledClassName=""
            activeClassName=""
          />
        </div>
      </div>
    </div>
  );
};

export default AllProducts;

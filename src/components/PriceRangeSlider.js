import React, { useState } from "react";
import ReactSlider from "react-slider";
import SliderStyle from "../styles/slider.module.css";
const PriceRangeSlider = ({ thumb, onclick, onchange }) => {
  const [onthumb, setonThumb] = useState(thumb);
  return (
    <div>
      {" "}
      <div onClick={onclick} onChange={onchange} onChangeCapture={onclick}>
        <ReactSlider
          className="horizontal-slider mx-auto w-[18rem] top-100"
          thumbClassName={SliderStyle.thumb}
          trackClassName={SliderStyle.track}
          defaultValue={[10000, 70000]}
          ariaLabelledby={["Lower-thumb", "Upper-thumb"]}
          ariaValuetext={(state) => {}}
          onChange={(state) => {
            setonThumb({
              lower: state[0],
              upper: state[1],
            });
          }}
          // renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
          pearling
          min={10000}
          max={70000}
          minDistance={500}
        />
      </div>
      <div className="flex mt-10 justify-between items-center pt-4">
        <span className=" inline-block">₦ {onthumb.lower}</span>
        <span className=" inline-block">₦ {onthumb.upper}</span>
      </div>
    </div>
  );
};

export default PriceRangeSlider;

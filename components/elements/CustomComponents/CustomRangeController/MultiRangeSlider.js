import React, { useState } from 'react';
import Slider from 'react-slider';
// import './style.css';

const MultiRangeSlider = () => {
  const [values, setValues] = useState([0, 100]);
  const handleChange = (newValues) => setValues(newValues);

  return (
    <>
      <Slider
        className="slider"
        value={values}
        onChange={handleChange}
        min={0}
        max={100}
      />
      <div className="slider-typo-input">
        <div>
          {/* <label htmlFor="minPrice">Min Price:</label> */}
          <input
            type="number"
            id="minPrice"
            value={values[0]}
            onChange={(e) => handleChange([+e.target.value, values[1]])}
          />
        </div>
        <div>
          {/* <label htmlFor="maxPrice">Max Price:</label> */}
          <input
            type="number"
            id="maxPrice"
            value={values[1]}
            onChange={(e) => handleChange([values[0], +e.target.value])}
          />
        </div>
      </div>
    </>
  );
};

export default MultiRangeSlider;
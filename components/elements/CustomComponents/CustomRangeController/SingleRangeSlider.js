import React, { useState } from 'react';
// import Slider from 'react-slider';
import ReactSlider from 'react-slider'
// import './style.css';

const SingleRangeSlider = ({ min, max }) => {
    const [values, setValues] = useState([min, max]);
    const handleChange = (newValues) => setValues(newValues);

    return (
        <>
            {/* <ReactSlider
                className="horizontal-slider" value={values}
                onChange={handleChange}
                min={min}
                max={max}
            /> */}
            <ReactSlider
                className="horizontal-slider"
                thumbClassName="example-thumb"
                trackClassName="example-track"
                renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
            />
        </>
    );
};

export default SingleRangeSlider;
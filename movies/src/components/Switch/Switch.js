import React, { useState } from "react";
import "./Switch.css";

const Switch = (props) => {

  // const [checked, setChecked] = useState(props.checked)

  return (
    <label className="switch__label">
      <input
        type="checkbox"
        className="switch__input"
        checked={props.checked}
        onChange={props.handleChange}
      />
      <span className="switch__slider" />
    </label>
  );
};

export default Switch;

import React from 'react';
import "./Button.css"

const Button = ({ buttonText, clicked, icon, customClass }) => {
  return (
    <>
      <button onClick={clicked} className={customClass + " smallScreen"}><i className={icon}></i><span>{ buttonText }</span></button>
    </>
  );
}

export default Button;
import React from 'react'

const Button = ({ onClick, active}) => {
  if (active) {
    return (
      <div onClick={onClick} className={"button-component"}>
        <img src={require("../img/check.jpeg")} className={"button-icon"}/>
        <p>Stop</p>
      </div>
    )
  } else {
    return (
      <div onClick={onClick} className={"button-component"}>
        <img src={require("../img/negative.jpeg")} className={"button-icon"}/>
        <p>Activate</p>
      </div>
    )
  }

}

export default Button

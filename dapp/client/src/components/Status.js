import React from 'react'

const Status = ({ active }) => {
  if (active) {
    return (
      <div className={"status-component"}>
        <img src={require("../img/check.jpeg")} className={"status-icon"}/>
        <p>Open</p>
      </div>
    )
  } else {
    return (
      <div className={"status-component"}>
        <img src={require("../img/negative.jpeg")} className={"status-icon"}/>
        <p>Closed</p>
      </div>
    )
  }

}

export default Status

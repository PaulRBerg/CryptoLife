import React from 'react'

const NavBar = ({title, icon}) => {
  return (
    <div className={"navbar-component"}>
      <p className={"navbar-title"}>{title}</p>
      <img src={require('../img/' + icon)} className={"navbar-icon"} />
    </div>
  )
}

export default NavBar

import React, { Component } from 'react'

import EmployeeList from './EmployeeList'

class Dashboard extends Component {
  render () {
    return (
      <div>
        <h1>Employee List>
        <img src={require("search.png")} />
        <EmployeeList />
      </div>
    )
  }
}

export default Dashboard

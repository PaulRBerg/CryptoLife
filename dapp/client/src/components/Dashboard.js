import React, { Component } from 'react'

import EmployeeList from './EmployeeList'
import NavBar from './NavBar'

class Dashboard extends Component {
  render () {
    return (
      <div>
        <NavBar title="Employee List" icon="search.jpeg"/>
        <EmployeeList />
      </div>
    )
  }
}

export default Dashboard

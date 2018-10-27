import React, { Component } from 'react'

import EmployeeListItem from './EmployeeListItem'
import Employees from '../mockData.js'

class EmployeeList extends Component {
  render () {
    return (
      <ul>
          {Employees.map(function(employee, index){
              return <EmployeeListItem key={index}
                                       employee={employee}
                                       />;
            })}
      </ul>
    )
  }
}

export default EmployeeList

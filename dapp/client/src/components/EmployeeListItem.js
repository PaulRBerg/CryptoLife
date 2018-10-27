import React, { Component } from 'react'

import Button from './Button'

class EmployeeListItem extends Component {
  render () {
    const { name, pic, address } = this.props.employee;

    return (
      <div className={"employee-list-item"}>
        <div className={"employee-details"}>
          <img src={require('../img/' + pic)} className={"employee-avatar"} />
          <div>
            <p className={"employee-name"}>{name}</p>
            <p className={"employee-address"}>{address}</p>
          </div>
        </div>
        <Button className={"employee-actions"} active={true} />
      </div>
    )
  }
}

export default EmployeeListItem

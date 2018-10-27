import React, { Component } from 'react'

import Button from './Button'

class EmployeeListItem extends Component {
  render () {
    const { name, pic, address } = this.props.employee;

    return (
      <div>
        <img src={require('../img/' + pic)} className={"employee-avatar"} />
        <h1 className={"employee-name"}>{name}</h1>
        <p className={"employee-address"}>{address}</p>
        <Button>Click</Button>
      </div>
    )
  }
}

export default EmployeeListItem

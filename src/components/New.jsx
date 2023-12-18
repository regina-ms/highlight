import React, { Component } from 'react'

export default class New extends Component {
  render() {
    return (
        <div className="wrap-item wrap-item-new">
            <span className="label">New!</span>
            {this.props.children}
        </div>
    )
  }
}

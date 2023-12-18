import React, { Component } from 'react'

export default class Popular extends Component {
  render() {
    return (
        <div className="wrap-item wrap-item-popular">
            <span className="label">Popular!</span>
            {this.props.children}
        </div>
    )
  }
}

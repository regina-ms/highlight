/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'

export default class Article extends Component {
    render() {
        return (
            <div className="item item-article">
                <h3><a href="#">{this.props.title}</a></h3>
                <p className="views">Прочтений: {this.props.views}</p>
            </div>
        )
    }
}

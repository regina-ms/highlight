import React, { Component } from 'react'

export default class Video extends Component {
    render() {
        return (
            <div className="item item-video">
                <iframe src={this.props.url} allow="autoplay; encrypted-media" allowFullScreen title={this.props.url}></iframe>
                <p className="views">Просмотров: {this.props.views}</p>
            </div>
        )
    }
}

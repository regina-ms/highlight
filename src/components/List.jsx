import React, { Component } from 'react'
import Video from './Video';
import Article from './Article';
import { withTag } from './withTag';

const ArticleWithTag = withTag(Article);
const VideoWithTag = withTag(Video);

export default class List extends Component {
    render() {
        return this.props.list.map((item, index) => {
            switch (item.type) {
                case 'video':
                    return (
                        <VideoWithTag {...item} key={index}/>
                    );

                case 'article':
                    return (
                        <ArticleWithTag {...item} key={index}/>
                    );
                default:
                    return null
            }
        });
    }
}

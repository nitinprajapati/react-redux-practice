import React, { Component } from 'react';
import './posts.scss'
class Posts extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            posts: []
        };
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(json => this.setState({posts: json}))
    }

    render() {
        return (
            <ul className="list-inline list-unstyled">
                {this.state.posts.map( post => {
                    return <li key={post.id}>
                        <div class="media-body">
                            <h4 className="post-title"> {post.title}</h4>
                            <p className="post-title">
                            {post.body}
                            </p>
                        </div>
                    </li>
                })}
            </ul>
        );
    }
}

export default Posts;
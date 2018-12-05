import React, { Component } from 'react';
import {fetchPosts} from './../../actions/postsActions';
import {connect} from 'react-redux';
import { bindActionCreators } from "redux";
import './posts.scss';
import Spinner from "./../loader/spinner";

class Posts extends Component {
    componentDidMount(){
      this.props.getPosts(); 
    }

    error(){
        if(this.props.posts.error)
        return (
            <div>Service is down. Please try again...</div>
        )
    }

    render() {
        return (
            <React.Fragment>
                <Spinner 
                    status={this.props.posts.fetching}
                    message={this.props.posts.message} 
                    loaderType={this.props.posts.loaderType}
                    color={this.props.posts.color}
                   
                />
                <ul className="list-inline list-unstyled">
                    {this.props.posts.data.length !== 0 && this.props.posts.data.map( post => {
                        return <li key={post.id}>
                            <div className="media-body">
                                <h4 className="post-title"> {post.title}</h4>
                                <p className="post-title">
                                {post.body}
                                </p>
                            </div>
                        </li>
                    })}
                    {this.error()}
                </ul>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) =>{
    return {
        posts: state.posts
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        getPosts: fetchPosts
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
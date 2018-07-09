import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPosts } from '../actions';

class PostsIndex extends Component {

    

    renderPosts() {
        if(this.props.posts && Object.keys(this.props.posts).length) {
            return _.map(this.props.posts, (post, ind) => {
                console.log('Posts: ', this.props.posts);
                return (
                    <Link key={ind} to={`/posts/${post.id}`}>
                        <li key={post.id} className='list-group-item'>
                            {post.title}
                        </li>
                    </Link>
                );
            });
        } else {
            return (
                <h4 className='text-danger'>No Posts Yet...</h4>
            );
        }
    }

    render() {
        return (
            <div>
                <div className='text-xs-right'>
                    <Link className='btn btn-primary' to='/posts/new'>
                        Add a Post
                    </Link>
                </div>
                <h3>Posts</h3>
                <ul className='list-group'>
                    {this.renderPosts()}
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { posts: state.posts };
}

export default connect(mapStateToProps, { fetchPosts })(PostsIndex);

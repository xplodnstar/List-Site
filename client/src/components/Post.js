import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { getPost } from '../actions/actions';



const Post = (props) => {
    useEffect(() => {
        getPost(props.post_id)
    }, [props.post_id])

    return (
        <div>
            <Link to={'/category/' + props.post.catSlug} className="postLink"> &lt; back to list</Link><br /><br />
            <div className="postNav"></div>
            <div className="postTitle">{props.post.title}</div>
            <div className="postPic"><img src={props.post.pic_url} alt={props.post.title}></img></div>
            <div className="postBody">{props.post.body}</div>
        </div>
    )
}

function mapStateToProps(appState, ownProps) {
    return {
        post: appState.post,
        post_id: ownProps.match.params.post_id,
    }
}

export default connect(mapStateToProps)(Post)

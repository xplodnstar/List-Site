import React, { useEffect } from 'react';
import { getCurrCat, getPostList } from '../actions/actions';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import moment from 'moment'

const PostList = (props) => {
    useEffect(() => {
        getCurrCat(props.slug)
        getPostList(props.categoryId)
    }, [props.slug, props.categoryId])

    return (
        <div>
            <h1>{props.name}</h1>
            <Link to="/" className="listLink"> &lt; back to home</Link><br /><br />
            <Link to="/form" className="listLink">create a posting</Link>
            <div className="listSearch"></div>
            <div className="listNav"></div>
            <ul>
                {props.posts.map(post => (
                    <li key={`'post ' + ${post.id}`} className="listPost">
                        <div>
                            {post.date} < Link to={`/post/${post.post_id}`}>{post.title}</Link>&nbsp;({post.location})
                        </div>
                    </li>
                ))}
            </ul>
        </div >
    )
}

function mapStateToProps(appState, ownProps) {
    return {
        name: appState.currCat.name,
        categoryId: appState.currCat.categoryId,
        slug: ownProps.match.params.slug,
        posts: appState.posts.map(item => {
            return {
                ...item,
                date: moment(item.timestamp)
                    .format('MMM-DD')
            }
        })
    }
}

export default connect(mapStateToProps)(PostList)

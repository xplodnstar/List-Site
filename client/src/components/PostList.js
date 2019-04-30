import React, { useEffect } from 'react';
import { getCurrCat, getPostList } from '../actions/actions';
import { connect } from 'react-redux'


const PostList = (props) => {
    useEffect(() => {
        getCurrCat(props.slug)
        getPostList()
    }, [props.slug])
}

return (
    <div>
        <h1>{props.name}</h1>
        <div className="listSearch"></div>
        <div className="listNav"></div>
        <ul>
            {/* {props.xxx.map(post => (
                <li key={`'post ' + ${post.id}`}><Link to={`/${post.id}`}>{post.title}</Link></li>
            ))} */}
        </ul>
    </div>
)

function mapStateToProps(appState, ownProps) {
    console.log('here', appState)
    return {
        name: appState.currCat.name,
        slug: ownProps.match.params.slug
    }
}

export default connect(mapStateToProps)(PostList)

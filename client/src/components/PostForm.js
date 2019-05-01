import React, { useState, useEffect } from 'react';
import { makePost, getLoc } from '../actions/actions';
import { connect } from 'react-redux'
import PostCats from './PostCats'

const PostForm = (props) => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [category_id, setCatId] = useState('')
    const [location_id, setLocId] = useState('')
    const [pic_url, setPic] = useState('')

    useEffect(() => {
        getLoc()
    }, [])

    function handleSubmit(e) {
        e.preventDefault()
        makePost(title, body, location_id, props.match.params.category_id, pic_url).then(() => {
            props.history.push('/category/' + props.slug)
        })
    }

    return (
        <div className="postForm">
            <form onSubmit={handleSubmit}>
                <div className="formTitle">
                    <label for="title">Enter a title</label>
                    <input type="text" id="title" name="title" placeholder="50 characters" onChange={e => setTitle(e.target.value)} />
                </div>
                <div className="formBody">
                    <label for="body">Enter a description</label>
                    <textarea col='100' row='30' id="body" name="body" placeholder="255 characters" onChange={e => setBody(e.target.value)} />
                </div>
                {/* <select id="category" placeholder="Select a category" onChange={e => setCatId(e.target.value)}>Select a category
                {props.categories.map(cat => (
                    <option key={cat.id} className="parentCats">
                        {cat.name}
                        <PostCats list={cat.child_categories} className="childCats" />
                    </option>
                ))}
                </select> */}
                <div className="formLoc">
                    <label for="location">Select a location</label>
                    <select id="location" name="location" onChange={e => setLocId(e.target.value)}>
                        {props.locations.map(loc => (
                            <option key={loc.loc_id}>
                                {loc.location}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="formPic">
                    <label for="picture">Add a link for your image</label>
                    <input type="text" id="picture" name="picture" placeholder="Will not upload, link only" onChange={e => setPic(e.target.value)} />
                </div>
                <div className="formButton">
                    <button type="submit"></button>
                </div>
            </form>
        </div>
    )
}

function mapStateToProps(appState, ownProps) {
    console.log(appState)
    return {
        ...ownProps,
        slug: appState.PostList.slug,
        post: appState.post,
        locations: appState.locations,
        categories: appState.categories,
    }
}

export default connect(mapStateToProps)(PostForm)

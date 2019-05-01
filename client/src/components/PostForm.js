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
            props.history.goBack()
        })
    }

    return (
        <div>
            <form>
                <input type="text" id="title" placeholder="Enter a title, 50 characters" onChange={e => setTitle(e.target.value)} />
                <textarea col='100' row='30' id="body" placeholder="Enter a description, 255 characters" onChange={e => setBody(e.target.value)} />
                {/* <select id="category" placeholder="Select a category" onChange={e => setCatId(e.target.value)}>Select a category
                {props.categories.map(cat => (
                    <option key={cat.id} className="parentCats">
                        {cat.name}
                        <PostCats list={cat.child_categories} className="childCats" />
                    </option>
                ))}
                </select> */}
                <select id="location" placeholder="Select a location" onChange={e => setLocId(e.target.value)}>Select a location
                 {props.locations.map(loc => (
                    <option key={loc.loc_id}>
                        {loc.location}
                    </option>
                ))}
                </select>
                <input type="text" id="picture" placeholder="Add a link for your image" onChange={e => setPic(e.target.value)} />
                <button type="submit"></button>
            </form>
        </div>
    )
}

function mapStateToProps(appState) {
    console.log(appState)
    return {
        post: appState.post,
        locations: appState.locations,
        categories: appState.categories,
    }
}

export default connect(mapStateToProps)(PostForm)

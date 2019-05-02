import React, { useState, useEffect } from 'react';
import { makePost, getLoc } from '../actions/actions';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const PostForm = (props) => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [location_id, setLocId] = useState('')
    const [pic_url, setPic] = useState('')

    useEffect(() => {
        getLoc()
    }, [])

    function handleSubmit(e) {
        e.preventDefault()
        makePost(title, body, props.match.params.category_id, location_id, pic_url)
        // .then(() => {
        //     props.history.goBack()
        //     // '/' + props.slug
        // })
    }

    return (
        <div>
            <div className="formHeader"><h1>Create your own post</h1></div>
            <form onSubmit={handleSubmit} className="postForm">
                <div className="formTitle">
                    <label htmlFor="title">Enter a title</label>
                    <input type="text" id="title" name="title" placeholder="50 characters" onChange={e => setTitle(e.target.value)} />
                </div><br />
                <div className="formBody">
                    <label htmlFor="body">Enter a description</label>
                    <textarea cols="40" rows="10" id="body" name="body" placeholder="255 characters" onChange={e => setBody(e.target.value)} />
                </div><br />
                <div className="formLoc">
                    <label htmlFor="location">Select a location</label>
                    <select id="location" name="location" onChange={e => setLocId(e.target.value)}>
                        <option>
                            Select a location
                        </option>
                        {props.locations.map(loc => (
                            <option key={loc.loc_id} value={loc.loc_id}>
                                {loc.location}
                            </option>
                        ))}
                    </select>
                </div><br />
                <div className="formPic">
                    <label htmlFor="picture">Add a link for your image</label>
                    <input type="text" id="picture" name="picture" placeholder="Will not upload, link only" onChange={e => setPic(e.target.value)} />
                </div><br />
                <div className="formButton">
                    <button type="submit">submit new post</button><br />
                    <Link to={'/'}> &lt; back to home</Link>
                </div>
            </form>
        </div>
    )
}

function mapStateToProps(appState, ownProps) {
    return {
        ...ownProps,
        slug: appState.currCat.slug,
        locations: appState.locations,
    }
}

export default connect(mapStateToProps)(PostForm)

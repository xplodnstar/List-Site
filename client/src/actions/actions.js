import store from '../store'
import axios from 'axios'

// get category list
export function getCats() {
    axios.get('/api/categories').then(resp => {
        store.dispatch({
            type: 'GET_CATS',
            cats1: [resp.data[0], resp.data[3], resp.data[5]],
            cats2: [resp.data[1], resp.data[4]],
            cats3: [resp.data[2], resp.data[6], resp.data[7]],
            categories: resp.data
        })
    })
}

// get single category
export function getCurrCat(slug) {
    if (slug) {
        axios.get('/api/category/' + slug).then(resp => {
            store.dispatch({
                type: 'GET_CURR_CAT',
                payload: resp.data
            })
        })
    }
}

// get post list within single category
export function getPostList(category_id) {
    if (category_id) {
        axios.get('/api/posts/' + category_id).then(resp => {
            store.dispatch({
                type: 'GET_POSTS',
                payload: resp.data
            })
        })
    }
}

// get single post
export function getPost(post_id) {
    axios.get('/api/post/' + post_id).then(resp => {
        store.dispatch({
            type: 'GET_POST',
            payload: resp.data
        })
    })
}

// submit a new post
export function makePost(title, body, location_id, category_id, pic_url) {
    axios.post('/api/post', { title, body, location_id, category_id, pic_url }).then(() => {
        getPost()
    })
}

// get location list
export function getLoc() {
    axios.get('/api/locations').then(resp => {
        store.dispatch({
            type: 'GET_LOC',
            payload: resp.data
        })
    })
}


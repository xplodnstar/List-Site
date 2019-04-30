import store from '../store'
import axios from 'axios'

export function getCats() {
    axios.get('/api/categories').then(resp => {
        store.dispatch({
            type: 'GET_CATS',
            cats1: [resp.data[0], resp.data[3], resp.data[5]],
            cats2: [resp.data[1], resp.data[4]],
            cats3: [resp.data[2], resp.data[6], resp.data[7]],
        })
    })
}

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

export function getPostList(category_id) {
    axios.get('/api/posts/:category_id').then(resp => {
        store.dispatch({
            type: 'GET_POSTS',
            payload: [resp.data]
        })
    })
}

// export function getPost() {
//     axios.get('/api/post').then(resp => {
//         store.dispatch({
//             type: 'GET_POST',
//             postTitle: resp.data.title,
//             postBody: resp.data.body,
//             postPic: resp.data.pic_url,
//             postURL: resp.data.url,
//             postTime: resp.data.timestamp,
//             postLoc: resp.data.location_id,
//             postCat: resp.data.category_id,
//             postID: resp.data.post_id,
//         })
//     })
// }



// export function getPicsList() {
//     axios.get('/api/posts').then(resp => {
//         store.dispatch({
//             type: 'GET_PICS',
//             picsList: resp.data
//         })
//     })
// }

// export function makePost(title, body, loc_id, cat_id, pic_url) {
//     console.log(item)
//     axios.post('/api/posts', item).then(() => {
//         getPost()
//     })
// }


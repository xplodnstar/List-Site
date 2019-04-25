import store from '../store'
import axios from 'axios'

// export function getPerson() {
//     axios.get('https://randomuser.me/api/?inc=name,phone,email,picture,dob,nat&nat=us').then(resp => {
//         store.dispatch({
//             type: 'GET_PERSON',
//             person: resp.data.results[0]
//         })
//     })
// }

// export function getCarousel() {
//     axios.get('/api/carousel').then(resp => {
//         store.dispatch({
//             type: 'GET_CAROUSEL',
//             carousel: resp.data
//         })
//     })
// }

// export function getSanctuary() {
//     axios.get('/api/sanctuary').then(resp => {
//         store.dispatch({
//             type: 'GET_SANCTUARY',
//             sanctuary: resp.data
//         })
//     })
// }

// export function carousel(person) {
//     console.log(person)
//     axios.post('/api/carousel', person).then(() => {
//         getCarousel()
//     })
// }

// export function sanctuary(person) {
//     axios.post('/api/sanctuary', person).then(() => {
//         getSanctuary()
//     })
// }

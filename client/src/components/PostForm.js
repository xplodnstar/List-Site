import React, { useEffect } from 'react';
import { getCurrCat } from '../actions/actions';
import { connect } from 'react-redux'

// const PostForm = (props) => {
//     useEffect(() => {
//         getCurrCat(props.slug)

//     }, [props.slug])
// }

// return (
//     <div>
//         <h1>{props.name}</h1>
//         <div className="listSearch"></div>
//         <div className="listNav"></div>
//         <ul>
//             {props.list.map(cat => (
//                 <li key={`'child ' + ${cat.id}`}><Link to={`/${cat.slug}`}>{cat.name}</Link></li>
//             ))}
//         </ul>
//     </div>
// )


// function mapStateToProps(appState, ownProps) {
//     console.log('here', appState)
//     return {
//         name: appState.currCat.name,
//         slug: ownProps.match.params.slug
//     }
// }

export default connect(mapStateToProps)(PostForm)

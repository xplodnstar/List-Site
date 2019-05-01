import React, { Fragment } from 'react';
import { getCats } from '../actions/actions';

const PostCats = (props) => {

    return (
        <Fragment>
            {props.list.map(cat => (
                <p>
                    {cat.name}
                </p>
            ))}
        </Fragment>
    )
}
export default PostCats
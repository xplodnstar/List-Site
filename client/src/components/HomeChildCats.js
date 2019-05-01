import React, { Fragment } from 'react';
import { Link } from 'react-router-dom'

const HomeChildCats = (props) => (
    <Fragment>
        {props.list.map(cat => (
            <li key={`'child ' + ${cat.id}`} className="childCats"><Link to={`/category/${cat.slug}`}>{cat.name}</Link></li>
        ))}
    </Fragment>
)

export default HomeChildCats
import React, { useEffect } from 'react';
import { getCats } from '../actions/actions'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import HomeChildCats from './HomeChildCats'

const HomeCats = props => {
    useEffect(() => {
        getCats()
    }, [])

    return (
        <div className="catsBox">
            <div className="cats1">
                {props.cats1.map(cat => (
                    <div key={`'parent ' + ${cat.id}`}>
                        <div className="catTitle">
                            <h3><Link to={`/${cat.slug}`}>{cat.name}</Link></h3></div>
                        <ul className="catFlex1"><HomeChildCats list={cat.child_categories} /></ul>
                    </div>
                ))}
            </div>
            <div className="cats2">
                {props.cats2.map(cat => (
                    <div key={`'parent ' + ${cat.id}`}>
                        <div className="catTitle">
                            <h3><Link to={`/${cat.slug}`}>{cat.name}</Link></h3></div>
                        <ul className="catFlex2"><HomeChildCats list={cat.child_categories} /></ul>
                    </div>
                ))}
            </div>
            <div className="cats3">
                {props.cats3.map(cat => (
                    <div key={`'parent ' + ${cat.id}`}>
                        <div className="catTitle">
                            <h3><Link to={`/${cat.slug}`}>{cat.name}</Link></h3></div>
                        <ul className="catFlex3"><HomeChildCats list={cat.child_categories} /></ul>
                    </div>
                ))}
            </div>
        </div >
    )
}

function mapStateToProps(appState) {
    return {
        cats1: appState.cats1,
        cats2: appState.cats2,
        cats3: appState.cats3
    }
}

export default connect(mapStateToProps)(HomeCats)
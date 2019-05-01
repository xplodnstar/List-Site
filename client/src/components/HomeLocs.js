import React, { useEffect } from 'react';
import { getLoc } from '../actions/actions';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'


const HomeLocs = (props) => {
    useEffect(() => {
        getLoc()
    }, [])

    return (
        <div className="locsBox">
            <div className="locTitle">nearby pl</div>
            <ul>
                {props.locations.map(item => (
                    <li key={`'loc ' + ${item.loc_id}`} className="listLoc">
                        < Link to={`/`}>{item.location}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}


function mapStateToProps(appState) {
    console.log(appState)
    return {
        locations: appState.locations,
    }
}

export default connect(mapStateToProps)(HomeLocs)
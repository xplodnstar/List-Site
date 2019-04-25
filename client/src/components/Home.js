import React, { Component } from 'react';

import HomeSide from './HomeSide'
import HomeTitle from './HomeTitle'
import HomeCats from './HomeCats'
import HomeLocs from './HomeLocs'
import HomeFoot from './HomeFoot'



class Home extends Component {

    render() {
        return (
            <div className="homePage">
                <div className="home1">
                    <HomeSide></HomeSide>
                </div>
                <div className="home2">
                    <HomeTitle></HomeTitle>
                    <HomeCats></HomeCats>
                    <HomeFoot></HomeFoot>
                </div>
                <div className="home3">
                    <HomeLocs></HomeLocs>
                </div>
            </div>
        )
    }
}

export default (Home)

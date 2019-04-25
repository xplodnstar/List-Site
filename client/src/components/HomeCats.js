import React, { Component } from 'react';



class HomeCats extends Component {

    render() {
        return (
            <div className="catsBox">
                <div className="cats1">
                    <div className="cat1">Cat</div>
                    <div className="cat2">Cat2</div>
                </div>
                <div className="cats2">
                    <div className="cat3">Cat3</div>
                    <div className="cat4">Cat4</div>
                </div>
                <div className="cats3">
                    <div className="cat5">Cat5</div>
                    <div className="cat6">Cat6</div>
                    <div className="cat7">Cat7</div>
                </div>

            </div>
        )
    }
}

function mapStateToProps(appState) {
    return {

    }
}

export default (HomeCats)
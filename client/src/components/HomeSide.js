import React, { Component } from 'react';
import { Link } from 'react-router-dom'



class HomeSide extends Component {

    render() {
        return (
            <div className="sideBox">
                <div className="sideTitle"><h2>pegslist</h2></div>
                <div className="sidePost">
                    <Link to="postForm" className="sideLink">create a posting</Link></div>
                <div className="sideAcct">my account</div>
                <div className="sideSearch">search pegslist</div>
                <div className="sideEvent">ecent calendar</div>
                <div className="sideList">
                    <ul>
                        <li><Link to="/" className="sideLink">help, faq, abuse, legal</Link></li>
                        <li><Link to="/" className="sideLink">avoid scams & fraud</Link></li>
                        <li><Link to="/" className="sideLink">personal safety tips</Link></li>
                        <li><Link to="/" className="sideLink">terms of use<sup>new</sup></Link></li>
                        <li><Link to="/" className="sideLink">privacy policy</Link></li>
                        <li><Link to="/" className="sideLink">system status</Link></li>
                    </ul></div>
                <div className="sideList">
                    <ul>
                        <li><Link to="/" className="sideLink">about pegslist</Link></li>
                        <li><Link to="/" className="sideLink">pegslist is hiring in sf</Link></li>
                        <li><Link to="/" className="sideLink">pegslist open source</Link></li>
                        <li><Link to="/" className="sideLink">pegslist blog</Link></li>
                        <li><Link to="/" className="sideLink">best-of-pegslist</Link></li>
                        <li><Link to="/" className="sideLink">pegslist TV</Link></li>
                        <li><Link to="/" className="sideLink">"pegslist joe"</Link></li>
                        <li><Link to="/" className="sideLink">peg connects</Link></li>
                    </ul>
                </div>
            </div>
        )
    }
}


export default (HomeSide)
import React from 'react';

// The video should be the background of the hero div. Ideally, the navbar will be positioned absolutely over it.

class Hero extends React.Component {
    render() {
        return (
            <div className="hero">
                <div className="introduction">
                    <h1>Drew Sanders</h1>
                    <p>TS/SCI Cleared | Front End Developer | Zerg Complainer</p>
                </div>
                <div className="intro-spacer" />
            </div>
        )
    }
}

export default Hero;
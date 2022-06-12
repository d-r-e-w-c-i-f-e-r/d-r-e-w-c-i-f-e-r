import React from 'react';
import AFAM from '../media/afam-transparent.gif';

class Me extends React.Component {
    render() {
        return (
            <div className="about-me">
                <div className="about-me-txt">
                    <h1>About Me</h1>
                    <p>Former foreign intelligence analyst transitioning away from the military environment and into the tech space. During my service in the Air Force, I was awarded the Air Force Achievement Medal for designing and constructing the face of the Kessel Run coding initiative. 
                    I love to work on projects with passionate, driven people looking to design the future. I've always been a huge fan of strategy games and anything that pushes me to learn and become a better version of myself. I also make a mean pot roast. I've completed the 14-week VetsWhoCode developer bootcamp and I am currently working on a Bachelor's degree in Computer Science at Iona College, expecting to graduate in the fall of 2023. 
                    </p>
                </div>
                <img src={AFAM} />
            </div>
        );
    }
}

export default Me;
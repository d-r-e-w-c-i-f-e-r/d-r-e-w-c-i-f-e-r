import React from 'react';

class Job extends React.Component {
    render() {
        return (
            <div className='job'>
                <div className='job-text'>
                    <h2>{this.props.name}</h2>
                    <p>{this.props.dates}</p>
                    <p>{this.props.description}</p>
                </div>
                <img src={this.props.imgpath} />
            </div>
        )
    }
}

export default Job;
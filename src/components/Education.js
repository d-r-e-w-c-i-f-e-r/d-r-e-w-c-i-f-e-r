import React from 'react';
import School from './School';
import Iona from '../media/iona-logo.jpg'; // CHANGE THESE TO GIF
import DLI from '../media/dli-logo.png';

class Education extends React.Component {
    render() {
        return( 
            <div className='edu'>
                <h1>Education</h1>
                <School name='Iona College' dates='JAN 2022 - Present' description='Currently in progress of a Bachelor’s in Computer Science. Planning on
graduating in Fall 2023.' imgpath={Iona} />
                <School name='Defense Language Institute' dates='SEP 2015 - MAY 2016' description='Graduated from the Spanish Language Course and certified for work in
military foreign language work.' imgpath={DLI} />
            </div>
        )
    }
}

export default Education;
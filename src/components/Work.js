import React from 'react';
import Job from './Job';
import Intel from '../media/29is-transparent.gif';
import KesselRun from '../media/kr-logo.gif';
import Fattys from '../media/fattys-logo.gif';

class Work extends React.Component {
    render() {
        return (
            <div className='work'>
            <h1>Work Experience</h1>
                <Job name='Kessel Run - Front End Developer' dates='MAY 2018 - NOVEMBER 2018' description='Selected by Air Force leadership for special 6-month duty to rebuild the
Kessel Run organization website, opening new avenues for recruitment
leading to a 40% increase in manning across +10 teams.' imgpath={KesselRun} />
<Job name='United States Air Force - Spanish Translator' dates='MAY 2015 - MAY 2021' description='Led 10 person team analyzing and translated foreign language material in prosecution of
transnational crime. Authored intelligence reports that influenced foreign
policy decisions. Managed large data sets for DoD and Intelligence
community partners.' imgpath={Intel} />
<Job name='Fatty’s Tattoos - Front End Developer' dates='JUNE 2017' description='Redesigned the business website by bringing the user experience into the
modern era.' imgpath={Fattys} />
            </div>
        )
    }
}

export default Work;
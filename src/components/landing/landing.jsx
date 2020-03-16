import React from 'react';
import { TopBar, Intro, AboutMe } from '../index';

class Landing extends React.Component {
    render() {
        return (
            <>
            <TopBar />
            <Intro />
            <AboutMe />
            </>
        );
    }
}

export default Landing;
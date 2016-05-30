import React, {Component} from 'react';
import Layout from '../components/layout';
import Project from '../components/project';

class Projects extends Component {
    render() {
        return (
            <Layout jumboText="projects.">
                <Project title="Sunfile" description="An extemp filing utility that generates word documents and displays team statistics." screenshot="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQD1PVut84v_cHHOZRXZG2hVyPsX_H3kpcmd2YnejaKRi0y7LBPOstCwfgv"/>
                <Project title="KentAPIs" description="A RESTful API for Kent's schedule." screenshot="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQD1PVut84v_cHHOZRXZG2hVyPsX_H3kpcmd2YnejaKRi0y7LBPOstCwfgv"/>
                <Project title="iRead Monthly" description="A reading calendar designed for elementary school students to replace paper calendars." screenshot="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQD1PVut84v_cHHOZRXZG2hVyPsX_H3kpcmd2YnejaKRi0y7LBPOstCwfgv"/>
                <Project title="Summon" description="A mother's day gift - push notification to all of the kid's phones so she can stop yelling through headphones." screenshot="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQD1PVut84v_cHHOZRXZG2hVyPsX_H3kpcmd2YnejaKRi0y7LBPOstCwfgv"/>
                <Project title="KDS Powerschool Watcher" description="An android application that listens for new grades to be posted to powerschool." screenshot="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQD1PVut84v_cHHOZRXZG2hVyPsX_H3kpcmd2YnejaKRi0y7LBPOstCwfgv"/>
                <Project title="PrepD File Downloader" description="A method to download highlighted and organized extemp files from the service extemp.prepd.in." screenshot="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQD1PVut84v_cHHOZRXZG2hVyPsX_H3kpcmd2YnejaKRi0y7LBPOstCwfgv"/>
                <Project title="PrepD File Recoverer" description="Re-uploads offline copies of PrepD files in the event they are accidentally deleted (this was actually used)." screenshot="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQD1PVut84v_cHHOZRXZG2hVyPsX_H3kpcmd2YnejaKRi0y7LBPOstCwfgv"/>
            </Layout>
        );
    }
}

export default Projects;

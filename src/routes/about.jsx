import React, {Component} from 'react';
import Layout from '../components/layout';

class About extends Component {
    render() {
        return (
            <Layout jumboText="about.">
                <h4>Hello!</h4>
                <p>My name is Daniel Chao. I'm currently attending Kent Denver School as a freshman (soon to be sophomore!). This website serves as a sort of portfolio/personal landing page but more importantly it's my AP Computer Science final project. </p>
                <h4>Weapons of choice</h4>
                <ul>
                    <li><strong>IDE:</strong> Visual Studio Code (sometimes vi, if I'm feeling it)</li>
                    <li><strong>Front-end:</strong> React.js</li>
                    <li><strong>Back-end:</strong> Node (or ASP.net depending on my mood)</li>
                    <li><strong>CSS pre-processor:</strong> SASS</li>
                    <li><strong>OS:</strong> Windows/Ubuntu</li>
                    <li><strong>Phone:</strong> Android >5.0</li>
                    <li><strong>Mobile dev:</strong> React-native, Xamarin, Java</li>
                    <li><strong>Database:</strong> Mongo</li>
                </ul>
                <h4>APCSA 2015-2016</h4>
                <span>I was pretty familiar with C# before starting the class, so the transition into Java was remarkably easy. They share many of the same syntax verbosities and mechanics. I struggled through the binary-numbers lab, excelled at </span>
                <a href="https://github.com/dchao19/APCSAYahtzee">Yahtzee</a>
                <span> and pushed through sorting and searching. </span>
            </Layout>
        );
    }
}

export default About;

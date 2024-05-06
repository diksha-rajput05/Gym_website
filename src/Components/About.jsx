import React from "react";
import aboutimage from '../images/about.png';

function About() {
    return (
        <div id= 'about'>
            <div className = 'about-image'>
                <img src = {aboutimage} alt = ''/>
            </div>
            <div className = 'about-text'>
                <h1>LEARN MORE ABOUT US</h1>
                <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea dolore ducimus quis qui? Maxime voluptate deserunt nesciunt illo reprehenderit non, porro quia ducimus dignissimos quaerat et, incidunt blanditiis enim adipisci!</p>
                <button>READ MORE</button>
            </div>

        </div>
    )
}
export default About;
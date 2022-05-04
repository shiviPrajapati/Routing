import React, {Component} from "react";
import './Style.css'
import img from './aboutpic.webp'


class About extends Component{
    render() {
        return (
            <div className="aboutpage">
                <div className="aboutme">
                    <h1>Hello There!</h1>
                    <h2>I am Shivi Prajapati</h2>
                    <h4>I am pursuing master of computer application from Galgotia college of engineering and technology 
                        I am good in java and c++ , I like to do yoga and playing kho kho, I also love to do code 
                        and currently i an=m employee of mount blue as a trainee.
                    </h4>
                </div>
                <div className="mypic">
                    <div>
                        <img src={img} alt="img"></img>
                    </div>
                </div>
            </div>
        )
    }
}

export default About
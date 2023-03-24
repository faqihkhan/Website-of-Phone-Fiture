import React from "react";

function About(props) {
    return (
        <div id="about">
            <div className="about-image">
                <img src={props.image} alt='' />
            </div>
            <div className="about-text">
                <h2> {props.title} </h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa beatae soluta quisquam dolorem. Laboriosam iusto eos similique ullam accusantium voluptate a fugit quisquam rem illo explicabo dolores totam, qui esse?</p>
                <button> {props.button} </button>
            </div>
        </div>
    )
}

export default About;
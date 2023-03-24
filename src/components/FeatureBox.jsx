import React from "react";

function FeatureBox(props) {
    return (
        <div className="a-box">
            <div className="a-b-img">
                <img src={props.image}/>
            </div>
            <div className="s-b-text">
                <h2> {props.title} </h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis, quaerat doloribus velit temporibus aut aspernatur voluptatibus nam quia dolor tempore expedita illo neque minima commodi. Repudiandae illo dolores iste deserunt.</p>
            </div>
        </div>
    )
}

export default FeatureBox;
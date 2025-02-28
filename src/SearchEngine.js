import React, { useState } from "react";

export default function SearchEngine(props) {
    function handleSubmit(event) {
        event.preventDefault();
    }

    let [city, setCity] = useState();

    function updateCity(event) {
        setCity(event.target.value);
    }

    return (
        <div>
            <p>
                {" "}
                It is currently {props.temperature} in ${city}
            </p>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Type a city" />
                <input type="submit" value="Search" />
            </form>
        </div>
    );
}

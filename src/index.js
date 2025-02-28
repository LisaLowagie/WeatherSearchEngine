import React from "react";
import SearchEngine from "./SearchEngine";
import ReactDom from "react-dom";

function App() {
    return (
        <div>
            <h1>Weather Search Engine</h1>
            <SearchEngine />;
            <Weather temperature={19} />
        </div>
    );
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

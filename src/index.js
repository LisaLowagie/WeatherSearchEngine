import React from "react";
import SearchEngine from "./SearchEngine";

function App() {
    return (
        <div>
            <h1>Weather Search Engine</h1>
            <SearchEngine />;
            <Weather temperature={19} />
        </div>
    );
}

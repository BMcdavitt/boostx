import React from "react";

import Features from "./components/Features.js"

export default function App() {

    let [currentPage, updateCurrentPage] = React.useState("Features")

    return(
        <div>
            <Features />
        </div>
    )
}
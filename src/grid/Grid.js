import React, { useState, useRef } from "react";
import Rows from "./Rows.js";
// import Grids from "./Grids.js"

import '../App.css';
//this component is for the basic grid setup on which the game is based

export default function Grid(props) {

const gridLayout = {
    width: "90.5%",
    height: "90%",
    backgroundColor: `rgba(237,209,168,255)`,
    display: "flex",
    justifyContent: "center",
    border: "1px solid white"
    

}
const [size, setSize] = useState({row: 8, column: 8})


return (
    <div style={gridLayout}>
        <Rows size={size}/>
    </div>
)
}


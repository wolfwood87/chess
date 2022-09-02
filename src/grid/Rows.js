import React, { useState, useRef } from "react";
import Columns from "./Columns.js";
// import Grids from "./Grids.js"

import '../App.css';
//this component is for the basic grid setup on which the game is based

export default function Rows(props) {

const rowLayout = {
        display: "flex",
        flexDirection: "row",
}

const rowDisplay = []
for (let i = 1; i <= props.size.row; i ++) (
    rowDisplay.push(i)
)


return (
    <div style={rowLayout}>
        {rowDisplay.map((index) => (
            <div key = {`row${index}`}>
            <Columns  column = {props.size.column} row = {index}/>
            </div>
        ))}
    </div>
)
}


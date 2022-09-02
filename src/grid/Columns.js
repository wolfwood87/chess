import React, { useState} from "react";
import Cell from "./Cell.js";
// import Grids from "./Grids.js"

import '../App.css';
//this component is for the basic grid setup on which the game is based

export default function Columns(props) {

const columnLayout = {
    display: "flex",
    flexDirection: "column",
}
const columnDisplay = []
for (let i = 1; i <= props.column; i ++) (
    columnDisplay.push(i)
)


return (
    <div style={columnLayout}>
        {columnDisplay.map((index) => (
            <div key = {`column${index}`} >
            <Cell column={index} row ={props.row}/>
            </div>
        ))}
    </div>
)
}

import React, { useState, useEffect } from "react";

//cell component
export default function Cell(props) {
    const [row, setRow] = useState(props.row)
    const [column, setColumn] = useState(props.column)
    const [check] = useState((props.row + props.column) % 2 === 0)
    const [clicked, setClicked] = useState()
    //inline styles for cell
    const block = {   
        border: "1px solid grey",
        width: `100px`,
        height: `74.25px`,
    }
    const clickedBlock = {   
        border: "1px solid grey",
        width: `100px`,
        height: `74.25px`,
        color: "white",
        backgroundColor: `rgba(186,131,88,255)`
    }
    const handleClick = e => {
        e.preventDefault();
        setClicked(!clicked)
    }
    
    return (
        <div>
        {check ? 
            <div style={block}>{row},{column}</div>
             : 
            <div style={clickedBlock}>{row},{column}</div>
        }
        </div>
        
    )
}

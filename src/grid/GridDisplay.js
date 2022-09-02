import React from "react";
import Grid from "./Grid.js";

import '../App.css';

//this component sets up a basic layout for the website
export default function GridDisplay(props) {
    const main = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    }
    const container = {
        display: "flex",
        marginTop: "5%",
        justifyContent: "center",
        alignItems: "center",
        border: "1px solid black",
        width: '45%',
        height: "680px",
        backgroundColor: "rgba(148,103,70,255)"
      }

    const headers = {
        textAlign: "center",
        textDecoration: "none",
    }
    const link = {
        textDecoration: "none",
        color: "blue",
        fontSize: "1.5em"
    }
    return (
        <div style={main}>
        <div style={container} className="displaycontainer">
            <Grid />
           
        </div>
       
        </div>
    )
}

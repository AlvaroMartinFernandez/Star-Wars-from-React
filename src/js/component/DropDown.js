import React from "react";
import {Link} from "react-router-dom"
import useAppContext from "../store/appContext";

    export default function Dropdown({listFavoriest,routeFavoriest})
    {
        const contextContent= useAppContext();
        return(
            <ul className="dropdown-menu">
               { listFavoriest.map((element,index)=>
                {
                return (<li key={index} ><a className="dropdown-item" ><Link to={routeFavoriest}>{element[index]}</Link></a></li>);
                })
        
            }</ul>
        )
    }
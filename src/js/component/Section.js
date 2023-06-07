import React from "react";
import { Card } from "./Card.js";
import useAppContext from "../store/appContext";
const contextContent= useAppContext();
({dataCharacters,dataVehicles,dataPlanets})=contextContent;
const keys =  Object.keys(contextContent).length

export default function Section({ keys, contextContent }) {
  return (
    <>
      {keys.map((element) => (
        <div key={element}>
          <h2>{element}</h2>
          <div className="overflow-x-auto">
            {contextContent.element.map((content,index) => (
              <Card key={index} prop={content} />
            ))}
          </div>
        </div>
      ))}
    </>
  );
}

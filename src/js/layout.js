import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Section } from "./component/Section";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

const section = [0, 1, 2];
//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <Navbar />

      {section.map((element) => {
        return <Section title={element.title} elements={element.elements} />;
      })}
      <Footer />
    </div>
  );
};

export default injectContext(Layout);

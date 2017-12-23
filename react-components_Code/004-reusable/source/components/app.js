import React from "react";
import { defaultExport as Portfolio } from "./portfolio";
import About from "./about";
import Contact from "./contact";
import Header from "./header";
import Footer from "./footer";
import Nav from "./nav";

export default class App extends React.Component {
    render() {
        return (
            <div>
                <Nav />
                <Header title="Master React Components" subt="React - Components" />
                <About />
                <Contact />
                <Footer data={this.props.data.footer} />
            </div>
        );
    }
}

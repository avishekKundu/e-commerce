import React, { Component } from "react";
import SideBar from "./SideBar";
import Product from "./Body";

class Main extends Component {
    render() {
        return (
            <main>
                <SideBar />
                <Product />
            </main>
        )
    }
}

export default Main;
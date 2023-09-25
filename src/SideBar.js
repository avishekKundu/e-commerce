import React, { Component } from "react";

class SideBar extends Component {
    render() {
        return (
            <main>
                <div class="container text-bg-secondary inputBody">
                    <ul>
                        <li>
                            <label class="my-1 mr-2 prodCategry" for="ProductCategory">Category : </label> <br />
                            <select class="custom-select my-1 mr-sm-2 text-center border border-2 border-dark rounded-3"
                                id="selCategory" required>
                                <option selected value="All">Select </option>
                                <option value="Mobile">Mobile</option>
                                <option value="TV">TV</option>
                                <option value="Laptop">Laptop</option>
                                <option value="Headphone">Headphones</option>
                                <option value="Cloth">Clothing</option>
                            </select>
                        </li>
                    </ul>
                </div>
            </main>
        )
    }
}

export default SideBar;
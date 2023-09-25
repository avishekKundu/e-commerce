import React, { Component } from "react";

class SideBar extends Component {
    render() {
        return (
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
                    <li>
                        <label class="my-1 mr-2 prodPrice" for="ProductPrice">Price Range : </label> <br />
                        <input class="rounded-3 text-center" type="number" id="minPrice" aria-describedby="minPrice"
                            placeholder="Min Price" required /> <br />
                        <br /> <input class="rounded-3 text-center" type="number" id="maxPrice" aria-describedby="maxPrice"
                            placeholder="Max Price" required />
                    </li>
                    <li>
                        <button class="btn btn-outline-primary border border-2" id="btnFilter" >
                            Filter
                        </button>
                    </li>
                </ul>
            </div>
        )
    }
}

export default SideBar;
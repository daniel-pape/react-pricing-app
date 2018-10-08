import {Component} from "react";
import React from "react";
import ProductTable from "./ProductTable";
import ProductInput from "./ProductInput";
import "./Main.css"
import GithubCorner from 'react-github-corner';

class Main extends Component {
    constructor(props) {
        super(props)

        this.createData = function (id, name, price, quantity, ratio) {
            return {id, name, price, quantity, ratio};
        }

        this.state = {
            rows: [
                this.createData("Example A", "Example A", 80.00, 10, 1.0),
                this.createData("Example B", "Example B", 20.00, 10, 2.0),
            ]
        }

        this.addProductHandler = this.addProductHandler.bind(this);
    }


    addProductHandler = (data) => {

        const computeUnitPrice = function (price, quantity) {
            return (price / quantity).toPrecision(2)
        }

        let isProductNameUsed = this.state.rows.map(x => x.id).includes(data.productName)

        if (!isProductNameUsed) {
            let newData = this.createData(
                data.productName,
                data.productName,
                data.price,
                data.quantity,
                computeUnitPrice(data.price, data.quantity),
            );

            let newState = Object.assign({}, this.state);
            newState["rows"] = this.state.rows.concat(newData);

            this.setState(newState);
            return true;
        } else {
            return false;
        }
    }

    deleteProductHandler = (productIds) => {
        let newState = Object.assign({}, this.state);
        newState["rows"] = this.state.rows.filter(row => !productIds.includes(row.id));

        this.setState(newState);
    }

    render() {
        return (
            <div>
                <GithubCorner href="https://github.com/daniel-pape/react-pricing-app"
                              octoColor="#E7E9EC"/>
                <h1>
                    BEST PRICE/QUANTITY RATIO
                </h1>
                <p>
                    Compare products by their price/quantity ratio (a.k.a. price per unit).
                </p>
                <div>
                    {/*<ProductsTable rows={this.state.rows}/>*/}
                    <ProductTable rows={this.state.rows}
                                  deleteProductHandler={this.deleteProductHandler}/>
                </div>
                <div>
                    <ProductInput handler={this.addProductHandler}/>
                </div>
                <footer>
                    Made with <a href="https://reactjs.org/">React</a> using <a
                    href="https://material-ui.com/">Material-UI</a>.
                    <br/>
                    Code available on GitHub: <a href="https://github.com/daniel-pape/react-pricing-app">Link</a>
                </footer>
            </div>
        );
    }
}

export default Main;
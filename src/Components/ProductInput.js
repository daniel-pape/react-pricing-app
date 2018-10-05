import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import "./ProductInput.css"

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    input: {
        margin: theme.spacing.unit,
    },
});

class ProductInput extends Component {
    // TODO: Understand what this does:
    static propTypes = {
        classes: PropTypes.object.isRequired,
        handler: PropTypes.func
    };

    constructor(props) {
        super(props);

        this.defaultState = {
            productName: "",
            price: "",
            quantity: "",
        }

        this.state = this.defaultState
    }

    render() {
        return (
            <div className="productInput">
                <ValidatorForm
                    onSubmit={(e) => {
                        e.preventDefault();
                        if (this.props.handler(this.state)) {
                            this.setState(this.defaultState);
                        } else {
                            alert("Product Name is already used")
                            this.setState(this.defaultState);
                        }
                    }}
                    onError={errors => console.log(errors)}>
                    <TextValidator
                        name="productName"
                        validators={['required', 'isString']}
                        errorMessages={['This field is required', 'Non-valid product name']}
                        placeholder="Product Name"
                        value={this.state.productName}
                        className={this.props.classes.input}
                        inputProps={{
                            'aria-label': 'Description',
                        }}
                        onChange={
                            (e) => {
                                this.setState({productName: e.target.value});
                            }
                        }
                    />
                    <TextValidator
                        name="price"
                        validators={['required', 'isFloat', 'minFloat: 0.0']}
                        errorMessages={['This field is required', 'Price not valid']}
                        placeholder="Price"
                        value={this.state.price}
                        className={this.props.classes.input}
                        inputProps={{
                            'aria-label': 'Description',
                        }}
                        onChange={
                            (e) => {
                                this.setState({price: e.target.value});
                            }
                        }
                    />
                    <TextValidator
                        name="quantity"
                        validators={['required', 'isNumber', 'minNumber:1']}
                        errorMessages={['This field is required', 'Quantity must be 1, 2, 3,...', 'Quantity must be 1, 2, 3,...']}
                        placeholder="Quantity (1, 2, 3,...)"
                        value={this.state.quantity}
                        className={this.props.classes.input}
                        inputProps={{
                            'aria-label': 'Description',
                        }}
                        onChange={
                            (e) => {
                                this.setState({quantity: e.target.value});
                            }
                        }
                    />
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary">
                        Add Product
                    </Button>
                </ValidatorForm>
            </div>
        );
    }
}

export default withStyles(styles)(ProductInput);
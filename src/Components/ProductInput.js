import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';


const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    input: {
        margin: theme.spacing.unit,
    },
});

class Inputs extends Component {
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
            <div className={this.props.classes.container}>
                <Input
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
                <Input
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
                <Input
                    placeholder="Quantity"
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
                    color="primary"
                    onClick={() => {
                        this.props.handler(this.state);
                        this.setState(this.defaultState);
                    }}
                >Add Product</Button>
            </div>
        );
    }
}

export default withStyles(styles)(Inputs);
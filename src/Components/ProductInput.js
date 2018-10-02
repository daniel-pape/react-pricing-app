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
        super(props)
    }

    render() {
        return (
            <div className={this.props.classes.container}>

                <Input
                    placeholder="Product Name"
                    className={this.props.classes.input}
                    inputProps={{
                        'aria-label': 'Description',
                    }}
                    onChange={
                        (e) => {
                            console.log("Product Name changes", e)
                        }
                    }
                />
                <Input
                    placeholder="Price"
                    className={this.props.classes.input}
                    inputProps={{
                        'aria-label': 'Description',
                    }}
                />
                <Input
                    placeholder="Quantity"
                    className={this.props.classes.input}
                    inputProps={{
                        'aria-label': 'Description',
                    }}
                />
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    onClick={e => {
                        console.log("Click", e);
                        this.props.handler()
                    }}
                >
                    Add Product
                </Button>


            </div>
        );
    }
}

export default withStyles(styles)(Inputs);
/*
 *  Form for updating their address by a customer
 */

import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Alert from '@material-ui/lab/Alert';
import AlertTitle from '@material-ui/lab/AlertTitle';
import * as customerActions from '../store/actions/CustomerActions';


class CustomerAddressComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {

            city: '',
            country: '',
            houseNo: '',
            state: '',
            street: '',
            zip: 0,
            customer: {
                customerid: 0
            }

        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.createAddress = this.createAddress.bind(this);
    }

    handleInputChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    createAddress(e) {
        e.preventDefault();

        let payload = {

            city: this.state.city,
            country: this.state.country,
            houseNo: this.state.houseNo,
            state: this.state.state,
            street: this.state.street,
            zip: this.state.zip,
            customerid: this.state.customerid

        }

        const { customerActions, match } = this.props;
        customerActions.createAddress(payload);

    }

    clear = () => {
        this.setState = ({
            city: '',
            country: '',
            houseNo: '',
            state: '',
            street: '',
            zip: 0,
            customer: {
                customerid: 0
            }
        });
    }

    render() {

        if(this.props.address !== undefined) {    
            return <Alert severity="success">
            <AlertTitle>Success</AlertTitle>
            You have successfully updated your address!
        </Alert>
        }  

        return (
            <div>
                <h3>Register Address</h3>

                <TextField
                    variant="outlined"
                    required
                    fullWidth
                    type="text"
                    id="houseNo"
                    label="House No."
                    name="houseNo"
                    autoComplete="houseNo"
                    value={this.state.houseNo}
                    onChange={this.handleInputChange}
                    autoFocus
                />
                <Box p={2} />
                <TextField
                    variant="outlined"
                    required
                    fullWidth
                    type="text"
                    id="street"
                    label="Street"
                    name="street"
                    autoComplete="street"
                    value={this.state.street}
                    onChange={this.handleInputChange}
                    autoFocus
                />
                <Box p={2} />
                <TextField
                    variant="outlined"
                    required
                    fullWidth
                    type="text"
                    id="city"
                    label="City Name"
                    name="city"
                    autoComplete="city"
                    value={this.state.city}
                    onChange={this.handleInputChange}
                    autoFocus
                />
                <Box p={2} />
                <TextField
                    variant="outlined"
                    required
                    fullWidth
                    type="text"
                    id="state"
                    label="State Name"
                    name="state"
                    autoComplete="state"
                    value={this.state.state}
                    onChange={this.handleInputChange}
                    autoFocus
                />
                <Box p={2} />
                <TextField
                    variant="outlined"
                    required
                    fullWidth
                    type="text"
                    id="country"
                    label="Country"
                    name="country"
                    autoComplete="country"
                    value={this.state.country}
                    onChange={this.handleInputChange}
                    autoFocus
                />
                <Box p={2} />
                <TextField
                    variant="outlined"
                    required
                    fullWidth
                    type="number"
                    id="zip"
                    label="Zip Code"
                    name="zip"
                    autoComplete="zip"
                    value={this.state.zip}
                    onChange={this.handleInputChange}
                    autoFocus
                />
                <Box p={2} />
                <TextField
                    variant="outlined"
                    required
                    fullWidth
                    type="number"
                    id="customerid"
                    label="Customer Id"
                    name="customerid"
                    autoComplete="customerid"
                    value={this.state.customerid}
                    onChange={this.handleInputChange}
                    autoFocus
                />
                <Box p={2} />
                <Button variant="contained" color="secondary" onClick={this.createAddress}>
                    Register Address
                </Button>

            </div >
        );
    }
}

function mapStateToProps(state) {

    return { address: state.customerReducer.address }
}

function mapDispatchToProps(dispatch) {
    return {
        customerActions: bindActionCreators(customerActions, dispatch)
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(CustomerAddressComponent);
/*
 *  Form for adding an address to the office
 */

import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Alert from '@material-ui/lab/Alert';
import AlertTitle from '@material-ui/lab/AlertTitle';
import * as managerActions from '../store/actions/ManagerActions';


class OfficeAddressComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {

            city: '',
            country: '',
            houseNo: '',
            state: '',
            street: '',
            zip: 0,
            office: {
                officeid: 0
            },
            managerid: 0

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
            officeid: this.state.officeid,
            managerid: this.state.managerid

        }

        const { managerActions, match } = this.props;
        managerActions.createAddress(payload, match.params.managerid);

    }

    clear = () => {
        this.setState = ({
            city: '',
            country: '',
            houseNo: '',
            state: '',
            street: '',
            zip: 0,
            office: {
                officeid: 0
            },
            managerid: 0
        });
    }

    render() {
        
        if(this.props.address !== undefined) {

            return <Alert severity="success">
                        <AlertTitle>Success</AlertTitle>
                     You have successfully updated the office address!
            </Alert>
        }

        return (
            <div>

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
                    id="officeid"
                    label="Office Id"
                    name="officeid"
                    autoComplete="officeid"
                    value={this.state.officeid}
                    onChange={this.handleInputChange}
                    autoFocus
                />
                <Box p={2} />

                <TextField
                    variant="outlined"
                    required
                    fullWidth
                    type="number"
                    id="managerid"
                    label="Re-enter Manager Id"
                    name="managerid"
                    autoComplete="managerid"
                    value={this.state.managerid}
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

    return { address: state.managerReducer.address }
}

function mapDispatchToProps(dispatch) {
    return {
        managerActions: bindActionCreators(managerActions, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(OfficeAddressComponent);
/*
 *  Form for registering new courier by the customer
 */

import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import * as customerActions from '../store/actions/CustomerActions';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

class AddCourierComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {

            initiatedDate: '',
            customer: {
                customerid: 0,
            }

        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.createCourier = this.createCourier.bind(this);
    }

    handleInputChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    createCourier(e) {
        e.preventDefault();

        let payload = {

            initiatedDate: this.state.initiatedDate,
            customerid: this.state.customerid

        }

        const { customerActions } = this.props;
        customerActions.createCourier(payload);
    }

    clear = () => {
        this.setState = ({
            initiatedDate: '',
            customer: {
                customerid: 0
            }
        });
    }

    render() {

        if(this.props.courier !== undefined) {
            
            let cid = parseInt(this.state.customerid)
            return <Redirect to={`/byCard/${cid}`} />;
        }

        return (
            <div>

                <TextField
                    variant="outlined"
                    required
                    fullWidth
                    type="date"
                    id="initiatedDate"
                    // label="Date to initiate"
                    name="initiatedDate"
                    autoComplete="initiatedDate"
                    value={this.state.initiatedDate}
                    onChange={this.handleInputChange}
                    autoFocus
                />
                <Box m={2} />

                <TextField
                    variant="outlined"
                    required
                    fullWidth
                    type="number"
                    id="customerid"
                    label="Re-enter Customer Id"
                    name="customerid"
                    autoComplete="customerid"
                    value={this.state.customerid}
                    onChange={this.handleInputChange}
                    autoFocus
                />
                <Box m={2} />

                <Button variant="contained" color="secondary" onClick={this.createCourier}>
                    Submit
                </Button>

            </div >
        );
    }
}

function mapStateToProps(state) {

    return { courier: state.customerReducer.courier }
}

function mapDispatchToProps(dispatch) {
    return {
        customerActions: bindActionCreators(customerActions, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AddCourierComponent);
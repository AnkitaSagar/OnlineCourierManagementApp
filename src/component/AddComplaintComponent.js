/*
 *  Form for registering a complaint by a customer
 */

import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as customerActions from '../store/actions/CustomerActions';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Alert from '@material-ui/lab/Alert';
import AlertTitle from '@material-ui/lab/AlertTitle';


class AddComplaintComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {

            consignmentNo: 0,
            detailDescription:'',
            shortDescription:'',
            customer: {
                customerid: 0,
            }

        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.createComplaint = this.createComplaint.bind(this);
    }

    handleInputChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    createComplaint(e) {
        e.preventDefault();

        let payload = {

            consignmentNo: this.state.consignmentNo,
            detailDescription: this.state.detailDescription,
            shortDescription: this.state.shortDescription,
            customerid: this.state.customerid
        }

        const { customerActions } = this.props;
        customerActions.createComplaint(payload);

    }

    clear = () => {
        this.setState = ({
            consignmentNo:0,
            detailDescription: '',
            shortDescription: '',
            customer: {
                customerid: 0
            }
        });
    }

    render() {

        if(this.props.complaint !== undefined) {

            return <Alert severity="success">
                        <AlertTitle>Success</AlertTitle>
                     You have successfully registered a complaint!
            </Alert>
            
        }

        return (
            <div>

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

                <TextField
                    variant="outlined"
                    required
                    fullWidth
                    type="number"
                    id="consignmentNo"
                    label="Consignment No."
                    name="consignmentNo"
                    autoComplete="consignmentNo"
                    value={this.state.consignmentNo}
                    onChange={this.handleInputChange}
                    autoFocus
                />
                <Box m={2} />

                <TextField
                    variant="outlined"
                    fullWidth
                    type="text"
                    multiline
                    rows={4}
                    rowsMax={10}
                    id="detailDescription"
                    label="Enter Detailed Description"
                    name="detailDescription"
                    autoComplete="detailDescription"
                    value={this.state.detailDescription}
                    onChange={this.handleInputChange}
                    autoFocus
                />
                <Box m={2} />

                <TextField
                    variant="outlined"
                    required
                    fullWidth
                    type="text"
                    multiline
                    rows={2}
                    rowsMax={4}
                    id="shortDescription"
                    label="Enter Short Description"
                    name="shortDescription"
                    autoComplete="shortDescription"
                    value={this.state.shortDescription}
                    onChange={this.handleInputChange}
                    autoFocus
                />
                <Box m={2} />

                <Button variant="contained" color="secondary" onClick={this.createComplaint}>
                    Submit
                </Button>

            </div >
        );
    }
}

function mapStateToProps(state) {

    return { complaint: state.customerReducer.complaint }
}

function mapDispatchToProps(dispatch) {
    return {
        customerActions: bindActionCreators(customerActions, dispatch)
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(AddComplaintComponent);
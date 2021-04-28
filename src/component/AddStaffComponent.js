/*
 *  Form for adding a new staff to the office by a manager
 */

import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as managerActions from '../store/actions/ManagerActions';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import Alert from '@material-ui/lab/Alert';
import AlertTitle from '@material-ui/lab/AlertTitle';



class AddStaffComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {

            name: '',
            office: {
                officeid: 0,
            },
            role: '',
            managerid: 0

        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.createStaff = this.createStaff.bind(this);
    }

    handleInputChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    createStaff(e) {
        e.preventDefault();

        let payload = {

            name: this.state.name,
            officeid: this.state.officeid,
            role: this.state.role

        }

        const { managerActions, match } = this.props;
        managerActions.createStaff(payload);

    }

    clear = () => {
        this.setState = ({
            name: '',
            office: {
                officeid: 0
            },
            role: '',
            managerid: 0
        });
    }

    render() {

        if(this.props.staff !== undefined) {
            return <Alert severity="success">
                <AlertTitle>Success</AlertTitle>
                You have successfully added a new staff!
            </Alert>
        }

        return (
            <div>
            <TextField
                variant="outlined"
                required
                fullWidth
                type="text"
                id="name"
                label="Name"
                name="name"
                autoComplete="name"
                value={this.state.name}
                onChange={this.handleInputChange}
                autoFocus
            />
            <Box m={2} />

            <TextField
                variant="outlined"
                required
                fullWidth
                type="number"
                id="officeid"
                label="Office Id."
                name="officeid"
                autoComplete="officeid"
                value={this.state.officeid}
                onChange={this.handleInputChange}
                autoFocus
            />
            <Box m={2} />

            <InputLabel htmlFor="role-native-simple">Role</InputLabel>
                <Select
                variant="outlined"
                required
                fullWidth
                autoComplete="role"
                value={this.state.role}
                onChange={this.handleInputChange}
                inputProps={{
                    name: 'role',
                    id: 'role',
                }}
                autoFocus
                >
                <option value="STAFF">STAFF</option>           
                <option value="ACCOUNTING">ACCOUNTING</option>
                <option value="SALES">SALES</option>
                <option value="MARKETING">MARKETING</option>
                </Select>
                
                <Box m={2} />
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
                <Box m={2} />

                <Button variant="contained" color="secondary" onClick={this.createStaff}>
                    Add
                </Button>
        </div >
    );
}
}

function mapStateToProps(state) {

return { staff: state.managerReducer.staff }
}

function mapDispatchToProps(dispatch) {
return {
    managerActions: bindActionCreators(managerActions, dispatch)
}
};

export default connect(mapStateToProps, mapDispatchToProps)(AddStaffComponent);
/*
 *  Form for adding a new office by a manager
 */

import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as managerActions from '../store/actions/ManagerActions';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import Alert from '@material-ui/lab/Alert';
import AlertTitle from '@material-ui/lab/AlertTitle';


class AddOfficeComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {

            openingTime: '',
            closingTime: '',
            managerid: 0

        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.createOffice = this.createOffice.bind(this);
    }

    handleInputChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    createOffice(e) {
        e.preventDefault();

        let payload = {

            openingTime: this.state.openingTime,
            closingTime: this.state.closingTime

        }
        const { managerActions, match } = this.props;
        managerActions.createOffice(payload);

    }

    clear = () => {
        this.setState = ({
            openingTime: '',
            closingTime: '',
            managerid: 0
        });
    }

    render() {

        if(this.props.office !== undefined) {
            return <Alert severity="success">
                        <AlertTitle>Success</AlertTitle>
                     You have successfully added a new office!
            </Alert>
        }

        return (
            <div>

                <InputLabel htmlFor="openingTime-native-simple">Opening Time</InputLabel>
                <TextField
                    variant="outlined"
                    required
                    fullWidth
                    type="text"
                    id="openingTime"
                    name="openingTime"
                    autoComplete="openingTime"
                    value={this.state.openingTime}
                    onChange={this.handleInputChange}
                    autoFocus
                />
                <Box m={2} />

                <InputLabel htmlFor="closingTime-native-simple">Closing Time</InputLabel>
                <TextField
                    variant="outlined"
                    required
                    fullWidth
                    type="text"
                    id="closingTime"
                    name="closingTime"
                    autoComplete="closingTime"
                    value={this.state.closingTime}
                    onChange={this.handleInputChange}
                    autoFocus
                />
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

                <Button variant="contained" color="secondary" onClick={this.createOffice}>
                    Add
                </Button>
            </div >
        );
    }
}
function mapStateToProps(state) {

    return { office: state.managerReducer.office }
}

function mapDispatchToProps(dispatch) {
    return {
        managerActions: bindActionCreators(managerActions, dispatch)
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(AddOfficeComponent);
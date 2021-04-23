import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as customerActions from '../store/actions/CustomerActions';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import { makeStyles } from '@material-ui/core/styles';
import {Icon} from '@material-ui/core/Icon';

const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1),
    },
}));

function IconLabelButtons() {
    const classes = useStyles();

    return (
        <div>
            <Button
                variant="contained"
                color="secondary"
                className={classes.button}
                startIcon={<DeleteIcon />}
            >
                Delete
          </Button>
        </div>
    );
}

class CustomerProfileComponent extends Component {

    componentDidMount() {  
        
        const { customerActions, match } = this.props;
        customerActions.fetchCustomer(match.params.customerid);    
        
    }

    render() {
        const { customer } = this.props;
        return (
            <div class="container">
                <h2>Customer Details</h2>
                {
                     customer !== undefined ?
 
                        <table class="table table-dark table-striped table-hover">
                            <thead>
                                <tr>
                                    <th>Customer ID</th>
                                    <th>Aadhar No.</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Mobile No.</th>
                                    <th>Bank Account No.</th>
                                    <th>Update Address</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                        <tr>
                                            <td>{customer.customerid}</td>
                                            <td>{customer.aadharno}</td>
                                            <td>{customer.firstname}</td>
                                            <td>{customer.lastname}</td>
                                            <td>{customer.mobileno}</td>
                                            <td>{customer.acct.accountno}</td>
                                            <td><Link to={`/registerAddress/${customer.customerid}`}>Update</Link></td>
                                        </tr>
                                }
                            </tbody>
                        </table>
                        :
                        <h3>Loading....</h3>
                }
            </div>
        );
    }
}
 
function mapStateToProps(state) {
 
    return { customer: state.customerReducer.customer }
}  
 
function mapDispatchToProps (dispatch) {
   return {
      customerActions : bindActionCreators(customerActions,dispatch)      
   }   
  };
 
export default connect(mapStateToProps, IconLabelButtons, mapDispatchToProps)(CustomerProfileComponent);
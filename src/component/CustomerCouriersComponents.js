/*
 *  List for getting all couriers of a particular customer
 */

import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as customerActions from '../store/actions/CustomerActions';
import Box from '@material-ui/core/Box';
import CustomerCouriersPage from '../component/CustomerCouriersPage';
import TestNav2 from '../component/TestNav2';

class GetAllCouriersComponent extends Component {
 
    componentDidMount() {    

        const { customerActions, match } = this.props;
        customerActions.fetchAllCouriers(match.params.customerid);  
        
    }
    render() {
        return (
            <div class="container">
                <Box m={15}/>
              <CustomerCouriersPage/>
                <TestNav2/>
                <Box m={5}/>
                {
                     this.props.couriers !== undefined ?
 
                        <div class="container">
                            <br></br>
                            <br></br>
                            <h2>Courier List!</h2>
                            <br></br>
                            <ul class="responsive-table">
                                <li class="table-header">
                                    <div class="col">Courier ID</div>
                                    <div class="col">Consignment No.</div>
                                    <div class="col">Initiated Date</div>
                                    <div class="col">Delivered Date</div>
                                    <div class="col">Status</div>
                                </li>
                            </ul>
                            <ul>
                                {
                                    this.props.couriers.map((courier, index) =>
                                        <li class= "table-row">
                                            <div class="col">{courier.courierId}</div>
                                            <div class="col">{courier.consignmentNo}</div>
                                            <div class="col">{courier.initiatedDate}</div>
                                            <div class="col">{courier.deliveredDate}</div>
                                            <div class="col">{courier.status}</div>
                                        </li>)
                                }
                            </ul>
                        </div>
                        :
                        <h3>Loading....</h3>
                }
            </div>
        );
    }
}
 
function mapStateToProps(state) {
 
    return { couriers: state.customerReducer.couriers }
}  
 
function mapDispatchToProps (dispatch) {
   return {
      customerActions : bindActionCreators(customerActions,dispatch)      
   }   
  };

export default connect(mapStateToProps,mapDispatchToProps) (GetAllCouriersComponent);
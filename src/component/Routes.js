import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomeComponent from './HomeComponent';
import CustomerComponent from '../component/CustomerComponent';
import RegistrationPage from '../component/RegistrationPage';
import LoginPage from '../component/LoginPage';
import ManagerComponent from '../component/ManagerComponent';
import CourierRegister from '../component/CourierRegister';
import CustomerProfileComponent from '../component/CustomerProfileComponent';
import CustomerComplaintsComponent from '../component/CustomerComplaintsComponents';
import CustomerCouriersComponent from '../component/CustomerCouriersComponents';
import ComplaintRegister from '../component/ComplaintRegister';
import ManagerLogin from '../component/ManagerLogin';
import ManagerRegister from '../component/ManagerRegister';
import StaffRegister from '../component/StaffRegister';
import OfficeRegister from '../component/OfficeRegister';
import ManagerStaffComponent from '../component/ManagerStaffComponent';
import ManagerAllStaffComponent from '../component/ManagerAllStaffComponent';
import ManagerAllComplaintsComponent from '../component/ManagerAllComplaintsComponent';
import ManagerGetCustomerComponent from '../component/ManagerGetCustomerComponent'
import ManagerAllCouriersComponent from '../component/ManagerAllCouriersComponent';
import ManagerDeleteStaffComponent from '../component/ManagerDeleteStaffComponent';
import CustomerAddressComponent from '../component/CustomerAddressComponent';
import OfficeAddressComponent from '../component/OfficeAddressComponent';
import ShipmentComponent from '../component/ShipmentComponent';
import ManagerAllOfficeComponent from '../component/ManagerAllOfficeComponent';
import ManagerDeleteOfficeComponent from '../component/ManagerDeleteStaffComponent';
import ShipmentStatusesComponent from '../component/ShipmentStatusesComponent';
import ShipmentInitiateComponent from '../component/ShipmentInitiateComponent';
import ShipmentCloseComponent from '../component/ShipmentCloseComponent';
import ShipmentRejectComponent from '../component/ShipmentRejectComponent'
import Checkout from '../component/Checkout';


const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path='/' component={HomeComponent} exact />
            <Route path={`/customer/customerid=:customerid/Home`} component={CustomerComponent}/>
            <Route path={`/manager/managerid=:managerid/Home`} component={ManagerComponent}/>
            <Route path={`/:managerid/Shipment`} component={ShipmentComponent} />
--------------------------------------------------------------------------------------------------------------------------------------
            <Route path={`/login`} component={LoginPage}/>
            <Route path={`/register`} component={RegistrationPage}/>
            <Route path={`/profile/:customerid`} component={CustomerProfileComponent}/>
            <Route path={`/registerAddress/:customerid`} component={CustomerAddressComponent}/>
            <Route path={`/newCourier`} component={CourierRegister}/>
            <Route path={`/getCouriers/:customerid`} component={CustomerCouriersComponent}/>
            <Route path={`/getComplaints/:customerid`} component={CustomerComplaintsComponent}/>
            <Route path={`/registerComplaint`} component={ComplaintRegister}/>
            <Route path={`/byCard/:customerid`} component={Checkout}/>
----------------------------------------------------------------------------------------------------------------------------------------
            <Route path={`/managerLogin`} component={ManagerLogin}/>
            <Route path={`/addManager/:managerid`} component={ManagerRegister}/>
            <Route path={`/addStaff/:managerid`} component={StaffRegister}/>
            <Route path={`/addOffice/:managerid`} component={OfficeRegister}/>
            <Route path={`/getAllStaff/:managerid`} component={ManagerAllStaffComponent}/>
            <Route path={`/getStaff/:managerid/view/:empid`} component={ManagerStaffComponent} exact/>
            <Route path={`/getAllComplaints/:managerid`} component={ManagerAllComplaintsComponent} />
            <Route path={`/getAllCouriers/:managerid`} component={ManagerAllCouriersComponent} />
            <Route path={`/getAllOffice/:managerid`} component={ManagerAllOfficeComponent} />
            <Route path={`/getCustomer/:managerid/view/:customerid`} component={ManagerGetCustomerComponent} />
            <Route path={`/deleteStaff`} component={ManagerDeleteStaffComponent} />
            <Route path={`/addAddress/:managerid/office/:officeid`} component={OfficeAddressComponent}/>
            <Route path={`/deleteOffice/:managerid/office/:officeid`} component={ManagerDeleteOfficeComponent}/>
-----------------------------------------------------------------------------------------------------------------------------------
            <Route path={`/getStatus/:managerid`} component={ShipmentStatusesComponent}/>
            <Route path={`/initiateCourier/:managerid`} component={ShipmentInitiateComponent}/>
            <Route path={`/closeCourier/:managerid`} component={ShipmentCloseComponent}/>
            <Route path={`/rejectCourier/:managerid`} component={ShipmentRejectComponent}/>
            
        </Switch>
    </BrowserRouter>
);
 
export default Routes;
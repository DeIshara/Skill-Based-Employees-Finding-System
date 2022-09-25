
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Footer from "./components/Footer";
import './App.css';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Row from "react-bootstrap/Row";
// import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import RightSlider from './components/RightSlider';
import Home from './components/Home';
import EmployeeCategories from "./components/EmployeeCategories";
import EmployeePost from './components/EmployeePost';
import FinderPost from './components/FinderPost';
import Support from './components/Support';
import AdminProfile from './components/AdminProfile';
import EmployeeProfile from './components/EmployeeProfile';
import FinderProfile from './components/FinderProfile';
import CategoryLists from './components/CategoryLists';
import ManageCriteria from './components/ManageCriteria';
import PaymentProcedure from './components/PaymentProcedure';
import EmployeeList from './components/ManageUsers/EmployeeList';
import FinderList from './components/ManageUsers/FinderList';
import CategoryList from './components/ManageUsers/CategoryList';
import EditEmployee from "./components/edit-employee";
import EditCategory from "./components/edit-category";
import EmployeePostList from './components/ManageUsers/EmployeePostList';
import FinderPostList from './components/ManageUsers/FinderPostList';
import HomeScreenPostList from './components/ManageUsers/HomeScreenPostList';


class App extends Component {

 render(){
  return(
    <div> 
    <Router>
        <Col>
            <Row>  
                <Col sm={9} style={{background: '#e8e8e8',fontFamily: "Sans-serif"}} >
                    <div className="wrapper">
                        <Switch>
                            <Route exact path='/' component={Home} />
                            <Route path="/SignIn" component={SignIn} />
                            <Route path="/SignUp" component={SignUp} />
                            <Route path="/Home" component={Home} />
                            <Route path="/EmployeeCategories" component={EmployeeCategories} />
                            <Route path="/EmployeePost" component={EmployeePost} />
                            <Route path="/FinderPost" component={FinderPost} />
                            <Route path="/Support" component={Support} />
                            <Route path="/AdminProfile" component={AdminProfile} />
                            <Route path="/EmployeeProfile" component={EmployeeProfile} />
                            <Route path="/FinderProfile" component={FinderProfile} />
                            <Route path="/ManageCriteria" component={ManageCriteria} />
                            <Route path="/EmployeeList" component={EmployeeList} />
                            <Route path="/PaymentProcedure" component={PaymentProcedure} />
                            <Route path="/FinderList" component={FinderList} />
                            <Route path="/CategoryList" component={CategoryList} />
                            <Route path="/EmployeePostList" component={EmployeePostList} />
                            <Route path="/HomeScreenPostList" component={HomeScreenPostList} />
                            <Route path="/FinderPostList" component={FinderPostList} />
                            <Route path="/employees/edit-employee/:id" component={EditEmployee} />
                            <Route path="/categories/edit-category/:id" component={EditCategory} />
                            <Route path="/categoryLists/:category" component={CategoryLists} />
                        </Switch>
                    </div>
                </Col>     
           
                <Col sm={3} style={{background:'#f5f5f5'}} className="text-center">   
                    <RightSlider/>
                </Col>   
            </Row>
          </Col>
          <Footer/>
    </Router>
    </div>
  );
 }
}      
  
export default App;

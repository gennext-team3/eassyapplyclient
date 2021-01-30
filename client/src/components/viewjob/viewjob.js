import React from 'react';
import classes from './viewjob.module.css';
import ClientNav from '../Navbars/clientSideNavbar/navbar';
import {Container,Row,Col} from 'react-bootstrap';
import Footer from '../footer/footer';
import facebookimage from '../../assets/facebookimage.jpg';
import facebookimg from '../../assets/facebookimg.jpg';
import { NavLink } from 'react-router-dom';

const companyabouts = ()=>{
    return(
        <>
        <ClientNav />
        <Container>
            <Row className={classes.Background}>
                <Col>
                    <div className={classes.Centered}>
                        <h5 className={classes.P}>Job Position : SDE-2</h5>
                        <p>Location : Banglore , Karnataka</p>
                        <h5 className={classes.P}>Primary Skills:</h5>
                        <p>java , Sql/NoSql , ReactJs , JavaScript</p>
                        <h5 className={classes.P}>Secondary Skills:</h5>
                        <p>Figma , strong communication Skills , git/gtihub</p>
                        <h5 className={classes.P}>Responsibilities:</h5>
                        <p>i.Develops information systems by designing, developing, and installing software solutions.</p>
                        <p>ii.Determines operational feasibility by evaluating analysis, problem definition, requirements, solution development, and proposed solutions.</p>
                        <NavLink to="/jobforms" class="btn btn-outline-success">Apply</NavLink> 
                    </div>
                </Col>
                <Col>
                    <div className={classes.Centered}>
                        <h5 className={classes.P}>Job Description</h5>
                        <p>Software engineers on these teams use the latest technology to build new features and improve existing components across all of Facebook's apps and services. They also partner closely with product teams to define feature specifications and build the next generation of products from Facebook</p>
                    </div>
                    
                </Col>
                <Col>
                    <img src={facebookimage} alt="Office" className={classes.Img}/>
                    <img className="mb-5" src={facebookimg} alt="Office" className={classes.Img}/>
                </Col>
            </Row>

            <div className="my-5">
            <h2 className="text-center font-weight-lighter">Similar Jobs</h2>
            </div>
            <div className="container-fluid mb-5">
            <div className="row">
            <div className="col-10 mx-auto">
                <div className="row">
                
                <div className="col-md-4 col-10 mx-auto">
                <div class="card">
                <div class="card-header font-weight-normal">
                Uber
                 </div>
            <div class="card-body">
                <h5 class="card-title">UI/UX Developer</h5>
            <p class="card-text">Banglore , Karnataka</p>
            <NavLink to="/jobforms" class="btn btn-outline-success">Apply</NavLink> 
            <a href="#" class="btn btn-primary ml-2">View</a>
                </div>
            </div>
                </div>
                <div className="col-md-4 col-10 mx-auto">
                <div class="card">
                <div class="card-header font-weight-normal">
                Adobe
                 </div>
            <div class="card-body">
                <h5 class="card-title">SDE-2</h5>
            <p class="card-text">Noida , UttarPradesh</p>
            <NavLink to="/jobforms" class="btn btn-outline-success">Apply</NavLink> 
            <a href="#" class="btn btn-primary ml-2">View</a>
                </div>
            </div>
                </div>
                <div className="col-md-4 col-10 mx-auto">
                <div class="card">
                <div class="card-header font-weight-normal">
                Amazon
                 </div>
            <div class="card-body">
                <h5 class="card-title">SDE-2</h5>
            <p class="card-text">Hyderabad , Telengana</p>
            <NavLink to="/jobforms" class="btn btn-outline-success">Apply</NavLink> 
            <a href="#" class="btn btn-primary ml-2">View</a>
                </div>
            </div>
                </div>
                </div>
                </div>
                </div>
                </div>
        </Container>
        <Footer />
        </>
    )
}
export default companyabouts;
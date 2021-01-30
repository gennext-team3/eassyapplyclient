import React from 'react';
import ClientNav from '../Navbars/clientSideNavbar/navbar';
import Footer from '../footer/footer';
import Classes from './jobs.module.css';
import {Button,Form} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const job = ()=>{
    return(
        <>
        <ClientNav />
            <div>
            <div className={Classes.BackDrop}></div>
            <center className={Classes.AlignCarousel}>
                <div className={Classes.Centered}>
                    <Form.Control 
                        size="lg" 
                        type="text" 
                        placeholder="Find a career in.." 
                        style={{border:'none',borderRadius:'0',borderRight:'0.5px solid #ddd'}}
                    />
                    <Form.Control 
                        size="lg" 
                        type="text" 
                        placeholder="Near me" 
                        style={{border:'none',borderRadius:'0'}}
                    />
                    <Button className={Classes.btn} >Search</Button>
                </div>
            </center>
        </div>
        
        <hr />
        
            <div className="my-5">
            <h2 className="text-center font-weight-lighter">Showing All Job Results</h2>
            </div>
            <div className="container-fluid mb-5">
            <div className="row">
            <div className="col-10 mx-auto">
                <div className="row">
                
                <div className="col-md-4 col-10 mx-auto">
                <div class="card">
                <div class="card-header font-weight-normal">
                Facebook
                 </div>
            <div class="card-body">
                <h5 class="card-title">Software Development Engineer-2</h5>
            <p class="card-text">Banglore , Karnataka</p>
            <NavLink to="/jobforms" class="btn btn-outline-success">Apply</NavLink> 
            <NavLink to="/viewjob" class="btn btn-primary ml-2">View</NavLink>
                </div>
            </div>
                </div>
                
                <div className="col-md-4 col-10 mx-auto">
                <div class="card">
                <div class="card-header">
                Sprinklr
                 </div>
            <div class="card-body">
                <h5 class="card-title">Product Engineer Intern</h5>
            <p class="card-text">Hyderabad , Telengana</p>
            <a href="#" class="btn btn-outline-success">Apply</a> 
            <a href="#" class="btn btn-primary ml-2">View</a>
                </div>
            </div>
                </div>
                
                <div className="col-md-4 col-10 mx-auto">
                <div class="card">
                <div class="card-header">
                Gennext IT Solution
                 </div>
            <div class="card-body">
                <h5 class="card-title">React Native Intern</h5>
            <p class="card-text">Delhi , NCR</p>
            <a href="#" class="btn btn-outline-success">Apply</a> 
            <a href="#" class="btn btn-primary ml-2">View</a>
                </div>
            </div>
                </div>
                
                <div className="col-md-4 col-10 mx-auto mt-3">
                <div class="card">
                <div class="card-header">
                Adobe
                 </div>
            <div class="card-body">
                <h5 class="card-title">Software Development Engineer</h5>
            <p class="card-text">Banglore , Karnataka</p>
            <a href="#" class="btn btn-outline-success">Apply</a> 
            <a href="#" class="btn btn-primary ml-2">View</a>
                </div>
            </div>
                </div>
                
                <div className="col-md-4 col-10 mx-auto mt-3">
                <div class="card">
                <div class="card-header">
                Amazon
                 </div>
            <div class="card-body">
                <h5 class="card-title">Software Development Engineer</h5>
            <p class="card-text">Banglore , Karnataka</p>
            <a href="#" class="btn btn-outline-success">Apply</a> 
            <a href="#" class="btn btn-primary ml-2">View</a>
                </div>
            </div>
                </div>
                
                <div className="col-md-4 col-10 mx-auto mt-3">
                <div class="card">
                <div class="card-header">
                Linkedin
                 </div>
            <div class="card-body">
                <h5 class="card-title">UI/UX Developer</h5>
            <p class="card-text">Banglore , Karnataka</p>
            <a href="#" class="btn btn-outline-success">Apply</a> 
            <a href="#" class="btn btn-primary ml-2">View</a>
                </div>
            </div>
                </div>
                
                <div className="col-md-4 col-10 mx-auto mt-3">
                <div class="card">
                <div class="card-header">
                Uber
                 </div>
            <div class="card-body">
                <h5 class="card-title">Android Developer</h5>
            <p class="card-text">Noida , UttarPradesh</p>
            <a href="#" class="btn btn-outline-success">Apply</a> 
            <a href="#" class="btn btn-primary ml-2">View</a>
                </div>
            </div>
                </div>
                
                <div className="col-md-4 col-10 mx-auto mt-3">
                <div class="card">
                <div class="card-header">
                Microsoft
                 </div>
            <div class="card-body">
                <h5 class="card-title">Software Development Engineer-3</h5>
            <p class="card-text">Banglore , Karnataka</p>
            <a href="#" class="btn btn-outline-success">Apply</a> 
            <a href="#" class="btn btn-primary ml-2">View</a>
                </div>
            </div>
                </div>
                
                <div className="col-md-4 col-10 mx-auto mt-3">
                <div class="card">
                <div class="card-header">
                Postman
                 </div>
            <div class="card-body">
                <h5 class="card-title">Software Engineer Intern</h5>
            <p class="card-text">Banglore , Karnataka</p>
            <a href="#" class="btn btn-outline-success">Apply</a> 
            <a href="#" class="btn btn-primary ml-2">View</a>
                </div>
            </div>
                </div>
                
                <div className="col-md-4 col-10 mx-auto mt-3">
                <div class="card">
                <div class="card-header">
                Goldman Sachs
                 </div>
            <div class="card-body">
                <h5 class="card-title">Summer Analyst Intern</h5>
            <p class="card-text">Banglore , Karnataka</p>
            <a href="#" class="btn btn-outline-success">Apply</a> 
            <a href="#" class="btn btn-primary ml-2">View</a>
                </div>
            </div>
                </div>
                
                <div className="col-md-4 col-10 mx-auto mt-3">
                <div class="card">
                <div class="card-header">
                Google
                 </div>
            <div class="card-body">
                <h5 class="card-title">Software Development Engineer</h5>
            <p class="card-text">Noida , UttarPradesh</p>
            <a href="#" class="btn btn-outline-success">Apply</a> 
            <a href="#" class="btn btn-primary ml-2">View</a>
                </div>
            </div>
                </div>
                
                <div className="col-md-4 col-10 mx-auto mt-3">
                <div class="card">
                <div class="card-header">
                Capgemini
                 </div>
            <div class="card-body">
                <h5 class="card-title">System Engineer</h5>
            <p class="card-text">Pune , Maharastra</p>
            <a href="#" class="btn btn-outline-success">Apply</a> 
            <a href="#" class="btn btn-primary ml-2">View</a>
                </div>
            </div>
                </div>
                
                </div>
            </div>
            </div>
            </div>

           
        <Footer />
        </>
    )
}
export default job;
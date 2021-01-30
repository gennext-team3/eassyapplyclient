import React from 'react';
import ClientEmployerNav from '../Navbars/clientEmployerNav/clientEmployerNav';
import EmployersCarousel from '../carousel/employersCarousel';
import classes from './employers.module.css';
import Footer from '../footer/footer';
import { Form,Col,Container,Button } from 'react-bootstrap';

const Employers = ()=>{
    return(
        <>
            <ClientEmployerNav/>
            <EmployersCarousel/>
            <center style={{background:'whitesmoke'}}>
                <h3 className={classes.H3}>
                    “In an era when only 12% of candidates put trust in what employers say about themselves, companies must increasingly rely on their employees to be their spokespeople on the employee experience.”
                </h3>
                <h3 className={classes.H3}>
                    – Harvard Business Review
                </h3>
            </center>
            <div className={classes.Form}>
                <h4 className={classes.H4}>Ready to hire quality talent with The Easy Apply?</h4>
                <p className={classes.P}>Learn how The Muse can help you build your employer brand.</p>
                <Container> 
                    <Form>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridFirst">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter First Name" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridLast">
                            <Form.Label>Last name</Form.Label>
                            <Form.Control type="text" placeholder="Enter Last Name" />
                            </Form.Group>
                        </Form.Row>
                        <Form.Group controlId="formBasicCompany">
                            <Form.Label>Company</Form.Label>
                            <Form.Control type="text" placeholder="Enter Company Name" />
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Label>Number Of Employees</Form.Label>
                            <Form.Control 
                                as="select"
                            >
                            <option value="">---select---</option>
                            <option value="0">0-100</option>
                            <option value="101">101-500</option>
                            <option value="501">501-1000</option>
                            <option value="1001">1001-5000</option>
                            <option value="5000+">5000+</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter Email" />
                        </Form.Group>
                        <Form.Group controlId="formBasicPhone">
                            <Form.Label>Phone</Form.Label>
                            <Form.Control type="text" placeholder="Enter Phone Number" />
                        </Form.Group>
                        <Form.Group controlId="formBasicPhone">
                            <Form.Label>Country</Form.Label>
                            <Form.Control type="text" placeholder="Enter Country" />
                        </Form.Group>
                        <center>
                            <Button variant="light" size="lg">SUBMIT</Button>
                        </center>
                    </Form>
                </Container>
            </div>
            <Footer/>
        </>
    )
}
export default Employers;
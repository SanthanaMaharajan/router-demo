import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Col, Container, Row,Button } from 'react-bootstrap';
import { FaUsers ,FaHandPointUp, FaMagnet} from 'react-icons/fa';
import { BsCaretDownFill, BsCaretUpFill } from 'react-icons/bs';
import { BsHouse, BsPlus } from 'react-icons/bs';
import Graph from './images.png'
import Pie from './pie.png'
import { GiCirclingFish } from "react-icons/gi";
import { useNavigate } from 'react-router-dom';


function Dashboard() {
  const navigate=useNavigate()

    return ( 
        <div>
            <Header/>
            <h3 className='sec-head position-relative m-5'>Dashboard</h3>
            <Button variant='danger' onClick={()=>navigate("/add-product")}><BsPlus className='fs-4'/> Add Product</Button>
            <Container>
                <h4 className='text-dark text-start'>Analytics Overview</h4>
                <Row className=''>
                    <Col xs={6} lg={3} className='px-3 my-3 '>
                        <div className='shadow-bg py-4'>
                            <div className='text-warning border border-1 rounded-circle w-25 m-auto p-2 d-flex justify-content-center align-items-center'>
                                <FaUsers className='fs-3'/>
                            </div>
                            <h2 className='fw-bold py-2 fs-4'>28.7k</h2>
                                <small>Total Followers</small>
                                <span className='text-success'><BsCaretUpFill/>28.8%</span>
                        </div>                        
                    </Col>
                    <Col xs={6} lg={3} className='px-3 my-3 '>
                        <div className='shadow-bg py-4'>
                            <div className='text-primary border border-1 rounded-circle w-25 m-auto p-2 d-flex justify-content-center align-items-center'>
                                <FaHandPointUp className='fs-3'/>
                            </div>
                            <h2 className='fw-bold py-2 fs-4'>8.1k</h2>
                                <small>Impressions</small>
                                <span className='text-success'><BsCaretUpFill/>78.8%</span>
                        </div>                        
                    </Col>
                    <Col xs={6} lg={3} className='px-3 my-3 '>
                        <div className='shadow-bg py-4'>
                            <div className='text-warning border border-1 rounded-circle w-25 m-auto p-2 d-flex justify-content-center align-items-center'>
                                <GiCirclingFish className='fs-3'/>
                            </div>
                            <h2 className='fw-bold py-2 fs-4'>1.7k</h2>
                                <small>Total Engagements</small>
                                <span className='text-danger'><BsCaretDownFill/>12.3%</span>

                        </div>                        
                    </Col>
                    <Col xs={6} lg={3} className='px-3 my-3 '>
                        <div className='shadow-bg py-4'>
                            <div className='text-warning border border-1 rounded-circle w-25 m-auto p-2 d-flex justify-content-center align-items-center'>
                                <FaMagnet className='fs-3'/>
                            </div>
                            <h2 className='fw-bold py-2 fs-4'>1k</h2>
                                <small>Conversion Rate</small>
                                <span className='text-success'><BsCaretUpFill/>18.8%</span>
                        </div>                        
                    </Col>
                </Row>
                <Row>
                    <Col xs={6} className='px-3 py-2 my-3  '>
                        <h4 className='text-dark text-start'>Followers</h4>
                        <div className='shadow-bg py-2'>
                            <img src={Graph}  className='img-fluid w-75'/>
                        </div>
                        
                    </Col>
                    <Col xs={6} className='px-3 py-2 my-3 h-100'>
                        <h4 className='text-dark text-start'>Conversion Rate</h4>
                        <div className='shadow-bg py-2'>
                            <Row className='px-3 py-5'>
                                <Col xs={7} className='px-4'>
                                    <h4 className='fs-5 text-start'>Conversion per ad</h4>
                                    <small className='fs-6 text-start'>Diam voluptua et  no lorem justo. Takimata magna duo et amet. Lorem gubergren labore invidunt diam. Ipsum et consetetur kasd at at clita dolore. Diam erat.</small>
                                </Col>
                                <Col xs={5}>
                                    <img src={Pie}  className='img-fluid w-100'/>
                                </Col>
                            </Row>
                        </div> 
                    </Col>
                </Row>
            </Container>
            <Footer/>
        </div>
     );
}

export default Dashboard;
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from 'react-bootstrap';
import { BsChevronRight, BsFacebook, BsInstagram, BsLinkedin, BsSkype, BsTwitter } from 'react-icons/bs';


function Footer() {
  return (
    <div  className='foot'>
        <Container className='container-fluid foot' >
            <Row className='text-start mt-5'>
                <Col xs={6} lg={3}>
                    <h4 className="fw-bold"> Baker</h4>
                    <address>A108 Adam Street
                        New York, NY 535022
                        United States
                    </address>

                    <p><strong>Phone:</strong> +1 5589 55488 55</p>
                    <p><strong>Email:</strong> info@example.com</p>
                </Col>
                <Col xs={6} lg={2}>
                    <h4 className="fw-bold">Useful Links</h4>
                    <ul className='list-unstyled'>
                        <li className='py-2'><i className="text-warning pe-2"><BsChevronRight/></i>Home</li>
                        <li className='py-2'><i className="text-warning pe-2"><BsChevronRight/></i>About us</li>
                        <li className='py-2'><i className="text-warning pe-2"><BsChevronRight/></i>Services</li>
                        <li className='py-2'><i className="text-warning pe-2"><BsChevronRight/></i>Terms of service</li>
                        <li className='py-2'><i className="text-warning pe-2"><BsChevronRight/></i>Privacy policy</li>
                    </ul>
                </Col>
                <Col xs={6} lg={3}>
                    <h4 className="fw-bold">Our Services</h4>
                    <ul className='list-unstyled'>
                        <li className='py-2'><i className="text-warning pe-2"><BsChevronRight/></i>Web Design</li>
                        <li className='py-2'><i className="text-warning pe-2"><BsChevronRight/></i>Web Development</li>
                        <li className='py-2'><i className="text-warning pe-2"><BsChevronRight/></i>Product Management</li>
                        <li className='py-2'><i className="text-warning pe-2"><BsChevronRight/></i>Marketing</li>
                        <li className='py-2'><i className="text-warning pe-2"><BsChevronRight/></i>Graphic Design</li>
                    </ul>
                </Col>
                <Col xs={6} lg={4}>
                    <h4 className="fw-bold">Join Our Newsletter</h4>

                    <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
                    <div className='border border-1 border-dark rounded-pill p-1'>
                        <input type='text' className='border-0 w-auto mx-2 py-1'/>
                        <Button variant='warning' className='rounded-pill'> Subscribe</Button>
                    </div>
                </Col>
            </Row>
            
        </Container>
        <hr/>
        <Container>
            <Row className='text-start mt-3'>
                <Col xs={4}>
                    &copy; Copyrights <strong>Baker</strong>. All rights reserved
                    Designed by <span className='text-warning'>Santhana Maharajan</span>
                </Col>
                <Col xs={4}>

                </Col>
                <Col xs={4} className='social-icons text-end'>
                    <i className="border border-1 rounded-circle p-2 m-2"><BsTwitter/></i>
                    <i className="border border-1 rounded-circle p-2 m-2"><BsFacebook/></i>
                    <i className="border border-1 rounded-circle p-2 m-2"><BsInstagram/></i>
                    <i className="border border-1 rounded-circle p-2 m-2"><BsSkype/></i>
                    <i className="border border-1 rounded-circle p-2 m-2"><BsLinkedin/></i>
                </Col>
            </Row>
        </Container>
    </div>
  );
}

export default Footer;
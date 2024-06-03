import 'bootstrap/dist/css/bootstrap.min.css';
import { Button} from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import client1 from './client-1.png';
import client2 from './client-2.png';
import client3 from './client-3.png';
import client4 from './client-4.png';
import client5 from './client-5.png';
import client6 from './client-6.png';
import About from './about.jpg';
import team1 from './team-1.jpg';
import team2 from './team-2.jpg';
import team3 from './team-3.jpg';
import team4 from './team-4.jpg';
import { BsDatabase, BsDisplay, BsEnvelope, BsFacebook, BsFiletypeTxt, BsInstagram, BsLinkedin, BsPhoneFill, BsReceipt, BsSpeedometer2, BsTwitter } from 'react-icons/bs';
import { FaArchway, FaBasketballBall, FaCube, FaLocationArrow } from 'react-icons/fa';


function Hero(){
    return(
        <div className='hero-sec text-center text-light py-5 d-flex align-items-center'>
            <Container>
                <h1 className='fs-1'>Welcome to Baker</h1>
                <h4 className='fs-5 fw-light my-4'>We are team of talented designers making websites with Bootstrap</h4>
                <Button variant='transparent' className='get-btn text-light border border-2 border-warning rounded-pill px-5 py-2'>Get started</Button>
            </Container>
        </div>
    )
}
export function Client(){
    return(
        <div>
            <Container>
            <Row className='mt-2'>
                <Col xs={4} lg={2} className='p-4 client-img'><img src={client1} className='img-fluid' alt='client-1'/></Col>
                <Col xs={4} lg={2} className='p-4 client-img'><img src={client2} className='img-fluid' alt='client-2'/></Col>
                <Col xs={4} lg={2} className='p-4 client-img'><img src={client3} className='img-fluid' alt='client-3'/></Col>
                <Col xs={4} lg={2} className='p-4 client-img'><img src={client4} className='img-fluid' alt='client-4'/></Col>
                <Col xs={4} lg={2} className='p-4 client-img'><img src={client5} className='img-fluid' alt='client-5'/></Col>
                <Col xs={4} lg={2} className='p-4 client-img'><img src={client6} className='img-fluid' alt='client-6'/></Col>
            </Row>
            </Container>
        </div>
    )
}

export function AboutSection(){
    return(
        <div>
            <Container className='pt-5'>
                <h3 className='sec-head position-relative'>ABOUT US</h3>
                <p className='text-secondary py-4'>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                <Row className='text-start py-5'>
                    <Col xs={12} lg={6}>
                        <img src={About} alt="" className='img-fluid'/>
                    </Col>
                    <Col xs={12} lg={6}>
                        <h2>Voluptatem dignissimos provident quasi</h2>
                        <p  className='text-secondary'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit</p>
                        <Row className='about-sec'>
                            <Col xs={6}>
                                <span className=" fs-1"><BsReceipt/></span>
                                <h5 className='pt-2'>Corporis voluptates sit</h5>
                                <p className='text-secondary'>Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</p>
                            </Col>
                            <Col xs={6}>
                                <span className='fs-1'><FaCube/></span>
                                <h5 className='pt-2'>Ullamco laboris nisi</h5>
                                <p className='text-secondary'>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export function Service(){
    return(
        <div>
            <Container>
                <h3 className='sec-head position-relative'>SERVICES</h3>
                <p className='text-secondary py-4'>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                <Row>
                    <CardGroup className='py-5'>
                        <Card className='px-3 ' border="light" style={{ width: '33.33%' }}>                            
                            <Card.Body>
                            <div className="text-primary w-25 py-3 my-3 rounded-circle m-auto border border-1 d-flex align-item-center justify-content-center fs-2"><FaBasketballBall/></div>
                            <Card.Title>Lorem Ipsum</Card.Title>
                            <Card.Text>
                            Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi
                            </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className='px-3' border="light" style={{ width: '33.33%' }}>                            
                            <Card.Body>
                            <div className="text-danger w-25 py-3 my-3 rounded-circle m-auto border border-1 d-flex align-item-center justify-content-center fs-2"><BsFiletypeTxt/></div>
                            <Card.Title>Sed Perspiciatis</Card.Title>
                            <Card.Text>
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                            </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className='px-3' border="light" style={{ width: '33.33%' }}>                            
                            <Card.Body>
                            <div className="text-warning w-25 py-3 my-3 rounded-circle m-auto border border-1 d-flex align-item-center justify-content-center fs-2"><BsSpeedometer2/></div>
                            <Card.Title>Magni Dolores</Card.Title>
                            <Card.Text>
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                            </Card.Text>
                            </Card.Body>
                        </Card>
                    </CardGroup>
                    <CardGroup className='py-3'>
                        <Card className='px-3' border="light" style={{ width: '33.33%' }}>                            
                            <Card.Body>
                            <div className="text-warning w-25 py-3 my-3 rounded-circle m-auto border border-1 d-flex align-item-center justify-content-center fs-2"><BsDatabase/></div>
                            <Card.Title>Nemo Enim</Card.Title>
                            <Card.Text>
                            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
                            </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className='px-3' border="light" style={{ width: '33.33%' }}>                            
                            <Card.Body>
                            <div className="text-danger w-25 py-3 my-3 rounded-circle m-auto border border-1 d-flex align-item-center justify-content-center fs-2"><BsDisplay/></div>
                            <Card.Title>Dele Cardo</Card.Title>
                            <Card.Text>
                            Quis consequatur saepe eligendi voluptatem consequatur dolor consequuntur
                            </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className='px-3' border="light" style={{ width: '33.33%' }}>                            
                            <Card.Body>
                            <div className="text-primary w-25 py-3 my-3 rounded-circle m-auto border border-1 d-flex align-item-center justify-content-center fs-2"><FaArchway/></div>
                            <Card.Title>Divera Don</Card.Title>
                            <Card.Text>
                            Modi nostrum vel laborum. Porro fugit error sit minus sapiente sit aspernatur
                            </Card.Text>
                            </Card.Body>
                        </Card>
                    </CardGroup>
                </Row>
            </Container>

            <div className='call-to-action px-5 my-5'>
                <h3>Call To Action</h3>
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <Button variant='transparent' className=' text-light border border-2 border-warning rounded-pill px-5 py-2'>Call to action</Button>
            </div>
        </div>
    )
}

export function Teams(){
    return(
        <div className='my-5 py-5'>
            <Container>
                <h3 className='sec-head position-relative'>TEAMS</h3>
                <p className='text-secondary py-4'>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                <CardGroup>
                    <Card className="m-2 border-0 team-card">
                        <Card.Img variant="top" src={team1} className='position-relative'/>
                        <div className='team-icons'>
                            <span className="p-3"><BsTwitter/></span>
                            <span className="p-3"><BsFacebook/></span>
                            <span className="p-3"><BsInstagram/></span>
                            <span className="p-3"><BsLinkedin/></span>
                        </div>
                        <Card.Body>
                        <Card.Title>Walter White</Card.Title>
                        <Card.Text>
                         Chief Executive Officer
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="m-2 border-0 team-card">
                        <Card.Img variant="top" src={team2} className='position-relative' />
                        <div className='team-icons'>
                            <span className="p-3"><BsTwitter/></span>
                            <span className="p-3"><BsFacebook/></span>
                            <span className="p-3"><BsInstagram/></span>
                            <span className="p-3"><BsLinkedin/></span>
                        </div>
                        <Card.Body>
                        <Card.Title>Sarah Jhonson</Card.Title>
                        <Card.Text>
                            Product Manager
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="m-2 border-0 team-card">
                        <Card.Img variant="top" src={team3} className='position-relative'/>
                        <div className='team-icons'>
                        <span className="p-3"><BsTwitter/></span>
                            <span className="p-3"><BsFacebook/></span>
                            <span className="p-3"><BsInstagram/></span>
                            <span className="p-3"><BsLinkedin/></span>
                        </div>
                        <Card.Body>
                        <Card.Title>William Anderson</Card.Title>
                        <Card.Text>
                            CTO
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="m-2 border-0 team-card">
                        <Card.Img variant="top" src={team4} className='position-relative'/>
                        <div className='team-icons'>
                            <span className="p-3"><BsTwitter/></span>
                            <span className="p-3"><BsFacebook/></span>
                            <span className="p-3"><BsInstagram/></span>
                            <span className="p-3"><BsLinkedin/></span>
                        </div>
                        <Card.Body>
                        <Card.Title>CTO</Card.Title>
                        <Card.Text>
                            Accountant
                        </Card.Text>
                        </Card.Body>
                    </Card>
                </CardGroup>
            </Container>
        </div>
    )
}

export function Contact(){
    return(
        <div className='my-5 py-5'>
            <Container>
                <h3 className='sec-head position-relative'>CONTACT</h3>
                <p className='text-secondary py-4'>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                <Row className='d-flex justify-content-around'>
                    <Col xs={12} lg={6} className='py-3'>
                        <Row className='shadow'>
                        <span className="text-warning w-auto py-3 my-3 rounded-circle m-auto border border-1 d-flex align-item-center justify-content-center fs-2"><FaLocationArrow/></span>
                        <h5>Our Address</h5>
                        <address>A108 Adam Street, New York, NY 535022</address>
                        </Row>
                        <Row className='d-flex justify-content-around'>
                            <Col xs={5} className='shadow'>
                            <span className="text-warning w-25 py-3 my-3 rounded-circle m-auto border border-1 d-flex align-item-center justify-content-center fs-2"><BsEnvelope/></span>
                            <h5>Email Us</h5>
                            <address>
                            info@example.com<br/>
                            contact@example.com
                            </address>
                            </Col>
                            <Col xs={5} className='shadow'>
                            <span className="text-warning w-25 py-3 my-3 rounded-circle m-auto border border-1 d-flex align-item-center justify-content-center fs-2"><BsPhoneFill/></span>
                            <h5>Call Us</h5>
                            <address>
                            +1 5589 55488 55<br/>
                            +1 6678 254445 41
                            </address>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={12} lg={6} className='py-2'>
                        <form className='shadow p-3 my-3 d-flex gap-2 flex-column align-items-center justify-content-center'>
                            <input placeholder='Your Name' className='w-100 my-2'/>
                            <input placeholder='Your Email' className='w-100 my-2'/>
                            <input placeholder='Subject' className='w-100 my-2'/>
                            <textarea rows={5}  className='w-100  p-1' placeholder='Message' />
                                
                            <Button variant='warning' className='text-light rounded-pill my-2'>Send Message</Button>
                        </form>
                        
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Hero;

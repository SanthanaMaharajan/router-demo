import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { useLocation } from 'react-router-dom';
import { Col, Container, Row, Button } from 'react-bootstrap';
import watch from './watch.png'


function Products() {
    
    const location=useLocation()
    let products=localStorage.getItem("products")? JSON.parse(localStorage.getItem("products")) :[]
    products.push(location.state)
    console.log(products)
    localStorage.setItem("products",JSON.stringify(products))

    const store=products.map((ele,index)=>{
        console.log(ele);
        return(
            <Col xs={6} lg={4} key={index} className='my-4'>
                <div className='watch-card py-5 px-4'>
                    <div>
                        <h4>{ele.brand}</h4>
                        <h6>{ele.name}</h6>
                        <p className='watch-descrip'>{ele.description}</p>
                        <div className='image-sec rounded-circle m-auto my-4'>
                            <img src={watch} className='w-75'/>
                            <div className='price-tag text-dark'>
                                <p>$ {ele.price}</p>
                            </div>
                        </div>
                        <p><span className='align-middle text-warning'>*</span> only {ele.quantity} quantity of stocks left</p>
                        <Button variant='dark' className='rounded-pill px-5'>Shop now</Button>
                    </div>
                </div>
            </Col>
        )
    })

    


    return ( 
        <div>
            <Header/>
            <h3 className='sec-head position-relative m-5'>Products</h3>

                <Container className='my-5 text-light product-container'>
                    <Row>
                        {store}
                    </Row>
                </Container>
            <Footer/>
        </div>
     );
}

export default Products;
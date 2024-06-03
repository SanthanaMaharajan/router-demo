import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { BsBriefcase } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';


function AddProduct() {

    const navigate=useNavigate()
    const [name,setName]=useState()
    const [brand,setBrand]=useState()
    const [price,setPrice]=useState()
    const [quantity,setQuantity]=useState()
    const [description,setDescription]=useState()

    function handleSubmit(e){
        e.preventDefault()
        console.log(e.target.elements);
        navigate('/products',{state:{name,brand,price,quantity,description}})
        e.target.elements.name.value=''
        e.target.elements.brand.value=''
        e.target.elements.price.value=''
        e.target.elements.quantity.value=''
        e.target.elements.description.value=''
    }
    return ( 
        <div>
            <Header/>
            <Container>
                <div className='border border-1 rounded w-75 m-auto my-4 px-5 py-4 product-form'>
                    <div>
                        <span className='fs-2 text-danger rounded-circle icon'><BsBriefcase/></span>
                    </div>
                    <div className='py-4'>
                        <h5>New Product Form</h5>
                    </div>
                    <form className='text-start' onSubmit={handleSubmit}>
                        <h5>Product Details</h5>
                        <div className='py-3'>
                            <Row>
                                <Col xs={6}>
                                    <h6>Product Name</h6>
                                    <input type='text' placeholder='Enter Product Name' name='name' required onChange={(e)=>setName(e.target.value)} className='border border-1 w-100 p-2'/>
                                </Col>
                                <Col xs={6}>
                                    <h6>Product Brand</h6>
                                    <input type='text' placeholder='Enter Brand Name' name='brand' required onChange={(e)=>setBrand(e.target.value)} className='border border-1 w-100 p-2'/>
                                </Col>
                            </Row>
                        </div>
                        <div className='py-3'>
                            <Row>
                                <Col xs={6}>
                                    <h6>Product Price</h6>
                                    <input type='number' placeholder='Enter Product Price' name='price' required onChange={(e)=>setPrice(e.target.value)} className='border border-1 w-100 p-2'/>
                                </Col>
                                <Col xs={6}>
                                    <h6>Product Quantity</h6>
                                    <input type='number' placeholder='Enter Quantity' name='quantity' required onChange={(e)=>setQuantity(e.target.value)} className='border border-1 w-100 p-2'/>
                                </Col>
                            </Row>
                        </div>
                        <div className='py-3'>
                            <Row>
                                <Col xs={12}>
                                    <h6>Product Description</h6>
                                    <textarea rows={5} className='w-100 border border-1 p-2' name='description' required onChange={(e)=>setDescription(e.target.value)} placeholder='Enter Product Description'></textarea>
                                </Col>
                            </Row>
                        </div>
                        <div className='py-3 d-flex justify-content-center'>
                                <Button variant='danger' type='submit' className='w-50 py-2'>Add Product</Button>
                        </div>
                    </form>
                    
                </div>
            </Container>
            <Footer/>
        </div>
     );
}

export default AddProduct;
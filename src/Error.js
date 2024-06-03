import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Page from './image404.jpg';
import { useNavigate } from 'react-router-dom';

function Error() {
        const navigate=useNavigate()
    return ( 
        <div className='container'>
            <Container className='w-100 error-container'>
                <img src={Page} alt=''/>
            </Container>
            <Button variant='success' onClick={()=>navigate("/")}>Go To Home</Button>
        </div>
     );
}

export default Error;
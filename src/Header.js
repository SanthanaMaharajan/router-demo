import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { IoMdLogOut } from 'react-icons/io';
import { Link, useNavigate } from 'react-router-dom';

function Header() {

  const navigate=useNavigate()

  const [logout,setLogout]=useState(false)
  useEffect(()=>{
    if(!localStorage.getItem('auth')) navigate('/login')
  },[logout])

  function logoutHandle(e){
        e.preventDefault()
        localStorage.removeItem('auth')
        setLogout(true)
  }
  return (
    <Navbar expand="lg" className="bg-body-tertiary" bg="transparent" data-bs-theme="dark" sticky="top">
      <Container className='nav-bar-sec'>
        <Navbar.Brand><Link className='fw-bold fs-2 text-warning' style={{ textDecoration: 'none' }} to='/'>Backer</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto d-flex align-items-center">
            <Link className='px-3 text-light'style={{ textDecoration: 'none' }} to='/'> Home</Link>
            <Link className='px-3 text-light'style={{ textDecoration: 'none' }} to='/dashboard'>Dashboard</Link>
            <Link className='px-3 text-light'style={{ textDecoration: 'none' }} to='/about'>About</Link>
            <Link className='px-3 text-light'style={{ textDecoration: 'none' }} to='/products'>Products</Link>
            <Link className='px-3 text-light'style={{ textDecoration: 'none' }} to='/login' onClick={logoutHandle}> <IoMdLogOut className='fs-6'/> Logout </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
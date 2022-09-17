import React from 'react';
import { Link } from 'react-router-dom';
import CustomToggle from '../CustomToggle';
import avatars1 from '../../assets/images/avatars/01.png';
import avatars2 from '../../assets/images/avatars/avtar_1.png';
import avatars3 from '../../assets/images/avatars/avtar_2.png';
import avatars4 from '../../assets/images/avatars/avtar_3.png';
import avatars5 from '../../assets/images/avatars/avtar_4.png';
import avatars6 from '../../assets/images/avatars/avtar_5.png';
import { Navbar, Container, Nav, Dropdown } from 'react-bootstrap';

import Logo from '../../Components/Logo';

const Header = () => {

    const minisidebar = () => {
        document.getElementsByTagName('ASIDE')[0].classList.toggle('sidebar-mini')
    }
    return (
        <Navbar expand="lg" variant="light" className="nav iq-navbar">
            <Container fluid className="navbar-inner">
                <Link to="/dashboard" className="navbar-brand">
                    <Logo color={true} />
                    <h4 className="logo-title">Toonflix CMS</h4>
                </Link>
                <div className="sidebar-toggle" data-toggle="sidebar" data-active="true" onClick={minisidebar}>
                    <i className="icon">
                        <svg width="20px" height="20px" viewBox="0 0 24 24">
                            <path fill="currentColor" d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z" />
                        </svg>
                    </i>
                </div>
                <div className="input-group search-input">
                    <span className="input-group-text" id="search-input">
                        <svg width="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="11.7669" cy="11.7666" r="8.98856" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></circle>
                            <path d="M18.0186 18.4851L21.5426 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg>
                    </span>
                    <input type="search" className="form-control" placeholder="Search..." />
                </div>
                <Navbar.Toggle aria-controls="navbarSupportedContent">
                    <span className="navbar-toggler-icon">
                        <span className="mt-2 navbar-toggler-bar bar1"></span>
                        <span className="navbar-toggler-bar bar2"></span>
                        <span className="navbar-toggler-bar bar3"></span>
                    </span>
                </Navbar.Toggle>
                <Navbar.Collapse id="navbarSupportedContent">
                    <Nav as="ul" className="mb-2 ms-auto navbar-list mb-lg-0">
                        <Dropdown as="li" className="nav-item">
                            <Dropdown.Toggle as={CustomToggle} variant=" nav-link py-0 d-flex align-items-center" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <img src={avatars1} alt="User-Profile" className="theme-color-default-img img-fluid avatar avatar-50 avatar-rounded" />
                                <img src={avatars2} alt="User-Profile" className="theme-color-purple-img img-fluid avatar avatar-50 avatar-rounded" />
                                <img src={avatars3} alt="User-Profile" className="theme-color-blue-img img-fluid avatar avatar-50 avatar-rounded" />
                                <img src={avatars5} alt="User-Profile" className="theme-color-green-img img-fluid avatar avatar-50 avatar-rounded" />
                                <img src={avatars6} alt="User-Profile" className="theme-color-yellow-img img-fluid avatar avatar-50 avatar-rounded" />
                                <img src={avatars4} alt="User-Profile" className="theme-color-pink-img img-fluid avatar avatar-50 avatar-rounded" />
                                <div className="caption ms-3 d-none d-md-block ">
                                    <h6 className="mb-0 caption-title">Raj Chaudhary</h6>
                                    <p className="mb-0 caption-sub-title">Administrator</p>
                                </div>
                            </Dropdown.Toggle>
                            <Dropdown.Menu className="dropdown-menu-end" aria-labelledby="navbarDropdown">
                                <Dropdown.Item>
                                    <Link to={'/login'}>
                                        <span>Logout</span>
                                    </Link>
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
export default Header;
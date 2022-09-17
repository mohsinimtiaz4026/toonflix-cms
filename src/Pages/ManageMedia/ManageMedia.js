import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Button } from 'react-bootstrap';
import Luca from '../../assets/images/slider/luca.jpg';
import BigBaby from '../../assets/images/slider/the_big_baby.jpg';

const ManageMedia = () => {

    return (
        <Row>
            <Col md="12" lg="12">
                <div className="card">
                    <div className="card-body d-flex align-items-center justify-content-between">
                        <h5>Manage Media</h5>
                        <div className="input-group search-input w-50">
                            <span className="input-group-text" id="search-input">
                                <svg width="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="11.7669" cy="11.7666" r="8.98856" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></circle>
                                    <path d="M18.0186 18.4851L21.5426 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                </svg>
                            </span>
                            <input type="search" className="form-control"
                                placeholder="Search..." />
                        </div>
                        <Link to={'/media/new'}>
                            <Button variant="outline-secondary">Add Media</Button>
                        </Link>
                    </div>
                </div>
            </Col>
            <Col md="6" lg="6">
                <div className="card">
                    <div className="card-body">
                        <div className="d-flex align-items-center">
                            <img src={BigBaby} alt="Big Baby"
                                style={{
                                    width: "80px",
                                    height: "80px",
                                    borderRadius: "10px"
                                }}
                            />
                            <div className="ms-2">
                                <h5 className="card-title">Big Baby</h5>
                                <p className="m-0 card-text">para</p>
                            </div>
                        </div>
                        <h6 style={{
                            marginLeft: "85px"
                        }}>Category: <span className="text-success">Movie</span></h6>
                        <div style={{ marginLeft: '85px', marginTop: '10px' }}>
                            <Link to={'/media'}>
                                <Button variant="outline-secondary">Edit</Button>
                            </Link>
                            <Button variant="outline-danger" className="ms-2">Delete</Button>
                        </div>
                    </div>
                </div>
            </Col>
            <Col md="6" lg="6">
                <div className="card">
                    <div className="card-body">
                        <div className="d-flex align-items-center">
                            <img src={Luca} alt="Luca"
                                style={{
                                    width: "80px",
                                    height: "80px",
                                    borderRadius: "10px"
                                }}
                            />
                            <div className="ms-2">
                                <h5 className="card-title">Luca</h5>
                                <p className="m-0 card-text">para</p>
                            </div>
                        </div>
                        <h6 style={{
                            marginLeft: "85px"
                        }}>Category: <span className="text-success">Anime</span></h6>
                        <div style={{ marginLeft: '85px', marginTop: '10px' }}>
                            <Link to={'/edit_media'}>
                                <Button variant="outline-secondary">Edit</Button>
                            </Link>
                            <Button variant="outline-danger" className="ms-2">Delete</Button>
                        </div>
                    </div>
                </div>
            </Col>
            <Col md="12" lg="12">
                <nav aria-label="...">
                    <ul className="pagination d-flex justify-content-center">
                        <li className="page-item">
                            <span className="page-link" tabindex="-1" aria-disabled="true">Previous</span>
                        </li>
                        <li className="page-item active"><span className="page-link">1</span></li>
                        <li className="page-item" aria-current="page">
                            <span className="page-link">2</span>
                        </li>
                        <li className="page-item"><span className="page-link">3</span></li>
                        <li className="page-item">
                            <span className="page-link">Next</span>
                        </li>
                    </ul>
                </nav>
            </Col>
        </Row>
    );
}

export default ManageMedia;
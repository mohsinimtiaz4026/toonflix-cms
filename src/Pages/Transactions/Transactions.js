import React, { useState } from 'react';
import View from '../../assets/icons/view.svg';
import shapes1 from '../../assets/images/shapes/01.png'
import { Row, Col, Button, Modal } from 'react-bootstrap';

const Transactions = () => {

  const [showModal, setShowModal] = useState(false);
  const [sepModal, setSepModal] = useState(false);

  const ShowSepModal = () => setSepModal(true);
  const HideSepModal = () => setSepModal(false);

  const handleShow = () => setShowModal(true);
  const handleHide = () => setShowModal(false);

  return (
    <Row>
      <Col md="12" lg="12">
        <div className="overflow-hidden card" data-aos="fade-up" data-aos-delay="600">
          <div className="flex-wrap card-header d-flex justify-content-between">
            <div className="header-title">
              <h4 className="mb-2 card-title">Transactions</h4>
              <p>Balanced: $5382.76 USD</p>
            </div>
          </div>
          <div className="p-0 card-body">
            <div className="mt-4 table-responsive">
              <table id="myTable" className="table mb-0 table-striped" role="grid">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Date</th>
                    <th>Invoice ID</th>
                    <th>Amount</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div className="d-flex align-items-center">
                        <img className="rounded bg-soft-primary img-fluid avatar-40 me-3" src={shapes1} alt="profile" />
                        <h6>Anas Khan</h6>
                      </div>
                    </td>
                    <td>
                      <h6>21, May 2018</h6>
                      <p className="m-0">At <time>8:45 PM</time></p>
                    </td>
                    <td>OPO124532</td>
                    <td>$50.76</td>
                    <td className="text-success">Paid</td>
                    <td>
                      <Button variant="outline-primary"
                        onClick={handleShow}
                      >Details</Button>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="mx-5 mt-4 d-flex justify-content-end">
                <ul className="pagination">
                  <li className="page-item">
                    <span className="page-link" tabIndex="-1">
                      Previous
                    </span>
                  </li>
                  <li className="page-item active">
                    <span className="page-link">1<span className="sr-only"></span></span>
                  </li>
                  <li className="page-item">
                    <span className="page-link">2</span>
                  </li>
                  <li className="page-item">
                    <span className="page-link">3</span>
                  </li>
                  <li className="page-item">
                    <span className="page-link">Next
                    </span>
                  </li>
                </ul>
              </div>
              <Modal show={showModal} onHide={handleHide}
                scrollable={true}>
                <Modal.Header closeButton>
                  <Modal.Title>Transactions Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <h6>01 May 2022</h6>
                  <div className="card px-2 overflow-hidden">
                    <div className="card-body d-flex
                    align-items-center justify-content-between">
                      <div className="left_side">
                        <h6 className="card-title">Usman Ameer</h6>
                        <p className="card-text m-0">1:45 PM</p>
                      </div>
                      <div className="right_side d-flex align-items-center">
                        <p className="m-0 text-danger me-2">Rs 5000.00</p>
                        <Button size='sm' onClick={ShowSepModal}>
                          <img src={View} alt="view" style={{
                            width: '20px',
                            height: '20px',
                            margin: '0 5px',
                            backgroundSize: 'cover'
                          }} />
                          View
                        </Button>
                      </div>
                    </div>
                  </div>
                  <h6>01 July 2022</h6>
                  <div className="card px-2 overflow-hidden">
                    <div className="card-body d-flex
                    align-items-center justify-content-between">
                      <div className="left_side">
                        <h6 className="card-title">Anas Khan</h6>
                        <p className="card-text m-0">6:45 PM</p>
                      </div>
                      <div className="right_side d-flex align-items-center">
                        <p className="m-0 text-danger me-2">Rs 5000.00</p>
                        <Button size='sm' onClick={ShowSepModal}>
                          <img src={View} alt="view" style={{
                            width: '20px',
                            height: '20px',
                            margin: '0 5px',
                            backgroundSize: 'cover'
                          }} />
                          View
                        </Button>
                      </div>
                    </div>
                  </div>
                </Modal.Body>
              </Modal>
              <Modal show={sepModal} onHide={HideSepModal}
                scrollable={true}>
                <Modal.Header closeButton>
                  <Modal.Title>Transaction Successful</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <div className="d-flex align-items-center">
                    <h6>01 May 2022</h6>
                    <time className="ms-2">6:00 PM</time>
                  </div>
                  <p className="m-0">ID# 6235979384</p>
                  <div className="mt-2">
                    <h6>Sent to</h6>
                    <p className="m-0">Toonflix App</p>
                  </div>
                  <div className="mt-2">
                    <h6>Sent By</h6>
                    <p className="m-0">Mohsin Imtiaz</p>
                    <p className="m-0">imtiazmohsin56@gmail.com</p>
                    <p className="m-0">03211251997</p>
                  </div>
                  <div className="mt-2">
                    <h6>Amount</h6>
                    <p className="m-0">5,000.00</p>
                  </div>
                  <div className="mt-2">
                    <h6 className="text-success">Total Amount</h6>
                    <p className="m-0">5,000.00</p>
                  </div>
                </Modal.Body>
              </Modal>
            </div>
          </div>
        </div>
      </Col>
    </Row>
  );
}

export default Transactions;
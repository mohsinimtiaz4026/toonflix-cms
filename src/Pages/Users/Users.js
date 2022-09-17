import React, { useState } from "react";
import Dot from "../../Components/Dot";
import shapes1 from "../../assets/images/shapes/01.png";
import { Row, Col, Button, ButtonGroup, Modal } from "react-bootstrap";

const Users = () => {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const users = [
    {
      username: "Anas Khan",
      profile: "",
      contact: "03237900263",
      email: "khansaab0331@gmail.com",
      country: "Pakistan",
      status: "Active",
      join: "18, Jan 2021",
      plan: "1 month",
    },
    {
      username: "Raj Chaudhary",
      profile: "",
      contact: "03211251997",
      email: "imtiazmohsin56@gmail.com",
      country: "Pakistan",
      status: "Blocked",
      join: "23, july 2022",
      plan: "3 months",
    },
  ];

  const [usersList, setUsersList] = useState(users)
  const filteredRecords = (e) => {
    let inputValue = e.target.value.toLowerCase();
    if (inputValue.length > 3) {
        let usersNewList = [];
      let result = usersList.filter((user, index) => {
          if(user.username.toLocaleLowerCase().match(inputValue) ||
          user.email.toLocaleLowerCase().match(inputValue) ||
        user.contact.toLocaleLowerCase().match(inputValue) ||
        user.status.toLocaleLowerCase().match(inputValue)){
            user.key = index;
            return user;
        }        
      });
      setUsersList(result)
    }
    if(inputValue.length <=3)
      setUsersList(users)
  };

  return (
    <Row>
      <Col md="12" lg="12">
        <div
          className="overflow-hidden card"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <div className="flex-wrap card-header d-flex justify-content-between">
            <div className="header-title">
              <h4 className="mb-2 card-title">Users</h4>
              <label className="d-flex align-items-center">
                Search:
                <input
                  type="search"
                  className="form-control form-control-sm"
                  placeholder=""
                  id="myInput"
                  onChange={filteredRecords}
                  aria-controls="DataTables_Table_0"
                />
              </label>
            </div>
          </div>
          <div className="p-0 card-body">
            <div className="mt-4 table-responsive">
              <table
                id="myTable"
                className="table mb-0 table-striped"
                role="grid"
              >
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Contact</th>
                    <th>Email</th>
                    <th>Country</th>
                    <th>Status</th>
                    <th>Join</th>
                    <th>PLAN</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {usersList.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>
                          <div className="d-flex align-items-center">
                            <img
                              className="rounded bg-soft-primary img-fluid avatar-40 me-3"
                              src={shapes1}
                              alt="profile"
                            />
                            <h6>{item.username}</h6>
                          </div>
                        </td>
                        <td>{item.contact}</td>
                        <td>{item.email}</td>
                        <td>{item.country}</td>
                        <td>
                          <div className="d-flex align-items-center">
                            <Dot
                              colors={
                                item.status == "Active" ? "#00FF00" : "#FF0000"
                              }
                            />
                            <p className="m-0">{item.status}</p>
                          </div>
                        </td>
                        <td>{item.join}</td>
                        <td>{item.plan}</td>
                        <td>
                          <ButtonGroup>
                            <Button onClick={handleShow}>Edit</Button>
                            <Button variant={"danger"}>Delete</Button>
                          </ButtonGroup>
                        </td>
                      </tr>
                    );
                  })}
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
                    <span className="page-link">
                      1<span className="sr-only"></span>
                    </span>
                  </li>
                  <li className="page-item">
                    <span className="page-link">2</span>
                  </li>
                  <li className="page-item">
                    <span className="page-link">3</span>
                  </li>
                  <li className="page-item">
                    <span className="page-link">Next</span>
                  </li>
                </ul>
              </div>
              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>User Edit</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <form method="POST">
                    <div className="form-group">
                      <input type="hidden" class="form-control" />
                    </div>
                    <div class="form-group">
                      <label for="username">Full Name</label>
                      <input
                        type="text"
                        class="form-control"
                        id="username"
                        placeholder="Full Name"
                        autoComplete="off"
                      />
                    </div>
                    <div class="form-group">
                      <label for="email">Email Address</label>
                      <input
                        type="email"
                        class="form-control"
                        id="email"
                        placeholder="Email Address"
                        autoComplete="off"
                      />
                    </div>
                    <div class="form-group">
                      <label for="phone">Contact No</label>
                      <input
                        type="number"
                        class="form-control"
                        id="phone"
                        placeholder="Phone Number"
                        autoComplete="off"
                      />
                    </div>
                    <div class="form-group">
                      <label for="username">Status</label>
                      <select className="form-control">
                        <option value="active">Active</option>
                        <option value="inactive">Inactive</option>
                      </select>
                    </div>
                    <div className="d-flex justify-content-end">
                      <Button type="submit">Save Changes</Button>
                    </div>
                  </form>
                </Modal.Body>
              </Modal>
            </div>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default Users;

import React from "react";
import { Row, Col } from "react-bootstrap";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const PrivacyPolicy = () => {
  return (
    <Row>
      <div className="card">
        <div className="card-body">
        <h3 className="card-text mb-3">Privacy Policy</h3>
          <Col md="12" lg="12">
            <CKEditor editor={ClassicEditor} data="<p>Hello World</p>" />
          </Col>
          <h3 className="card-text mb-3">Terms and Conditions</h3>
          <Col md="12" lg="12">
            <CKEditor editor={ClassicEditor} data="<p>Hello World</p>" />
          </Col>
        </div>
      </div>
    </Row>
  );
};

export default PrivacyPolicy;

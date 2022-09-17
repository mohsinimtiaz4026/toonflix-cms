import React from "react";
import { Link,useParams } from "react-router-dom";
import { Row, Col, Button } from "react-bootstrap";
import { useFileUpload } from "use-file-upload";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const UploadMedia = () => {
  const [file, setFile] = useFileUpload();

  
  const params = useParams();

  console.log(params);

  return (
    <div className="card">
      <div className="card-body">
        <Row>
          <Col md="6" lg="6">
            <h4 className="card-title">Upload a File</h4>
            <div className="form-group">
              <label for="video_title">Title</label>
              <input type={"text"} id="video_title" className="form-control" />
            </div>
            <div className="form-group">
              <label for="video_desc">Desciption</label>
              <CKEditor editor={ClassicEditor} data="<p></p>" />
            </div>
            <div className="form-group">
              <label for="video_thumb">Video Thumbnail</label>
              <input
                type={"file"}
                id="video_thumb"
                className="form-control"
                accept="image/*"
              />
            </div>
            <div className="form-group">
              <label for="video_file">Video File</label>
              <input
                type={"file"}
                id="video_file"
                className="form-control"
                accept="video/*"
                onFocus={() => {
                  setFile();
                }}
              />
            </div>
            <select className="form-select mb-3">
              <option selected>Select Media Type</option>
              <option>Movie</option>
              <option>Anime</option>
              <option>Kids</option>
            </select>
          </Col>
          <Col md="6" lg="6">
            <label for="video_edit">Media</label>
            <div>
              {file ? (
                <video
                  src={file.source}
                  width="100%"
                  height="auto"
                  id="video_edit"
                  style={{margin: "10px 0"}}
                  autoPlay
                  controls
                />
              ) : (
                ""
              )}
            </div>
            <Link to="/manage_media">
              <Button variant="outline-secondary">Save</Button>
            </Link>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default UploadMedia;

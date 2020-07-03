import React, { Fragment } from "react";
import Breadcrumb from "./breadcrumb";
import "react-dropzone-uploader/dist/styles.css";
import Dropzone from "react-dropzone-uploader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DropzoneComponent = () => {
  // specify upload params and url for your files
  const getUploadParams = ({ meta }) => {
    return { url: "https://httpbin.org/post" };
  };
  // called every time a file's `status` changes

  const handleChangeStatus = ({ meta, file }, status) => {};

  // receives array of files that are done uploading when submit button is clicked
  const handleSubmit = (files, allFiles) => {
    allFiles.forEach((f) => f.remove());
    toast.success("Dropzone successfully submitted !");
  };

  return (
    <>
      <Breadcrumb title="Dropzone" parent="Advance" />
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12">
            <div className="card">
              <div className="card-header">
                <h5>Single File Upload</h5>
              </div>
              <div className="card-body">
                <form
                  className="dropzone digits"
                  id="singleFileUpload"
                  action="/upload.php"
                >
                  <div className="dz-message needsclick">
                    <Dropzone
                      getUploadParams={getUploadParams}
                      onChangeStatus={handleChangeStatus}
                      maxFiles={1}
                      multiple={false}
                      canCancel={false}
                      inputContent="Drop A File"
                      styles={{
                        dropzone: { width: 400, height: 200 },
                        dropzoneActive: { borderColor: "green" },
                      }}
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DropzoneComponent;

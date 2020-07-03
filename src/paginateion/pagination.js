import React, { Fragment } from "react";
import Breadcrumb from "./breadcrumb";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";

const PaginationComponent = () => {
  return (
    <Fragment>
      <Breadcrumb parent="Base" title="Pagination" />
      <div className="container-fluid">
        <div className="row">
          {/* <!-- pagination with icons--> */}

          {/* <!-- pagination alignment left--> */}

          {/* <!-- center aligned pagination--> */}

          {/* <!-- pagination with active and disabled state--> */}

          {/* <!-- pagination Color--> */}
          <div className="col-xl-12">
            <div className="card">
              <div className="card-header">
                <h5>Pagination Color</h5>
              </div>
              <div className="card-body">
                <nav className="m-b-30" aria-label="Page navigation example">
                  <Pagination
                    aria-label="Page navigation"
                    className="pagination pagination-primary"
                  >
                    <PaginationItem>
                      <PaginationLink href="#javascript">
                        Previous
                      </PaginationLink>
                    </PaginationItem>

                    <PaginationItem>
                      <PaginationLink href="#javascript">1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#javascript">2</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#javascript">3</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink last href="#javascript">
                        Next
                      </PaginationLink>
                    </PaginationItem>
                  </Pagination>
                </nav>

                <nav className="m-b-30" aria-label="Page navigation example">
                  <Pagination
                    aria-label="Page navigation"
                    className="pagination pagination-success"
                  >
                    <PaginationItem>
                      <PaginationLink href="#javascript">
                        Previous
                      </PaginationLink>
                    </PaginationItem>

                    <PaginationItem>
                      <PaginationLink href="#javascript">1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#javascript">2</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#javascript">3</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink last href="#javascript">
                        Next
                      </PaginationLink>
                    </PaginationItem>
                  </Pagination>
                </nav>
                <nav className="m-b-30" aria-label="Page navigation example">
                  <Pagination
                    aria-label="Page navigation"
                    className="pagination pagination-info"
                  >
                    <PaginationItem>
                      <PaginationLink href="#javascript">
                        Previous
                      </PaginationLink>
                    </PaginationItem>

                    <PaginationItem>
                      <PaginationLink href="#javascript">1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#javascript">2</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#javascript">3</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink last href="#javascript">
                        Next
                      </PaginationLink>
                    </PaginationItem>
                  </Pagination>
                </nav>
                <nav className="m-b-30" aria-label="Page navigation example">
                  <Pagination
                    aria-label="Page navigation"
                    className="pagination pagination-warning"
                  >
                    <PaginationItem>
                      <PaginationLink href="#javascript">
                        Previous
                      </PaginationLink>
                    </PaginationItem>

                    <PaginationItem>
                      <PaginationLink href="#javascript">1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#javascript">2</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#javascript">3</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink last href="#javascript">
                        Next
                      </PaginationLink>
                    </PaginationItem>
                  </Pagination>
                </nav>
                <nav aria-label="Page navigation example">
                  <Pagination
                    aria-label="Page navigation"
                    className="pagination pagination-danger"
                  >
                    <PaginationItem>
                      <PaginationLink href="#javascript">
                        Previous
                      </PaginationLink>
                    </PaginationItem>

                    <PaginationItem>
                      <PaginationLink href="#javascript">1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#javascript">2</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#javascript">3</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink last href="#javascript">
                        Next
                      </PaginationLink>
                    </PaginationItem>
                  </Pagination>
                </nav>
              </div>
            </div>
          </div>
          {/* <!-- pagination sizing--> */}
          <div className="col-xl-12">
            <div className="card">
              <div className="card-header">
                <h5>Pagination sizing</h5>
              </div>
              <div className="card-body">
                {/* <!-- large size pagination--> */}
                <Pagination
                  size="lg"
                  aria-label="Page navigation example"
                  className="m-b-30 pagination-primary"
                >
                  <PaginationItem>
                    <PaginationLink href="#javascript">Previous</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#javascript">1</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#javascript">2</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#javascript">3</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#javascript">Next</PaginationLink>
                  </PaginationItem>
                </Pagination>
                <Pagination
                  size="sm"
                  aria-label="Page navigation example"
                  className="pagination-primary"
                >
                  <PaginationItem>
                    <PaginationLink href="#javascript">Previous</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#javascript">1</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#javascript">2</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#javascript">3</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#javascript">Next</PaginationLink>
                  </PaginationItem>
                </Pagination>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default PaginationComponent;

import React from "react";
export default function Chart(){
    return(<>
              <div className="row">
                <div className="col-12">
                  <div className="card">
                    <div className="card-header">
                      <h4>Assign Project List</h4>
                      <div className="card-header-form">
                        <form>
                          <div className="input-group">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Search"
                            />
                            <div className="input-group-btn">
                              <button className="btn btn-primary">
                                <i className="fas fa-search"></i>
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div className="card-body">
                      <div className="table-responsive">
                        <table className="table table-striped">
                          <thead>
                            <tr>
                              <th>Cust.</th>
                              <th>Project</th>
                              <th>Assign Date</th>
                              <th>Team</th>
                              <th>Priority</th>
                              <th>Status</th>
                              <th>Edit</th>
                            </tr>
                          </thead>
                          <tr>
                            <td className="table-img">
                              <img src="assets/img/users/user-8.png" alt="" />
                            </td>
                            <td>
                              <h6 className="mb-0 font-13">
                                Wordpress Website
                              </h6>
                              <p className="m-0 font-12">
                                Assigned to
                                <span className="col-green font-weight-bold">
                                  {" "}
                                  Airi Satou
                                </span>
                              </p>
                            </td>
                            <td>20-02-2018</td>
                            <td className="text-truncate">
                              <ul className="list-unstyled order-list m-b-0 m-b-0">
                                <li className="team-member team-member-sm">
                                  <img
                                    className="rounded-circle"
                                    src="assets/img/users/user-8.png"
                                    alt="user"
                                    data-toggle="tooltip"
                                    title=""
                                    data-original-title="Wildan Ahdian"
                                  />
                                </li>
                                <li className="team-member team-member-sm">
                                  <img
                                    className="rounded-circle"
                                    src="assets/img/users/user-9.png"
                                    alt="user"
                                    data-toggle="tooltip"
                                    title=""
                                    data-original-title="John Deo"
                                  />
                                </li>
                                <li className="team-member team-member-sm">
                                  <img
                                    className="rounded-circle"
                                    src="assets/img/users/user-10.png"
                                    alt="user"
                                    data-toggle="tooltip"
                                    title=""
                                    data-original-title="Sarah Smith"
                                  />
                                </li>
                                <li className="avatar avatar-sm">
                                  <span className="badge badge-primary">
                                    +4
                                  </span>
                                </li>
                              </ul>
                            </td>
                            <td>
                              <div className="badge-outline col-red">High</div>
                            </td>
                            <td className="align-middle">
                              <div className="progress-text">50%</div>
                              <div className="progress" data-height="6">
                                <div
                                  className="progress-bar bg-success"
                                  data-width="50%"
                                ></div>
                              </div>
                            </td>
                            <td>
                              <a
                                data-toggle="tooltip"
                                title=""
                                data-original-title="Edit"
                              >
                                <i className="fas fa-pencil-alt"></i>
                              </a>
                              <a
                                data-toggle="tooltip"
                                title=""
                                data-original-title="Delete"
                              >
                                <i className="far fa-trash-alt"></i>
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td className="table-img">
                              <img src="assets/img/users/user-1.png" alt="" />
                            </td>
                            <td>
                              <h6 className="mb-0 font-13">Android Game App</h6>
                              <p className="m-0 font-12">
                                Assigned to
                                <span className="col-green font-weight-bold">
                                  {" "}
                                  Sarah Smith
                                </span>
                              </p>
                            </td>
                            <td>22-05-2019</td>
                            <td className="text-truncate">
                              <ul className="list-unstyled order-list m-b-0 m-b-0">
                                <li className="team-member team-member-sm">
                                  <img
                                    className="rounded-circle"
                                    src="assets/img/users/user-4.png"
                                    alt="user"
                                    data-toggle="tooltip"
                                    title=""
                                    data-original-title="Wildan Ahdian"
                                  />
                                </li>
                                <li className="team-member team-member-sm">
                                  <img
                                    className="rounded-circle"
                                    src="assets/img/users/user-7.png"
                                    alt="user"
                                    data-toggle="tooltip"
                                    title=""
                                    data-original-title="John Deo"
                                  />
                                </li>
                                <li className="team-member team-member-sm">
                                  <img
                                    className="rounded-circle"
                                    src="assets/img/users/user-2.png"
                                    alt="user"
                                    data-toggle="tooltip"
                                    title=""
                                    data-original-title="Sarah Smith"
                                  />
                                </li>
                                <li className="avatar avatar-sm">
                                  <span className="badge badge-primary">
                                    +4
                                  </span>
                                </li>
                              </ul>
                            </td>
                            <td>
                              <div className="badge-outline col-green">Low</div>
                            </td>
                            <td className="align-middle">
                              <div className="progress-text">55%</div>
                              <div className="progress" data-height="6">
                                <div
                                  className="progress-bar bg-purple"
                                  data-width="55%"
                                ></div>
                              </div>
                            </td>
                            <td>
                              <a
                                data-toggle="tooltip"
                                title=""
                                data-original-title="Edit"
                              >
                                <i className="fas fa-pencil-alt"></i>
                              </a>
                              <a
                                data-toggle="tooltip"
                                title=""
                                data-original-title="Delete"
                              >
                                <i className="far fa-trash-alt"></i>
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td className="table-img">
                              <img src="assets/img/users/user-5.png" alt="" />
                            </td>
                            <td>
                              <h6 className="mb-0 font-13">Java Web Service</h6>
                              <p className="m-0 font-12">
                                Assigned to
                                <span className="col-green font-weight-bold">
                                  {" "}
                                  Cara Stevens
                                </span>
                              </p>
                            </td>
                            <td>11-04-2019</td>
                            <td className="text-truncate">
                              <ul className="list-unstyled order-list m-b-0 m-b-0">
                                <li className="team-member team-member-sm">
                                  <img
                                    className="rounded-circle"
                                    src="assets/img/users/user-3.png"
                                    alt="user"
                                    data-toggle="tooltip"
                                    title=""
                                    data-original-title="Wildan Ahdian"
                                  />
                                </li>
                                <li className="team-member team-member-sm">
                                  <img
                                    className="rounded-circle"
                                    src="assets/img/users/user-7.png"
                                    alt="user"
                                    data-toggle="tooltip"
                                    title=""
                                    data-original-title="John Deo"
                                  />
                                </li>
                                <li className="team-member team-member-sm">
                                  <img
                                    className="rounded-circle"
                                    src="assets/img/users/user-8.png"
                                    alt="user"
                                    data-toggle="tooltip"
                                    title=""
                                    data-original-title="Sarah Smith"
                                  />
                                </li>
                                <li className="avatar avatar-sm">
                                  <span className="badge badge-primary">
                                    +4
                                  </span>
                                </li>
                              </ul>
                            </td>
                            <td>
                              <div className="badge-outline col-blue">
                                Medium
                              </div>
                            </td>
                            <td className="align-middle">
                              <div className="progress-text">70%</div>
                              <div className="progress" data-height="6">
                                <div
                                  className="progress-bar"
                                  data-width="70%"
                                ></div>
                              </div>
                            </td>
                            <td>
                              <a
                                data-toggle="tooltip"
                                title=""
                                data-original-title="Edit"
                              >
                                <i className="fas fa-pencil-alt"></i>
                              </a>
                              <a
                                data-toggle="tooltip"
                                title=""
                                data-original-title="Delete"
                              >
                                <i className="far fa-trash-alt"></i>
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td className="table-img">
                              <img src="assets/img/users/user-9.png" alt="" />
                            </td>
                            <td>
                              <h6 className="mb-0 font-13">Wedding IOS App</h6>
                              <p className="m-0 font-12">
                                Assigned to
                                <span className="col-green font-weight-bold">
                                  {" "}
                                  John Doe
                                </span>
                              </p>
                            </td>
                            <td>19-05-2019</td>
                            <td className="text-truncate">
                              <ul className="list-unstyled order-list m-b-0 m-b-0">
                                <li className="team-member team-member-sm">
                                  <img
                                    className="rounded-circle"
                                    src="assets/img/users/user-2.png"
                                    alt="user"
                                    data-toggle="tooltip"
                                    title=""
                                    data-original-title="Wildan Ahdian"
                                  />
                                </li>
                                <li className="team-member team-member-sm">
                                  <img
                                    className="rounded-circle"
                                    src="assets/img/users/user-10.png"
                                    alt="user"
                                    data-toggle="tooltip"
                                    title=""
                                    data-original-title="John Deo"
                                  />
                                </li>
                                <li className="team-member team-member-sm">
                                  <img
                                    className="rounded-circle"
                                    src="assets/img/users/user-4.png"
                                    alt="user"
                                    data-toggle="tooltip"
                                    title=""
                                    data-original-title="Sarah Smith"
                                  />
                                </li>
                                <li className="avatar avatar-sm">
                                  <span className="badge badge-primary">
                                    +4
                                  </span>
                                </li>
                              </ul>
                            </td>
                            <td>
                              <div className="badge-outline col-red">High</div>
                            </td>
                            <td className="align-middle">
                              <div className="progress-text">45%</div>
                              <div className="progress" data-height="6">
                                <div
                                  className="progress-bar bg-cyan"
                                  data-width="45%"
                                ></div>
                              </div>
                            </td>
                            <td>
                              <a
                                data-toggle="tooltip"
                                title=""
                                data-original-title="Edit"
                              >
                                <i className="fas fa-pencil-alt"></i>
                              </a>
                              <a
                                data-toggle="tooltip"
                                title=""
                                data-original-title="Delete"
                              >
                                <i className="far fa-trash-alt"></i>
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td className="table-img">
                              <img src="assets/img/users/user-10.png" alt="" />
                            </td>
                            <td>
                              <h6 className="mb-0 font-13">
                                Blize Admin Template
                              </h6>
                              <p className="m-0 font-12">
                                Assigned to
                                <span className="col-green font-weight-bold">
                                  {" "}
                                  Ashton Cox
                                </span>
                              </p>
                            </td>
                            <td>25-07-2019</td>
                            <td className="text-truncate">
                              <ul className="list-unstyled order-list m-b-0 m-b-0">
                                <li className="team-member team-member-sm">
                                  <img
                                    className="rounded-circle"
                                    src="assets/img/users/user-1.png"
                                    alt="user"
                                    data-toggle="tooltip"
                                    title=""
                                    data-original-title="Wildan Ahdian"
                                  />
                                </li>
                                <li className="team-member team-member-sm">
                                  <img
                                    className="rounded-circle"
                                    src="assets/img/users/user-5.png"
                                    alt="user"
                                    data-toggle="tooltip"
                                    title=""
                                    data-original-title="John Deo"
                                  />
                                </li>
                                <li className="team-member team-member-sm">
                                  <img
                                    className="rounded-circle"
                                    src="assets/img/users/user-7.png"
                                    alt="user"
                                    data-toggle="tooltip"
                                    title=""
                                    data-original-title="Sarah Smith"
                                  />
                                </li>
                                <li className="avatar avatar-sm">
                                  <span className="badge badge-primary">
                                    +4
                                  </span>
                                </li>
                              </ul>
                            </td>
                            <td>
                              <div className="badge-outline col-blue">
                                Medium
                              </div>
                            </td>
                            <td className="align-middle">
                              <div className="progress-text">67%</div>
                              <div className="progress" data-height="6">
                                <div
                                  className="progress-bar bg-red"
                                  data-width="67%"
                                ></div>
                              </div>
                            </td>
                            <td>
                              <a
                                data-toggle="tooltip"
                                title=""
                                data-original-title="Edit"
                              >
                                <i className="fas fa-pencil-alt"></i>
                              </a>
                              <a
                                data-toggle="tooltip"
                                title=""
                                data-original-title="Delete"
                              >
                                <i className="far fa-trash-alt"></i>
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td className="table-img">
                              <img src="assets/img/users/user-4.png" alt="" />
                            </td>
                            <td>
                              <h6 className="mb-0 font-13">React js website</h6>
                              <p className="m-0 font-12">
                                Assigned to
                                <span className="col-green font-weight-bold">
                                  {" "}
                                  Sarah Smith{" "}
                                </span>
                              </p>
                            </td>
                            <td>11-08-2019</td>
                            <td className="text-truncate">
                              <ul className="list-unstyled order-list m-b-0 m-b-0">
                                <li className="team-member team-member-sm">
                                  <img
                                    className="rounded-circle"
                                    src="assets/img/users/user-5.png"
                                    alt="user"
                                    data-toggle="tooltip"
                                    title=""
                                    data-original-title="Wildan Ahdian"
                                  />
                                </li>
                                <li className="team-member team-member-sm">
                                  <img
                                    className="rounded-circle"
                                    src="assets/img/users/user-8.png"
                                    alt="user"
                                    data-toggle="tooltip"
                                    title=""
                                    data-original-title="John Deo"
                                  />
                                </li>
                                <li className="team-member team-member-sm">
                                  <img
                                    className="rounded-circle"
                                    src="assets/img/users/user-3.png"
                                    alt="user"
                                    data-toggle="tooltip"
                                    title=""
                                    data-original-title="Sarah Smith"
                                  />
                                </li>
                                <li className="avatar avatar-sm">
                                  <span className="badge badge-primary">
                                    +4
                                  </span>
                                </li>
                              </ul>
                            </td>
                            <td>
                              <div className="badge-outline col-green">Low</div>
                            </td>
                            <td className="align-middle">
                              <div className="progress-text">41%</div>
                              <div className="progress" data-height="6">
                                <div
                                  className="progress-bar bg-orange"
                                  data-width="41%"
                                ></div>
                              </div>
                            </td>
                            <td>
                              <a
                                data-toggle="tooltip"
                                title=""
                                data-original-title="Edit"
                              >
                                <i className="fas fa-pencil-alt"></i>
                              </a>
                              <a
                                data-toggle="tooltip"
                                title=""
                                data-original-title="Delete"
                              >
                                <i className="far fa-trash-alt"></i>
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td className="table-img">
                              <img src="assets/img/users/user-10.png" alt="" />
                            </td>
                            <td>
                              <h6 className="mb-0 font-13">SEO improvement</h6>
                              <p className="m-0 font-12">
                                Assigned to
                                <span className="col-green font-weight-bold">
                                  {" "}
                                  Janak Gandhi
                                </span>
                              </p>
                            </td>
                            <td>22-02-2018</td>
                            <td className="text-truncate">
                              <ul className="list-unstyled order-list m-b-0 m-b-0">
                                <li className="team-member team-member-sm">
                                  <img
                                    className="rounded-circle"
                                    src="assets/img/users/user-3.png"
                                    alt="user"
                                    data-toggle="tooltip"
                                    title=""
                                    data-original-title="Wildan Ahdian"
                                  />
                                </li>
                                <li className="team-member team-member-sm">
                                  <img
                                    className="rounded-circle"
                                    src="assets/img/users/user-9.png"
                                    alt="user"
                                    data-toggle="tooltip"
                                    title=""
                                    data-original-title="John Deo"
                                  />
                                </li>
                                <li className="team-member team-member-sm">
                                  <img
                                    className="rounded-circle"
                                    src="assets/img/users/user-1.png"
                                    alt="user"
                                    data-toggle="tooltip"
                                    title=""
                                    data-original-title="Sarah Smith"
                                  />
                                </li>
                                <li className="avatar avatar-sm">
                                  <span className="badge badge-primary">
                                    +4
                                  </span>
                                </li>
                              </ul>
                            </td>
                            <td>
                              <div className="badge-outline col-red">High</div>
                            </td>
                            <td className="align-middle">
                              <div className="progress-text">70%</div>
                              <div className="progress" data-height="6">
                                <div
                                  className="progress-bar bg-success"
                                  data-width="70%"
                                ></div>
                              </div>
                            </td>
                            <td>
                              <a
                                data-toggle="tooltip"
                                title=""
                                data-original-title="Edit"
                              >
                                <i className="fas fa-pencil-alt"></i>
                              </a>
                              <a
                                data-toggle="tooltip"
                                title=""
                                data-original-title="Delete"
                              >
                                <i className="far fa-trash-alt"></i>
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td className="table-img">
                              <img src="assets/img/users/user-6.png" alt="" />
                            </td>
                            <td>
                              <h6 className="mb-0 font-13">Laravel Website</h6>
                              <p className="m-0 font-12">
                                Assigned to
                                <span className="col-green font-weight-bold">
                                  {" "}
                                  Mili Rain
                                </span>
                              </p>
                            </td>
                            <td>31-03-2019</td>
                            <td className="text-truncate">
                              <ul className="list-unstyled order-list m-b-0 m-b-0">
                                <li className="team-member team-member-sm">
                                  <img
                                    className="rounded-circle"
                                    src="assets/img/users/user-4.png"
                                    alt="user"
                                    data-toggle="tooltip"
                                    title=""
                                    data-original-title="Wildan Ahdian"
                                  />
                                </li>
                                <li className="team-member team-member-sm">
                                  <img
                                    className="rounded-circle"
                                    src="assets/img/users/user-7.png"
                                    alt="user"
                                    data-toggle="tooltip"
                                    title=""
                                    data-original-title="John Deo"
                                  />
                                </li>
                                <li className="team-member team-member-sm">
                                  <img
                                    className="rounded-circle"
                                    src="assets/img/users/user-2.png"
                                    alt="user"
                                    data-toggle="tooltip"
                                    title=""
                                    data-original-title="Sarah Smith"
                                  />
                                </li>
                                <li className="avatar avatar-sm">
                                  <span className="badge badge-primary">
                                    +4
                                  </span>
                                </li>
                              </ul>
                            </td>
                            <td>
                              <div className="badge-outline col-green">Low</div>
                            </td>
                            <td className="align-middle">
                              <div className="progress-text">55%</div>
                              <div className="progress" data-height="6">
                                <div
                                  className="progress-bar bg-purple"
                                  data-width="55%"
                                ></div>
                              </div>
                            </td>
                            <td>
                              <a
                                data-toggle="tooltip"
                                title=""
                                data-original-title="Edit"
                              >
                                <i className="fas fa-pencil-alt"></i>
                              </a>
                              <a
                                data-toggle="tooltip"
                                title=""
                                data-original-title="Delete"
                              >
                                <i className="far fa-trash-alt"></i>
                              </a>
                            </td>
                          </tr>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

           <div className="row">
                <div className="col-12 col-sm-12 col-lg-4">
                  <div className="card">
                    <div className="card-header">
                      <h4>Activity</h4>
                    </div>
                    <div className="card-body">
                      <div id="activity-scroll">
                        <ul className="activity-list">
                          <li>
                            {" "}
                            <i className="activity-icon bg-success"></i>
                            <h6>
                              Order Placed
                              <small className="float-right text-muted">
                                11 March 2019
                              </small>
                            </h6>
                            <span className="font-12">Order ID: #8547</span>
                          </li>
                          <li>
                            {" "}
                            <i className="activity-icon bg-info"></i>
                            <h6>
                              Order Accept
                              <small className="float-right text-muted tx-11">
                                11 March 2019
                              </small>
                            </h6>{" "}
                            <span className="font-12">Order ID: #8547</span>
                          </li>
                          <li>
                            {" "}
                            <i className="activity-icon bg-red"></i>
                            <h6>
                              Ready For Dispatched
                              <small className="float-right text-muted tx-11">
                                12 March 2019
                              </small>
                            </h6>
                            <span className="font-12">Order ID: #8547</span>
                          </li>
                          <li>
                            {" "}
                            <i className="activity-icon bg-primary"></i>
                            <h6>
                              Order Shipped
                              <small className="float-right text-muted tx-11">
                                14 March 2019
                              </small>
                            </h6>
                            <span className="font-12">
                              Tracking ID: ED8597587
                            </span>
                          </li>
                          <li>
                            {" "}
                            <i className="activity-icon bg-orange"></i>
                            <h6>
                              Product Delivered
                              <small className="float-right text-muted tx-11">
                                16 March 2019
                              </small>
                            </h6>
                            <span className="font-12">Receiver Name: John</span>
                          </li>
                          <li>
                            {" "}
                            <i className="activity-icon bg-green"></i>
                            <h6>
                              Product Return
                              <small className="float-right text-muted tx-11">
                                18 March 2019
                              </small>
                            </h6>
                            <span className="font-12">
                              Receiver Name: Sarah
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-12 col-lg-4">
                  <div className="card">
                    <div className="card-header">
                      <h4>Comments</h4>
                    </div>
                    <div className="card-body">
                      <div id="support-scroll">
                        <ul className="list-unstyled ">
                          <li className="media border-bottom m-b-10 support-ticket">
                            <img
                              alt="image"
                              className="mr-3 user-img"
                              width="40"
                              src="assets/img/users/user-5.png"
                            />
                            <div className="media-body">
                              <div className="media-right">
                                <i className="far fa-thumbs-up col-blue"></i>
                                <i className="far fa-thumbs-down col-red"></i>
                              </div>
                              <div className="media-title mb-1">Alis Smith</div>
                              <div className="text-muted font-12">
                                05 March 2019
                              </div>
                              <div className="media-description">
                                Duis aute irure dolor in voluptate velit esse
                                cillum dolore.
                              </div>
                            </div>
                          </li>
                          <li className="media border-bottom m-b-10 support-ticket">
                            <img
                              alt="image"
                              className="mr-3 user-img"
                              width="40"
                              src="assets/img/users/user-7.png"
                            />
                            <div className="media-body">
                              <div className="media-right">
                                <i className="far fa-thumbs-up col-blue"></i>
                                <i className="far fa-thumbs-down col-red"></i>
                              </div>
                              <div className="media-title mb-1">
                                Pooja Sarma
                              </div>
                              <div className="text-muted font-12">
                                05 March 2019
                              </div>
                              <div className="media-description">
                                Duis aute irure dolor in voluptate velit esse
                                cillum dolore.
                              </div>
                            </div>
                          </li>
                          <li className="media border-bottom m-b-10 support-ticket">
                            <img
                              alt="image"
                              className="mr-3 user-img"
                              width="40"
                              src="assets/img/users/user-1.png"
                            />
                            <div className="media-body">
                              <div className="media-right">
                                <i className="far fa-thumbs-up col-blue"></i>
                                <i className="far fa-thumbs-down col-red"></i>
                              </div>
                              <div className="media-title mb-1">John Deo</div>
                              <div className="text-muted font-12">
                                05 March 2019
                              </div>
                              <div className="media-description">
                                Duis aute irure dolor in voluptate velit esse
                                cillum dolore.
                              </div>
                            </div>
                          </li>
                          <li className="media border-bottom m-b-10 support-ticket">
                            <img
                              alt="image"
                              className="mr-3 user-img"
                              width="40"
                              src="assets/img/users/user-8.png"
                            />
                            <div className="media-body">
                              <div className="media-right">
                                <i className="far fa-thumbs-up col-blue"></i>
                                <i className="far fa-thumbs-down col-red"></i>
                              </div>
                              <div className="media-title mb-1">
                                Cara Stevens
                              </div>
                              <div className="text-muted font-12">
                                12 April 2019
                              </div>
                              <div className="media-description">
                                Duis aute irure dolor in voluptate velit esse
                                cillum dolore.
                              </div>
                            </div>
                          </li>
                          <li className="media border-bottom m-b-10 support-ticket">
                            <img
                              alt="image"
                              className="mr-3 user-img"
                              width="40"
                              src="assets/img/users/user-2.png"
                            />
                            <div className="media-body">
                              <div className="media-right">
                                <i className="far fa-thumbs-up col-blue"></i>
                                <i className="far fa-thumbs-down col-red"></i>
                              </div>
                              <div className="media-title mb-1">
                                Priya Mehta
                              </div>
                              <div className="text-muted font-12">
                                19 May 2019
                              </div>
                              <div className="media-description">
                                Duis aute irure dolor in voluptate velit esse
                                cillum dolore.
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-12 col-lg-4">
                  <div className="card">
                    <div className="card-header">
                      <h4>Project Team</h4>
                    </div>
                    <div className="card-body">
                      <div className="media-list position-relative">
                        <div
                          className="table-responsive"
                          id="project-team-scroll"
                        >
                          <table className="table table-hover table-xl mb-0">
                            <thead>
                              <tr>
                                <th className="border-top-0">Project Name</th>
                                <th className="border-top-0">Employees</th>
                                <th className="border-top-0">Cost</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="text-truncate">Project X</td>
                                <td className="text-truncate">
                                  <ul className="list-unstyled order-list m-b-0 m-b-0">
                                    <li className="team-member team-member-sm">
                                      <img
                                        className="rounded-circle"
                                        src="assets/img/users/user-8.png"
                                        alt="user"
                                        data-toggle="tooltip"
                                        title=""
                                        data-original-title="Wildan Ahdian"
                                      />
                                    </li>
                                    <li className="team-member team-member-sm">
                                      <img
                                        className="rounded-circle"
                                        src="assets/img/users/user-9.png"
                                        alt="user"
                                        data-toggle="tooltip"
                                        title=""
                                        data-original-title="John Deo"
                                      />
                                    </li>
                                    <li className="team-member team-member-sm">
                                      <img
                                        className="rounded-circle"
                                        src="assets/img/users/user-10.png"
                                        alt="user"
                                        data-toggle="tooltip"
                                        title=""
                                        data-original-title="Sarah Smith"
                                      />
                                    </li>
                                    <li className="avatar avatar-sm">
                                      <span className="badge badge-primary">
                                        +3
                                      </span>
                                    </li>
                                  </ul>
                                </td>
                                <td className="text-truncate">$8999</td>
                              </tr>
                              <tr>
                                <td className="text-truncate">Project AB2</td>
                                <td className="text-truncate">
                                  <ul className="list-unstyled order-list m-b-0 m-b-0">
                                    <li className="team-member team-member-sm">
                                      <img
                                        className="rounded-circle"
                                        src="assets/img/users/user-1.png"
                                        alt="user"
                                        data-toggle="tooltip"
                                        title=""
                                        data-original-title="Wildan Ahdian"
                                      />
                                    </li>
                                    <li className="team-member team-member-sm">
                                      <img
                                        className="rounded-circle"
                                        src="assets/img/users/user-3.png"
                                        alt="user"
                                        data-toggle="tooltip"
                                        title=""
                                        data-original-title="John Deo"
                                      />
                                    </li>
                                    <li className="team-member team-member-sm">
                                      <img
                                        className="rounded-circle"
                                        src="assets/img/users/user-2.png"
                                        alt="user"
                                        data-toggle="tooltip"
                                        title=""
                                        data-original-title="Sarah Smith"
                                      />
                                    </li>
                                    <li className="avatar avatar-sm">
                                      <span className="badge badge-primary">
                                        +1
                                      </span>
                                    </li>
                                  </ul>
                                </td>
                                <td className="text-truncate">$5550</td>
                              </tr>
                              <tr>
                                <td className="text-truncate">Project DS3</td>
                                <td className="text-truncate">
                                  <ul className="list-unstyled order-list m-b-0 m-b-0">
                                    <li className="team-member team-member-sm">
                                      <img
                                        className="rounded-circle"
                                        src="assets/img/users/user-5.png"
                                        alt="user"
                                        data-toggle="tooltip"
                                        title=""
                                        data-original-title="Wildan Ahdian"
                                      />
                                    </li>
                                    <li className="team-member team-member-sm">
                                      <img
                                        className="rounded-circle"
                                        src="assets/img/users/user-9.png"
                                        alt="user"
                                        data-toggle="tooltip"
                                        title=""
                                        data-original-title="Sarah Smith"
                                      />
                                    </li>
                                    <li className="avatar avatar-sm">
                                      <span className="badge badge-primary">
                                        +4
                                      </span>
                                    </li>
                                  </ul>
                                </td>
                                <td className="text-truncate">$9000</td>
                              </tr>
                              <tr>
                                <td className="text-truncate">Project XCD</td>
                                <td className="text-truncate">
                                  <ul className="list-unstyled order-list m-b-0 m-b-0">
                                    <li className="team-member team-member-sm">
                                      <img
                                        className="rounded-circle"
                                        src="assets/img/users/user-8.png"
                                        alt="user"
                                        data-toggle="tooltip"
                                        title=""
                                        data-original-title="Wildan Ahdian"
                                      />
                                    </li>
                                    <li className="team-member team-member-sm">
                                      <img
                                        className="rounded-circle"
                                        src="assets/img/users/user-3.png"
                                        alt="user"
                                        data-toggle="tooltip"
                                        title=""
                                        data-original-title="John Deo"
                                      />
                                    </li>
                                    <li className="team-member team-member-sm">
                                      <img
                                        className="rounded-circle"
                                        src="assets/img/users/user-5.png"
                                        alt="user"
                                        data-toggle="tooltip"
                                        title=""
                                        data-original-title="Sarah Smith"
                                      />
                                    </li>
                                    <li className="avatar avatar-sm">
                                      <span className="badge badge-primary">
                                        +2
                                      </span>
                                    </li>
                                  </ul>
                                </td>
                                <td className="text-truncate">$7500</td>
                              </tr>
                              <tr>
                                <td className="text-truncate">Project Z2</td>
                                <td className="text-truncate">
                                  <ul className="list-unstyled order-list m-b-0 m-b-0">
                                    <li className="team-member team-member-sm">
                                      <img
                                        className="rounded-circle"
                                        src="assets/img/users/user-8.png"
                                        alt="user"
                                        data-toggle="tooltip"
                                        title=""
                                        data-original-title="Wildan Ahdian"
                                      />
                                    </li>
                                    <li className="team-member team-member-sm">
                                      <img
                                        className="rounded-circle"
                                        src="assets/img/users/user-10.png"
                                        alt="user"
                                        data-toggle="tooltip"
                                        title=""
                                        data-original-title="Sarah Smith"
                                      />
                                    </li>
                                    <li className="avatar avatar-sm">
                                      <span className="badge badge-primary">
                                        +3
                                      </span>
                                    </li>
                                  </ul>
                                </td>
                                <td className="text-truncate">$8500</td>
                              </tr>
                              <tr>
                                <td className="text-truncate">Project GTe</td>
                                <td className="text-truncate">
                                  <ul className="list-unstyled order-list m-b-0 m-b-0">
                                    <li className="team-member team-member-sm">
                                      <img
                                        className="rounded-circle"
                                        src="assets/img/users/user-3.png"
                                        alt="user"
                                        data-toggle="tooltip"
                                        title=""
                                        data-original-title="Wildan Ahdian"
                                      />
                                    </li>
                                    <li className="team-member team-member-sm">
                                      <img
                                        className="rounded-circle"
                                        src="assets/img/users/user-5.png"
                                        alt="user"
                                        data-toggle="tooltip"
                                        title=""
                                        data-original-title="Sarah Smith"
                                      />
                                    </li>
                                    <li className="avatar avatar-sm">
                                      <span className="badge badge-primary">
                                        +3
                                      </span>
                                    </li>
                                  </ul>
                                </td>
                                <td className="text-truncate">$8500</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* ======================================================== */}
                   
    
    </>)
}
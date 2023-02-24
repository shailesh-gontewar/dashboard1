import * as React from "react";
import {FiAlignJustify,FiMaximize,FiMail,FiBell} from 'react-icons/fi'
import {FaUserCircle} from 'react-icons/fa'
import {MdSpaceDashboard} from 'react-icons/md'
import SettingSidebar from "./pages/settingside";
import { NavLink } from "react-router-dom";

export default function Dashboard() {
  return (
    <>
      <div className="loader"></div>
      <div id="app">
        <div className="main-wrapper main-wrapper-1">
          <div className="navbar-bg"></div>
          <nav className="navbar navbar-expand-lg main-navbar sticky">
            <div className="form-inline mr-auto">
              <ul className="navbar-nav mr-3">
                <li>
                  <a
                    href="#"
                    data-toggle="sidebar"
                    className="nav-link nav-link-lg
									collapse-btn"
                  >
                    <FiAlignJustify className="r_icon"/>
                  </a>
                </li>
                <li>
                  <a href="#" className="nav-link nav-link-lg fullscreen-btn">
                    <FiMaximize className="r_icon"/>
                  </a>
                </li>
                <li>
                  <form className="form-inline mr-auto">
                    <div className="search-element">
                      <input
                        className="form-control"
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                        data-width="200"
                      />
                      <button className="btn" type="submit">
                        <i className="fas fa-search"></i>
                      </button>
                    </div>
                  </form>
                </li>
              </ul>
            </div>
            <ul className="navbar-nav navbar-right">
              <li className="dropdown dropdown-list-toggle">
                <a
                  href="#"
                  data-toggle="dropdown"
                  className="nav-link nav-link-lg message-toggle"
                >
                  <FiMail className='u_icon'/>
                  <span className="badge headerBadge1">6 </span>{" "}
                </a>
                <div className="dropdown-menu dropdown-list dropdown-menu-right pullDown">
                  <div className="dropdown-header">
                    Messages
                    <div className="float-right">
                      <a href="#">Mark All As Read</a>
                    </div>
                  </div>
                  <div className="dropdown-list-content dropdown-list-message">
                    <a href="#" className="dropdown-item">
                      {" "}
                      <span
                        className="dropdown-item-avatar
											text-white"
                      >
                        {" "}
                        <img
                          alt="image"
                          src="assets/img/users/user-1.png"
                          className="rounded-circle"
                        />
                      </span>{" "}
                      <span className="dropdown-item-desc">
                        {" "}
                        <span className="message-user">John Deo</span>
                        <span className="time messege-text">
                          Please check your mail !!
                        </span>
                        <span className="time">2 Min Ago</span>
                      </span>
                    </a>{" "}
                    <a href="#" className="dropdown-item">
                      {" "}
                      <span className="dropdown-item-avatar text-white">
                        <img
                          alt="image"
                          src="assets/img/users/user-2.png"
                          className="rounded-circle"
                        />
                      </span>{" "}
                      <span className="dropdown-item-desc">
                        {" "}
                        <span className="message-user">Sarah Smith</span>{" "}
                        <span className="time messege-text">
                          Request for leave application
                        </span>
                        <span className="time">5 Min Ago</span>
                      </span>
                    </a>{" "}
                    <a href="#" className="dropdown-item">
                      {" "}
                      <span className="dropdown-item-avatar text-white">
                        <img
                          alt="image"
                          src="assets/img/users/user-5.png"
                          className="rounded-circle"
                        />
                      </span>{" "}
                      <span className="dropdown-item-desc">
                        {" "}
                        <span className="message-user">Jacob Ryan</span>{" "}
                        <span className="time messege-text">
                          Your payment invoice is generated.
                        </span>{" "}
                        <span className="time">12 Min Ago</span>
                      </span>
                    </a>{" "}
                    <a href="#" className="dropdown-item">
                      {" "}
                      <span className="dropdown-item-avatar text-white">
                        <img
                          alt="image"
                          src="assets/img/users/user-4.png"
                          className="rounded-circle"
                        />
                      </span>{" "}
                      <span className="dropdown-item-desc">
                        {" "}
                        <span className="message-user">Lina Smith</span>{" "}
                        <span className="time messege-text">
                          hii John, I have upload doc related to task.
                        </span>{" "}
                        <span className="time">30 Min Ago</span>
                      </span>
                    </a>{" "}
                    <a href="#" className="dropdown-item">
                      {" "}
                      <span className="dropdown-item-avatar text-white">
                        <img
                          alt="image"
                          src="assets/img/users/user-3.png"
                          className="rounded-circle"
                        />
                      </span>{" "}
                      <span className="dropdown-item-desc">
                        {" "}
                        <span className="message-user">Jalpa Joshi</span>{" "}
                        <span className="time messege-text">
                          Please do as specify. Let me know if you have any
                          query.
                        </span>{" "}
                        <span className="time">1 Days Ago</span>
                      </span>
                    </a>{" "}
                    <a href="#" className="dropdown-item">
                      {" "}
                      <span className="dropdown-item-avatar text-white">
                        <img
                          alt="image"
                          src="assets/img/users/user-2.png"
                          className="rounded-circle"
                        />
                      </span>{" "}
                      <span className="dropdown-item-desc">
                        {" "}
                        <span className="message-user">Sarah Smith</span>{" "}
                        <span className="time messege-text">
                          Client Requirements
                        </span>
                        <span className="time">2 Days Ago</span>
                      </span>
                    </a>
                  </div>
                  <div className="dropdown-footer text-center">
                    <a href="#">
                      View All <i className="fas fa-chevron-right"></i>
                    </a>
                  </div>
                </div>
              </li>
              <li className="dropdown dropdown-list-toggle">
                <a
                  href="#"
                  data-toggle="dropdown"
                  className="nav-link notification-toggle nav-link-lg"
                >
                  <FiBell className="b_icon"/>
                </a>
                <div className="dropdown-menu dropdown-list dropdown-menu-right pullDown">
                  <div className="dropdown-header">
                    Notifications
                    <div className="float-right">
                      <a href="#">Mark All As Read</a>
                    </div>
                  </div>
                  <div className="dropdown-list-content dropdown-list-icons">
                    <a href="#" className="dropdown-item dropdown-item-unread">
                      {" "}
                      <span className="dropdown-item-icon bg-primary text-white">
                        {" "}
                        <i
                          className="fas
												fa-code"
                        ></i>
                      </span>{" "}
                      <span className="dropdown-item-desc">
                        {" "}
                        Template update is available now!{" "}
                        <span className="time">2 Min Ago</span>
                      </span>
                    </a>{" "}
                    <a href="#" className="dropdown-item">
                      {" "}
                      <span className="dropdown-item-icon bg-info text-white">
                        {" "}
                        <i
                          className="far
												fa-user"
                        ></i>
                      </span>{" "}
                      <span className="dropdown-item-desc">
                        {" "}
                        <b>You</b> and <b>Dedik Sugiharto</b> are now friends{" "}
                        <span className="time">10 Hours Ago</span>
                      </span>
                    </a>{" "}
                    <a href="#" className="dropdown-item">
                      {" "}
                      <span className="dropdown-item-icon bg-success text-white">
                        {" "}
                        <i
                          className="fas
												fa-check"
                        ></i>
                      </span>{" "}
                      <span className="dropdown-item-desc">
                        {" "}
                        <b>Kusnaedi</b> has moved task <b>Fix bug header</b> to{" "}
                        <b>Done</b> <span className="time">12 Hours Ago</span>
                      </span>
                    </a>{" "}
                    <a href="#" className="dropdown-item">
                      {" "}
                      <span className="dropdown-item-icon bg-danger text-white">
                        {" "}
                        <i className="fas fa-exclamation-triangle"></i>
                      </span>{" "}
                      <span className="dropdown-item-desc">
                        {" "}
                        Low disk space. Let's clean it!{" "}
                        <span className="time">17 Hours Ago</span>
                      </span>
                    </a>{" "}
                    <a href="#" className="dropdown-item">
                      {" "}
                      <span className="dropdown-item-icon bg-info text-white">
                        {" "}
                        <i
                          className="fas
												fa-bell"
                        ></i>
                      </span>{" "}
                      <span className="dropdown-item-desc">
                        {" "}
                        Welcome to Zivi template!{" "}
                        <span className="time">Yesterday</span>
                      </span>
                    </a>
                  </div>
                  <div className="dropdown-footer text-center">
                    <a href="#">
                      View All <i className="fas fa-chevron-right"></i>
                    </a>
                  </div>
                </div>
              </li>
              <li className="dropdown">
                <a
                  href="#"
                  data-toggle="dropdown"
                  className="nav-link dropdown-toggle nav-link-lg nav-link-user"
                >
                  <FaUserCircle className="u_icon"/>
                  <span className="d-sm-none d-lg-inline-block"></span>
                </a>
                <div className="dropdown-menu dropdown-menu-right pullDown">
                  <div className="dropdown-title">Hello Sarah Smith</div>
                  <a href="profile.html" className="dropdown-item has-icon">
                    {" "}
                    <i
                      className="far
										fa-user"
                    ></i>{" "}
                    Profile
                  </a>{" "}
                  <a href="timeline.html" className="dropdown-item has-icon">
                    {" "}
                    <i className="fas fa-bolt"></i>
                    Activities
                  </a>{" "}
                  <a href="#" className="dropdown-item has-icon">
                    {" "}
                    <i className="fas fa-cog"></i>
                    Settings
                  </a>
                  <div className="dropdown-divider"></div>
                  <a
                    href="auth-login.html"
                    className="dropdown-item has-icon text-danger"
                  >
                    {" "}
                    <i className="fas fa-sign-out-alt"></i>
                    Logout
                  </a>
                </div>
              </li>
            </ul>
          </nav>
          <div className="main-sidebar sidebar-style-2">
            <aside id="sidebar-wrapper">
              <div className="sidebar-brand">
                <a href="index.html">
                  {" "}
                  {/* <img
                    alt="image"
                    src="assets/img/logo.png"
                    className="header-logo"
                  />{" "} */}
                  <span className="logo-name">Ecommerce</span>
                </a>
              </div>
              <div className="sidebar-user">
                <div className="sidebar-user-picture">
                  <img alt="image" src="assets/img/user.png" />
                </div>
                <div className="sidebar-user-details">
                  <div className="user-name">John Smith</div>
                  <div className="user-role">Administrator</div>
                </div>
              </div>
              <ul className="sidebar-menu">
                <li className="menu-header">Main</li>
                <li className="dropdown active">
                  <a href="#" className="menu-toggle nav-link has-dropdown">
                    <MdSpaceDashboard/>
                    <span>Dashboard</span>
                  </a>
                  {/* <ul className="dropdown-menu">
                    <li className="active">
                      <a className="nav-link" href="index.html">
                        Dashboard 1
                      </a>
                    </li>
                  </ul> */}
                </li>
                <li className="menu-header">Pages</li>
                <li className="dropdown">
                  <a href="#" className="menu-toggle nav-link has-dropdown">
                    <i data-feather="user-check"></i>
                    <span>Admin</span>
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a href="auth-login.html">Login</a>
                    </li>
                    <li>
                      <NavLink to='/signin'>
                      Vendor Registration
                      </NavLink>
                      {/* <a href="auth-register.html">Vendor Registration</a> */}
                    </li>
                    <li>
                      <a href="auth-forgot-password.html">Forgot Password</a>
                    </li>
                    <li>
                      <a href="auth-reset-password.html">Reset Password</a>
                    </li>
                   
                  </ul>
                </li>
                <li className="dropdown">
                  <a href="#" className="menu-toggle nav-link has-dropdown">
                    <i data-feather="user-check"></i>
                    <span>Vendor Accounts</span>
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <NavLink to='/login'>Login</NavLink>
                      {/* <a href="auth-login.html">Login</a> */}
                    </li>
                    <li>
                      <a href="auth-forgot-password.html">Forgot Password</a>
                    </li>
                    <li>
                      <a href="auth-reset-password.html">Reset Password</a>
                    </li>
                   
                  </ul>
                </li>
              
                <li className="dropdown">
                  <a href="#" className="menu-toggle nav-link has-dropdown">
                    <i data-feather="command"></i>
                    <span>Apps</span>
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="nav-link" href="chat.html">
                        Chat
                      </a>
                    </li>
                    <li>
                      <a className="nav-link" href="portfolio.html">
                        Portfolio
                      </a>
                    </li>
                    <li>
                      <a className="nav-link" href="blog.html">
                        Blog
                      </a>
                    </li>
                    <li>
                      <a className="nav-link" href="calendar.html">
                        Calendar
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="dropdown">
                  <a href="#" className="menu-toggle nav-link has-dropdown">
                    <i data-feather="mail"></i>
                    <span>Email</span>
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="nav-link" href="email-inbox.html">
                        Inbox
                      </a>
                    </li>
                    <li>
                      <a className="nav-link" href="email-compose.html">
                        Compose
                      </a>
                    </li>
                    <li>
                      <a className="nav-link" href="email-read.html">
                        read
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </aside>
          </div>
          {/* Main Content */}
          <div className="main-content">
            <section className="section">
              <ul className="breadcrumb breadcrumb-style ">
                <li className="breadcrumb-item">
                  <h4 className="page-title m-b-0">Dashboard</h4>
                </li>
                <li className="breadcrumb-item">
                  <a href="index.html">
                    <i className="fas fa-home"></i>
                  </a>
                </li>
                <li className="breadcrumb-item active">Dashboard</li>
              </ul>
              <div className="row">
                <div className="col-lg-3 col-sm-6">
                  <div className="card">
                    <div className="card-statistic-4">
                      <div className="info-box7-block">
                        <h6 className="m-b-20 text-right">Orders Received</h6>
                        <h4 className="text-right">
                          <i className="fas fa-cart-plus pull-left bg-indigo c-icon"></i>
                          <span>7.12K</span>
                        </h4>
                        <p className="mb-0 mt-3 text-muted">
                          <i className="fas fa-arrow-circle-up col-green m-r-5"></i>
                          <span className="text-success font-weight-bold">
                            23%
                          </span>{" "}
                          then previous month
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                  <div className="card">
                    <div className="card-statistic-4">
                      <div className="info-box7-block">
                        <h6 className="m-b-20 text-right">Registered Users</h6>
                        <h4 className="text-right">
                          <i className="fas fa-users pull-left bg-cyan c-icon"></i>
                          <span>22.3K</span>
                        </h4>
                        <p className="mb-0 mt-3 text-muted">
                          <i className="fas fa-arrow-circle-up col-red m-r-5"></i>
                          <span className="col-red font-weight-bold">3%</span>{" "}
                          then previous month
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                  <div className="card">
                    <div className="card-statistic-4">
                      <div className="info-box7-block">
                        <h6 className="m-b-20 text-right">Support Tickets</h6>
                        <h4 className="text-right">
                          <i className="fas fa-ticket-alt pull-left bg-deep-orange c-icon"></i>
                          <span>725</span>
                        </h4>
                        <p className="mb-0 mt-3 text-muted">
                          <i className="fas fa-arrow-circle-up col-green m-r-5"></i>
                          <span className="text-success font-weight-bold">
                            21%
                          </span>{" "}
                          then previous month
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                  <div className="card">
                    <div className="card-statistic-4">
                      <div className="info-box7-block">
                        <h6 className="m-b-20 text-right">Total Earning</h6>
                        <h4 className="text-right">
                          <i className="fas fa-dollar-sign pull-left bg-green c-icon"></i>
                          <span>$3.58M</span>
                        </h4>
                        <p className="mb-0 mt-3 text-muted">
                          <i className="fas fa-arrow-circle-down col-red m-r-5"></i>
                          <span className="col-red font-weight-bold">05%</span>{" "}
                          then previous month
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-xl-8 col-md-12 col-lg-8">
                  <div className="card">
                    <div className="card-header">
                      <h4>Revenue Chart</h4>
                    </div>
                    <div className="card-body">
                      <ul className="list-inline text-center m-b-0">
                        <li className="list-inline-item p-r-30">
                          <i
                            data-feather="arrow-up-circle"
                            className="col-green"
                          ></i>
                          <h5 className="m-b-0">$675</h5>
                          <p className="text-muted font-14 m-b-0">
                            Weekly Earnings
                          </p>
                        </li>
                        <li className="list-inline-item p-r-30">
                          <i
                            data-feather="arrow-down-circle"
                            className="col-orange"
                          ></i>
                          <h5 className="m-b-0">$1,587</h5>
                          <p className="text-muted font-14 m-b-0">
                            Monthly Earnings
                          </p>
                        </li>
                        <li className="list-inline-item p-r-30">
                          <i
                            data-feather="arrow-up-circle"
                            className="col-green"
                          ></i>
                          <h5 className="mb-0 m-b-0">$45,965</h5>
                          <p className="text-muted font-14 m-b-0">
                            Yearly Earnings
                          </p>
                        </li>
                      </ul>
                      <div id="revenue"></div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-md-12 col-lg-4">
                  <div className="card l-bg-purple">
                    <div className="card-body">
                      <div className="text-white">
                        <div className="row">
                          <div className="col-md-6 col-lg-5">
                            <h4 className="mb-0 font-26 text-white">$1,235</h4>
                            <p className="mb-2 text-white">
                              Avg Sales Per Month
                            </p>
                            <p className="mb-0 text-white">
                              <span className="font-20">+11.25% </span>Increase
                            </p>
                          </div>
                          <div className="col-md-6 col-lg-7">
                            <div className="sparkline-bar p-t-50"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card l-bg-cyan-dark">
                    <div className="card-body">
                      <div className="text-white">
                        <div className="row">
                          <div className="col-md-6 col-lg-5">
                            <h4 className="mb-0 font-26 text-white">758</h4>
                            <p className="mb-2 text-white">
                              Avg new Cust Per Month
                            </p>
                            <p className="mb-0 text-white">
                              <span className="font-20">+25.11%</span> Increase
                            </p>
                          </div>
                          <div className="col-md-6 col-lg-7">
                            <div className="sparkline-inline p-t-50"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <SettingSidebar/>
          </div>
        </div>
      </div>
    </>
  );
}

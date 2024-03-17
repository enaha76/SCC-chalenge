import React, { useState } from 'react';

const UsersManagement: React.FC = () => {

    const [isVisible, setIsVisible] = React.useState(false);
    const [isVisibleUser, setIsVisibleUser] = React.useState(false);


    const [showModal, setShowModal] = useState(false);

    const handleShow = () => setShowModal(true);
    const handleClose = () => setShowModal(false);


    const handleClick = () => {
        setIsVisible(!isVisible);
        console.log('isVisible:', isVisible);

    };

    const handleClickUser = () => {
        setIsVisibleUser(!isVisibleUser);
        console.log('isVisibleUser:', isVisibleUser);
    };


    // Assuming you have a type for User data
    interface User {
        id: number;
        name: string;
        email: string;
        registrationDate: string;
        status: 'Verified' | 'Pending';
    }

    // Dummy data for demonstration
    const users: User[] = [
        { id: 1, name: 'John Doe', email: 'john.doe@example.com', registrationDate: 'January 15, 2019', status: 'Verified' },
        { id: 2, name: 'Sam Dew', email: 'sam.dew@example.com', registrationDate: 'January 15, 2019', status: 'Pending' },
        { id: 3, name: 'Anna Doe', email: 'anna.doe@example.com', registrationDate: 'January 15, 2019', status: 'Verified' },
    ];


    const [isNotificationsOpen, setIsNotificationsOpen] = React.useState(false);
    const [isProfileMenuOpen, setIsProfileMenuOpen] = React.useState(false);

    // Toggle dropdown visibility
    const toggleNotifications = () => setIsNotificationsOpen(!isNotificationsOpen);
    // const toggleProfileMenu = () => setIsProfileMenuOpen(!isProfileMenuOpen);

    const toggleProfileMenu = (event: React.MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault(); // Prevent the link from navigating
        setIsProfileMenuOpen(!isProfileMenuOpen);
    };

    return (
        <div>

            <header className="header bg-body">
                <nav className="navbar flex-nowrap p-0">
                    <div className="navbar-brand-wrapper d-flex align-items-center col-auto">
                        <a className="navbar-brand navbar-brand-mobile" href="/">
                            <img className="img-fluid w-100" src="public/img/logo-mini.png" alt="Graindashboard" />
                        </a>
                        <a className="navbar-brand navbar-brand-desktop" href="/">
                            <img className="side-nav-show-on-closed" src="public/img/logo-mini.png" alt="Graindashboard" style={{ width: 'auto', height: '33px' }} />
                            <img className="side-nav-hide-on-closed" src="public/img/logo.png" alt="Graindashboard" style={{ width: 'auto', height: '33px' }} />
                        </a>
                    </div>

                    <div className="header-content col px-md-3">
                        <div className="d-flex align-items-center">
                            {/* Side Nav Toggle */}
                            <a className="js-side-nav header-invoker d-flex mr-md-2" href="#" onClick={(e) => { e.preventDefault(); /* Handle side nav toggle here */ }}>
                                <i className="gd-align-left"></i>
                            </a>

                            {/* User Notifications */}
                            <div className="dropdown ml-auto">
                                <a className="header-invoker" href="#" onClick={(e) => { e.preventDefault(); toggleNotifications(); }}>
                                    <span className="indicator indicator-bordered indicator-top-right indicator-primary rounded-circle"></span>
                                    <i className="gd-bell"></i>
                                </a>

                                {isNotificationsOpen && (
                                    <div className="dropdown-menu dropdown-menu-center py-0 mt-4" style={{ width: '18.75rem', animationDuration: '300ms' }}>
                                        {/* Example Notification */}
                                        <div className="card">
                                            <div className="card-header d-flex align-items-center border-bottom py-3">
                                                <h5 className="mb-0">Notifications</h5>
                                                <a className="link small ml-auto" href="#">Clear All</a>
                                            </div>
                                            <div className="card-body p-0">
                                                <div className="list-group list-group-flush">
                                                    {/* Example Notification Item */}
                                                    <div className="list-group-item list-group-item-action">
                                                        <div className="d-flex align-items-center text-nowrap mb-2">
                                                            <i className="gd-info-alt icon-text text-primary mr-2"></i>
                                                            <h6 className="font-weight-semi-bold mb-0">New Update</h6>
                                                            <span className="list-group-item-date text-muted ml-auto">just now</span>
                                                        </div>
                                                        <p className="mb-0">Order #10000 has been updated.</p>
                                                    </div>
                                                    {/* Add more notifications here */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* User Avatar and Profile Menu */}
                            <div className="dropdown mx-3 ml-2">
                                <a id="profileMenuInvoker" className="header-complex-invoker" href="#" aria-controls="profileMenu" aria-haspopup="true" aria-expanded={isProfileMenuOpen ? "true" : "false"} onClick={toggleProfileMenu}>
                                    {/* Profile icon or image */}
                                    <span className="mr-md-2 avatar-placeholder">J</span>
                                    <span className="d-none d-md-block">John Doe</span>
                                    <i className="gd-angle-down d-none d-md-block ml-2"></i>
                                </a>

                                {isProfileMenuOpen && (
                                    <ul id="profileMenu" className="unfold unfold-user unfold-light unfold-top unfold-centered position-absolute pt-2 pb-1 mt-4" aria-labelledby="profileMenuInvoker" style={{ animationDuration: '300ms' }}>
                                        <li className="unfold-item">
                                            <a className="unfold-link d-flex align-items-center text-nowrap" href="#">
                                                <i className="gd-user unfold-item-icon mr-3"></i>
                                                My Profile
                                            </a>
                                        </li>
                                        <li className="unfold-item unfold-item-has-divider">
                                            <a className="unfold-link d-flex align-items-center text-nowrap" href="#">
                                                <i className="gd-power-off unfold-item-icon mr-3"></i>
                                                Sign Out
                                            </a>
                                        </li>
                                    </ul>
                                )}
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
            <div className='main'>


                {showModal && (
                    <div className="modal show" tabIndex={-1} role="dialog" style={{ display: 'block', width: 1500 }}>
                        <div className="modal-dialog modal-dialog-scrollable" role="document">
                            <div className="modal-content">
                                <div className="">
                                    <h5 className="modal-title">Create New User</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={handleClose}>
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    {/* Modal Body with the form */}
                                    <div className="py-4 px-3 px-md-4">
                                        <div className="card mb-3 mb-md-4">
                                            <div className="card-body">


                                                <form >
                                                    <div className="form-row">
                                                        <div className="form-group col-12 col-md-12">
                                                            <label htmlFor="name">Name</label>
                                                            <input type="text" className="form-control" id="name" name="name" placeholder="User Name" />
                                                        </div>
                                                        <div className="form-group col-12 col-md-12">
                                                            <label htmlFor="email">Email</label>
                                                            <input type="email" className="form-control" id="email" name="email" placeholder="User Email" />
                                                        </div>
                                                    </div>
                                                    <div className="form-row">
                                                        <div className="form-group col-12 col-md-12">
                                                            <label htmlFor="password">Password</label>
                                                            <input type="password" className="form-control" id="password" name="password" placeholder="New Password" />
                                                        </div>
                                                        <div className="form-group col-12 col-md-12">
                                                            <label htmlFor="password_confirm">Confirm Password</label>
                                                            <input type="password" className="form-control" id="password_confirm" name="password_confirm" placeholder="Confirm Password" />
                                                        </div>
                                                    </div>



                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={handleClose}>Close</button>
                                    <button type="submit" className="btn btn-primary float-right">Create</button>
                                    {/* The Save Changes button could be repurposed or removed based on the form's needs */}
                                </div>
                            </div>
                        </div>
                    </div>
                )}


                {/* <h1>Users Management</h1> */}
                {/* sidebar */}
                <aside id="sidebar" className="js-custom-scroll side-nav">
                    <ul id="sideNav" className="side-nav-menu side-nav-menu-top-level mb-0">
                        {/* Title */}
                        <li className="sidebar-heading h6">Dashboard</li>
                        {/* End Title */}

                        {/* Dashboard */}
                        <li className="side-nav-menu-item">
                            <a className="side-nav-menu-link media align-items-center" href="/">
                                <span className="side-nav-menu-icon d-flex mr-3">
                                    <i className="gd-dashboard"></i>
                                </span>
                                <span className="side-nav-fadeout-on-closed media-body">Dashboard</span>
                            </a>
                        </li>
                        {/* End Dashboard */}

                        {/* Documentation */}
                        <li className="side-nav-menu-item">
                            <a className="side-nav-menu-link media align-items-center" href="documentation/" target="_blank">
                                <span className="side-nav-menu-icon d-flex mr-3">
                                    <i className="gd-file"></i>
                                </span>
                                <span className="side-nav-fadeout-on-closed media-body">Documentation</span>
                            </a>
                        </li>
                        {/* End Documentation */}

                        {/* Title */}
                        <li className="sidebar-heading h6">Examples</li>
                        {/* End Title */}

                        {/* Users */}
                        <li className="side-nav-menu-item side-nav-has-menu active side-nav-opened">
                            <a onClick={handleClickUser} className="side-nav-menu-link media align-items-center" href="#" data-target="#subUsers">
                                <span className="side-nav-menu-icon d-flex mr-3">
                                    <i className="gd-user"></i>
                                </span>
                                <span className="side-nav-fadeout-on-closed media-body">Users</span>
                                <span className="side-nav-control-icon d-flex">
                                    <i className="gd-angle-right side-nav-fadeout-on-closed"></i>
                                </span>
                                <span className="side-nav__indicator side-nav-fadeout-on-closed"></span>
                            </a>

                            {/* Users: subUsers */}
                            <ul id="subUsers" className="side-nav-menu side-nav-menu-second-level mb-0" style={{ display: isVisibleUser ? 'none' : 'block' }}>
                                <li className="side-nav-menu-item active">
                                    <a className="side-nav-menu-link" href="users.html">All Users</a>
                                </li>
                                <li className="side-nav-menu-item">
                                    <a className="side-nav-menu-link" href="user-edit.html">Add new</a>
                                </li>
                            </ul>
                            {/* End Users: subUsers */}
                        </li>
                        {/* End Users */}

                        {/* Authentication */}
                        <li className="side-nav-menu-item side-nav-has-menu">
                            <a className="side-nav-menu-link media align-items-center" href="#" data-target="#subPages">
                                <span className="side-nav-menu-icon d-flex mr-3">
                                    <i className="gd-lock"></i>
                                </span>
                                <span onClick={handleClick} className="side-nav-fadeout-on-closed media-body">Authentication</span>
                                <span className="side-nav-control-icon d-flex">
                                    <i className="gd-angle-right side-nav-fadeout-on-closed"></i>
                                </span>
                                <span className="side-nav__indicator side-nav-fadeout-on-closed"></span>
                            </a>

                            {/* Pages: subPages */}
                            <ul id="subPages" className="side-nav-menu side-nav-menu-second-level mb-0" style={{ display: isVisible ? 'none' : 'block' }}>
                                <li className="side-nav-menu-item">
                                    <a className="side-nav-menu-link" href="login.html">Login</a>
                                </li>
                                <li className="side-nav-menu-item">
                                    <a className="side-nav-menu-link" href="register.html">Register</a>
                                </li>
                                <li className="side-nav-menu-item">
                                    <a className="side-nav-menu-link" href="password-reset.html">Forgot Password</a>
                                </li>
                                <li className="side-nav-menu-item">
                                    <a className="side-nav-menu-link" href="password-reset-2.html">Forgot Password 2</a>
                                </li>
                                <li className="side-nav-menu-item">
                                    <a className="side-nav-menu-link" href="email-verification.html">Email Verification</a>
                                </li>
                            </ul>
                            {/* End Pages: subPages */}
                        </li>
                        {/* End Authentication */}

                        {/* Settings */}
                        <li className="side-nav-menu-item">
                            <a className="side-nav-menu-link media align-items-center" href="settings.html">
                                <span className="side-nav-menu-icon d-flex mr-3">
                                    <i className="gd-settings"></i>
                                </span>
                                <span className="side-nav-fadeout-on-closed media-body">Settings</span>
                            </a>
                        </li>
                        {/* End Settings */}

                        {/* Static */}
                        <li className="side-nav-menu-item">
                            <a className="side-nav-menu-link media align-items-center" href="static-non-auth.html">
                                <span className="side-nav-menu-icon d-flex mr-3">
                                    <i className="gd-file"></i>
                                </span>
                                <span className="side-nav-fadeout-on-closed media-body">Static page</span>
                            </a>
                        </li>
                        {/* End Static */}
                    </ul>
                </aside>

                <div className='content'>
                    {/* body */}
                    <div className="py-4 px-3 px-md-4">
                        <div className="card mb-3 mb-md-4">
                            <div className="card-body">
                                {/* Breadcrumb */}
                                <nav className="d-none d-md-block" aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item">
                                            <a href="#">Users</a>
                                        </li>
                                        <li className="breadcrumb-item active" aria-current="page">All Users</li>
                                    </ol>
                                </nav>

                                <div className="mb-3 mb-md-4 d-flex justify-content-between">
                                    <div className="h3 mb-0">Users</div>
                                </div>

                                {/* Users Table */}
                                <div className="table-responsive-xl">
                                    <table className="table text-nowrap mb-0">
                                        <button type="button" className="btn btn-primary" onClick={handleShow}>
                                            Launch modal
                                        </button>
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>Name</th>
                                                <th>Email</th>
                                                <th>Registration Date</th>
                                                <th>Status</th>
                                                <th>Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {users.map(user => (
                                                <tr key={user.id}>
                                                    <td>{user.id}</td>
                                                    <td>
                                                        <div className="d-flex align-items-center">
                                                            <div className="position-relative mr-2">
                                                                <span className="avatar-placeholder mr-md-2">{user.name[0]}</span>
                                                            </div>
                                                            {user.name}
                                                        </div>
                                                    </td>
                                                    <td>{user.email}</td>
                                                    <td>{user.registrationDate}</td>
                                                    <td>
                                                        <span className={`badge badge-pill badge-${user.status.toLowerCase()}`}>{user.status}</span>
                                                    </td>
                                                    <td>
                                                        <div className="position-relative">
                                                            <a className="link-dark d-inline-block" href="#">
                                                                <i className="gd-pencil icon-text"></i>
                                                            </a>
                                                            <a className="link-dark d-inline-block" href="#">
                                                                <i className="gd-trash icon-text"></i>
                                                            </a>
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>

                                {/* Pagination Placeholder */}
                                <div className="card-footer d-block d-md-flex align-items-center d-print-none">
                                    <div className="d-flex mb-2 mb-md-0">Showing 1 to 3 of 3 Entries</div>
                                    {/* Implement pagination here */}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* footer */}
                    <footer className="small p-3 px-md-4 mt-auto">
                        <div className="row justify-content-between">
                            <div className="col-lg text-center text-lg-left mb-3 mb-lg-0">
                                <ul className="list-dot list-inline mb-0">
                                    <li className="list-dot-item list-dot-item-not list-inline-item mr-lg-2">
                                        <a className="link-dark" href="#">FAQ</a>
                                    </li>
                                    <li className="list-dot-item list-inline-item mr-lg-2">
                                        <a className="link-dark" href="#">Support</a>
                                    </li>
                                    <li className="list-dot-item list-inline-item mr-lg-2">
                                        <a className="link-dark" href="#">Contact us</a>
                                    </li>
                                </ul>
                            </div>

                            <div className="col-lg text-center mb-3 mb-lg-0">
                                <ul className="list-inline mb-0">
                                    <li className="list-inline-item mx-2">
                                        <a className="link-muted" href="#"><i className="gd-twitter-alt"></i></a>
                                    </li>
                                    <li className="list-inline-item mx-2">
                                        <a className="link-muted" href="#"><i className="gd-facebook"></i></a>
                                    </li>
                                    <li className="list-inline-item mx-2">
                                        <a className="link-muted" href="#"><i className="gd-github"></i></a>
                                    </li>
                                </ul>
                            </div>

                            <div className="col-lg text-center text-lg-right">
                                &copy; 2019 Graindashboard. All Rights Reserved.
                            </div>
                        </div>
                    </footer>



                </div>
            </div>
        </div>
    );
};

export default UsersManagement;
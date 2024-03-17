import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Topbar from '../../components/Topbar';
import SideAdmin from '../../components/sideAdmin';
import Footer from '../../components/Footer';
import EvaluationSidebar from '../../components/evaliationSideBar';

const Evaluation = () => {
    // Your code here
    const [table, setTable] = useState(null);
    const [showMessage, setShowMessage] = useState(false);
    const [showSpinner, setShowSpinner] = useState(false);
    const [showSuccessAlert, setShowSuccessAlert] = useState(false);
    const [showDangerAlert, setShowDangerAlert] = useState(false);
    const [message, setMessage] = useState('');


    return (
        <div>
            <>
                <div id="spinner" className={`spinner-wrapper ${showSpinner ? '' : 'd-none'}`}>
                    <div className="spinner-border avatar-lg text-primary" role="status"></div>
                </div>

                {showSuccessAlert && (
                    <div className="modal fade show" style={{ display: 'block', backgroundColor: 'rgba(0, 0, 0, 0.5)', position: 'fixed', top: 0, bottom: 0, left: 0, right: 0 }} tabIndex="-1" role="dialog">
                        <div className="modal-dialog modal-sm">
                            <div className="modal-content modal-filled bg-success">
                                <div className="modal-body p-4">
                                    <div className="text-center">
                                        <i className="dripicons-checkmark h1"></i>
                                        <h4 className="mt-2">Well Done!</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                {showDangerAlert && (
                    <div id="danger-alert-modal" className="modal fade" tabindex="-1" role="dialog" aria-hidden="true">
                        <div className="modal-dialog modal-sm">
                            <div className="modal-content modal-filled bg-danger">
                                <div className="modal-body p-4">
                                    <div className="text-center">
                                        <i className="dripicons-wrong h1"></i>
                                        <h4 className="mt-2">Error</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                <Topbar />
                <div className="container-fluid">
                    <div className="wrapper">
                        <EvaluationSidebar />
                        <div className="content-page">
                            <div className="content">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="page-title-box">
                                            <div className="page-title-right">
                                                <ol className="breadcrumb m-0"></ol>
                                            </div>
                                            <h1 className="page-title mb-3  text-uppercase fw-normal fs-4">
                                                Evaliation
                                                <i className="fas fa-user-plus m-2 fs-3 text-success">

                                                </i>

                                            </h1>
                                        </div>
                                    </div>
                                </div>

                                <div id="signup-modal" className="modal fade" tabIndex="-1" role="dialog" aria-hidden="true">
                                    <div className="modal-dialog">
                                        <div className="modal-content">
                                            <div className="modal-body">
                                                <div className="text-center mt-2 mb-4">
                                                    <span><img src="assets/images/users/mauripay.png" alt="" height="29" /></span>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row " >
                                    <div className="card">
                                        <div className="card-body">
                                            {/* <div id='tb' className="table-responsive"> */}
                                            <div className="col-12 ">

                                                <div className="row">
                                                    {/* start chat users */}
                                                    <div className="col-xxl-3 hljs col-xl-6 order-xl-1">
                                                        <div className="card">
                                                            <div className="card-body p-0">
                                                                <ul className="nav nav-tabs nav-bordered">
                                                                    <li className="nav-item">
                                                                        <a href="#allUsers" data-bs-toggle="tab" aria-expanded="false" className="nav-link active py-2">
                                                                            Defi 1
                                                                        </a>
                                                                    </li>
                                                                    <li className="nav-item">
                                                                        <a href="#favUsers" data-bs-toggle="tab" aria-expanded="true" className="nav-link py-2">
                                                                        Defi 2
                                                                        </a>
                                                                    </li>
                                                                    <li className="nav-item">
                                                                        <a href="#friendUsers" data-bs-toggle="tab" aria-expanded="true" className="nav-link py-2">
                                                                        Defi 3
                                                                        </a>
                                                                    </li>
                                                                </ul> {/* end nav */}
                                                                <div className="tab-content">
                                                                    <div className="tab-pane show active p-3" id="newpost">

                                                                        {/* start search box */}
                                                                        <div className="app-search">
                                                                            <form>
                                                                                <div className="mb-2 position-relative">
                                                                                    <input type="text" className="form-control" placeholder="People, groups & messages..." />
                                                                                    <span className="mdi mdi-magnify search-icon"></span>
                                                                                </div>
                                                                            </form>
                                                                        </div>
                                                                        {/* end search box */}

                                                                        {/* users */}
                                                                        <div className="row">
                                                                            <div className="col">
                                                                                <div data-simplebar style={{ maxHeight: '550px' }}>

                                                                                    {/* Example user */}
                                                                                    {/* Repeat this block for each user */}
                                                                                    <a href="javascript:void(0);" className="text-body">
                                                                                        <div className="d-flex align-items-start mt-1 p-2">
                                                                                            <img src="assets/images/users/avatar-2.jpg" className="me-2 rounded-circle" height="48" alt="Brandon Smith" />
                                                                                            <div className="w-100 overflow-hidden">
                                                                                                <h5 className="mt-0 mb-0 font-14">
                                                                                                    <span className="float-end text-muted font-12">4:30am</span>
                                                                                                    Let's Code
                                                                                                </h5>
                                                                                                <p className="mt-1 mb-0 text-muted font-14">
                                                                                                    <span className="w-25 float-end text-end"><span className="badge badge-danger-lighten">3</span></span>
                                                                                                    {/* <span className="w-75">How are you today?</span> */}
                                                                                                </p>
                                                                                            </div>
                                                                                        </div>
                                                                                    </a>
                                                                                    {/* End of example user block */}

                                                                                </div> {/* end slimscroll */}
                                                                            </div> {/* End col */}
                                                                        </div>
                                                                        {/* end users */}
                                                                    </div> {/* end Tab Pane */}
                                                                </div> {/* end tab content */}
                                                            </div> {/* end card-body */}
                                                        </div> {/* end card */}
                                                    </div>
                                                    {/* end chat users */}

                                                    {/* start user detail */}
                                                    <div className="col-xxl-3 hljs col-xl-6 order-xl-1 order-xxl-2">
                                                        <div className="card">
                                                            <div className="card-body">
                                                                <div className="dropdown float-end">
                                                                    <a href="#" className="dropdown-toggle arrow-none card-drop" data-bs-toggle="dropdown" aria-expanded="false">
                                                                        <i className="mdi mdi-dots-horizontal"></i>
                                                                    </a>
                                                                    <div className="dropdown-menu dropdown-menu-end">
                                                                        {/* item */}
                                                                        <a href="javascript:void(0);" className="dropdown-item">View full</a>
                                                                        {/* item */}
                                                                        <a href="javascript:void(0);" className="dropdown-item">Edit Contact Info</a>
                                                                        {/* item */}
                                                                        <a href="javascript:void(0);" className="dropdown-item">Remove</a>
                                                                    </div>
                                                                </div>

                                                                <div className="mt-3 text-center">
                                                                    <img src="" alt="shreyu" className="img-thumbnail avatar-lg rounded-circle" />
                                                                    <h4>let's Code</h4>
                                                                    <button className="btn btn-primary btn-sm mt-1"><i className='uil uil-envelope-add me-1'></i>Send Email</button>
                                                                    <p className="text-muted mt-2 font-14">Last Interacted: <strong>Few hours back</strong></p>
                                                                </div>

                                                                <div className="mt-3">
                                                                    <hr />

                                                                    {/* Example info block */}
                                                                    {/* Repeat this block for each type of information */}
                                                                    <p className="mt-4 mb-1"><strong><i className='uil uil-at'></i> Conception:</strong></p>
                                                                    <p>support@coderthemes.com</p>
                                                                    {/* End example info block */}

                                                                    <hr />
                                                                    <p className="mt-4 mb-1"><strong><i className='uil uil-at'></i> Choix technologiques:</strong></p>
                                                                    <p>support@coderthemes.com</p>
                                                                    <hr />
                                                                    <p className="mt-4 mb-1"><strong><i className='uil uil-at'></i> Prises en charge des fonctionnalités demandées:</strong></p>
                                                                    <p>support@coderthemes.com</p>
                                                                    <hr />
                                                                    <p className="mt-4 mb-1"><strong><i className='uil uil-at'></i> Ergonomie:</strong></p>
                                                                    <p>support@coderthemes.com</p>
                                                                    <hr />
                                                                    <p className="mt-4 mb-1"><strong><i className='uil uil-at'></i> Généricité de la solution:</strong></p>
                                                                    <p>support@coderthemes.com</p>
                                                                    <hr />
                                                                    <p className="mt-4 mb-1"><strong><i className='uil uil-at'></i> Qualité de la présentation:</strong></p>
                                                                    <p>support@coderthemes.com</p>
                                                                    <hr />
                                                                    <p className="mt-4 mb-1"><strong><i className='uil uil-at'></i> Soumission des livrables à temps:</strong></p>
                                                                    <p>support@coderthemes.com</p>

                                                                    <hr />
                                                                    <p className="mt-4 mb-1"><strong><i className='uil uil-at'></i> Utilisation d’outils de travail collaboratif:</strong></p>
                                                                    <p>support@coderthemes.com</p>

                                                                </div>
                                                            </div> {/* end card-body */}
                                                        </div> {/* end card */}
                                                    </div> {/* end col */}
                                                    {/* end user detail */}
                                                </div> {/* end row */}


                                            </div>
                                            <button type="button" className="btn btn-primary m-2 float-end" >vote</button>
                                            {/* </div> */}
                                        </div>
                                    </div>
                                </div>
                                <Footer />
                            </div>
                        </div>
                    </div>
                </div>
            </>
        </div>
    );
};

export default Evaluation;
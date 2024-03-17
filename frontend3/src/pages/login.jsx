import React, { useEffect, useState } from 'react';
import LeftSidebar from '../components/LeftSidebar';
import Footer from '../components/Footer';
import Topbar from '../components/Topbar';
import '../App.css'





function Login() {


    return (
        <>

            <Topbar />
            <div className="container-fluid">
                <div className="wrapper">
                    <LeftSidebar />
                    <div className="content-page">
                        <div className="content">
                            <div className="row">
                                <div className="col-12">
                                    <div className="page-title-box">
                                        <div className="page-title-right">
                                            <ol className="breadcrumb m-0"></ol>
                                        </div>
                                        <h1 className="page-title mb-3  text-uppercase fw-normal fs-4">
                                            Login
                                            <i className="fas fa-user-check m-2 fs-3 text-primary"></i>

                                        </h1>
                                    </div>
                                </div>
                            </div>
                            <div className="row">

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
                            <div className="row">
                                <div className="card">
                                    <div className="card-body">
                                        <div id='tb' className="table-responsive">
                                            <div className="col-12 text-center">

                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Footer />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;

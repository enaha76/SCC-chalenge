import React from 'react';
import Topbar from '../../components/Topbar';
import EvaluationSidebar from '../../components/evaliationSideBar';
import Footer from '../../components/Footer';


const Team = () => {
    const [showSpinner, setShowSpinner] = React.useState(false);
    const [showSuccessAlert, setShowSuccessAlert] = React.useState(false);
    const [showDangerAlert, setShowDangerAlert] = React.useState(false);


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
                                                Team
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
                                                    <div className="col-xxl-3 hljs col-xl-12 order-xl-1">
                                                        <div className="card">
                                                            <div className="card-body p-0">
                                                            <button type="button" className="btn btn-primary m-2 float-end" >Add members</button>
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
                                                                                                    <span className="float-end text-muted font-12"></span>
                                                                                                    Let's Code
                                                                                                </h5>
                                                                                                <p className="mt-1 mb-0 text-muted font-14">
                                                                                                    <span className="w-25 float-end text-end"><span className="badge badge-danger-lighten">Leader</span></span>
                                                                                                    <span className="w-75">Ahmedou Enaha</span>
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
                                                </div>


                                            </div>
                                            
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

export default Team;
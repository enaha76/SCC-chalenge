import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Topbar from '../../components/Topbar';
import SideAdmin from '../../components/sideAdmin';
import Footer from '../../components/Footer';
// import axios from 'axios';

const Challenge = () => {
    // Your code here
    const [table, setTable] = useState(null);
    const [showMessage, setShowMessage] = useState(false);
    const [showSpinner, setShowSpinner] = useState(false);
    const [showSuccessAlert, setShowSuccessAlert] = useState(false);
    const [showDangerAlert, setShowDangerAlert] = useState(false);
    const [message, setMessage] = useState('');


    return (
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
                    <SideAdmin />
                    <div className="content-page">
                        <div className="content">
                            <div className="row">
                                <div className="col-12">
                                    <div className="page-title-box">
                                        <div className="page-title-right">
                                            <ol className="breadcrumb m-0"></ol>
                                        </div>
                                        <h1 className="page-title mb-3  text-uppercase fw-normal fs-4">
                                            Chalenge
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
                                            {/* <form className="ps-3 pe-3">
                                                <div className="mb-3">




                                                </div>
                                                <div className="mb-3">
                                                    <label htmlFor="password" className="form-label">Code</label>
                                                    <input name='code' className="form-control" type="text" required="" id="password" placeholder="Password" />
                                                </div>
                                                <div className="mb-3 text-center">
                                                    <button className="btn btn-primary" type="submit">Save</button>
                                                </div>
                                            </form> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="card">
                                    <div className="card-body">
                                        {/* <div id='tb' className="table-responsive"> */}
                                            <div className="col-12 ">

                                                <div className="row">
                                                    <div className="col-xl-6">
                                                        <div className="mb-3">
                                                            <label htmlFor="projectname" className="form-label">Name</label>
                                                            <input type="text" id="projectname" className="form-control" placeholder="Enter project name" />
                                                        </div>

                                                        <div className="mb-3">
                                                            <label htmlFor="project-overview" className="form-label">Overview</label>
                                                            <textarea className="form-control" id="project-overview" rows="5" placeholder="Enter some brief about project.."></textarea>
                                                        </div>

                                                        {/* Date View */}
                                                        <div className="mb-3 position-relative" id="datepicker1">
                                                            <label className="form-label">Start Date</label>
                                                            <input type="text" className="form-control" data-provide="datepicker" data-date-container="#datepicker1" data-date-format="d-M-yyyy" data-date-autoclose="true" />
                                                        </div>

                                                        {/* <div className="mb-3">
                                                            <label htmlFor="project-budget" className="form-label">Budget</label>
                                                            <input type="text" id="project-budget" className="form-control" placeholder="Enter project budget" />
                                                        </div> */}

                                                        {/* <div className="mb-0">
                                                            <label htmlFor="project-overview" className="form-label">Team Members</label>

                                                            <select className="form-control select2" data-toggle="select2">
                                                                <option>Select</option>
                                                                <option value="AZ">Mary Scott</option>
                                                                <option value="CO">Holly Campbell</option>
                                                                <option value="ID">Beatrice Mills</option>
                                                                <option value="MT">Melinda Gills</option>
                                                                <option value="NE">Linda Garza</option>
                                                                <option value="NM">Randy Ortez</option>
                                                                <option value="ND">Lorene Block</option>
                                                                <option value="UT">Mike Baker</option>
                                                            </select>

                                                            <div className="mt-2" id="tooltip-container">
                                                                
                                                            </div>
                                                        </div> */}
                                                        
                                                    </div> {/* end col*/}

                                                    <div className="col-xl-6">
                                                        <div className="mb-3 mt-3 mt-xl-0">
                                                            <label htmlFor="projectname" className="mb-0">File</label>
                                                            <p className="text-muted font-14"></p>

                                                            <form action="/" method="post" className="dropzone" id="myAwesomeDropzone" data-plugin="dropzone" data-previews-container="#file-previews" data-upload-preview-template="#uploadPreviewTemplate">
                                                                <div className="fallback">
                                                                    <input name="file" type="file" />
                                                                </div>

                                                                <div className="dz-message needsclick">
                                                                    <i className="h3 text-muted dripicons-cloud-upload"></i>
                                                                    <h4>Drop files here or click to upload.</h4>
                                                                </div>
                                                            </form>

                                                            {/* Preview */}
                                                            <div className="dropzone-previews mt-3" id="file-previews"></div>

                                                            {/* file preview template */}
                                                            <div className="d-none" id="uploadPreviewTemplate"></div>
                                                            {/* end file preview template */}
                                                        </div>

                                                        {/* Date View */}
                                                        <div className="mb-3 position-relative" id="datepicker2">
                                                            <label className="form-label">Due Date</label>
                                                            <input type="text" className="form-control" data-provide="datepicker" data-date-container="#datepicker2" data-date-format="d-M-yyyy" data-date-autoclose="true" />
                                                        </div>
                                                    </div> {/* end col*/}
                                                </div>


                                            </div>
                                            <button type="button" className="btn btn-primary m-2 float-end" >Submit</button>
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
    );
};

export default Challenge;
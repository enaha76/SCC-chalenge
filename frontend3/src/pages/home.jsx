import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { addDepot, getDepots } from '../actions/depotActions';
import Footer from '../components/Footer';
import LeftSidebar from '../components/LeftSidebar';
import Topbar from '../components/Topbar';

const Home = () => {
    return (
        <div>
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
                                            Depot
                                            <i className="fas fa-user-plus m-2 fs-3 text-success">

                                            </i>

                                        </h1>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <button type="button" className="btn btn-primary m-2" data-bs-toggle="modal" data-bs-target="#signup-modal">Add</button>
                                    <button onClick={addrandomly} type="button" className="btn btn-success m-2">add randomly</button>
                                    <button onClick={handleTestClick} type="button" className="btn btn-warning m-2">Test <i className="mdi mdi-wrench"></i></button>
                                    {/* <div class="spinner-grow text-warning" role="status"></div> */}
                                </div>
                            </div>
                            <div id="signup-modal" className="modal fade" tabIndex="-1" role="dialog" aria-hidden="true">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        <div className="modal-body">
                                            <div className="text-center mt-2 mb-4">
                                                <span><img src="assets/images/users/mauripay.png" alt="" height="29" /></span>
                                            </div>
                                            <form onSubmit={handleSubmit} className="ps-3 pe-3">
                                                <div className="mb-3">
                                                    <label htmlFor="exampleInputEmail1" className="form-label">Number</label>
                                                    <select onChange={handleChange} name="email" className="form-control select2" data-toggle="select2">
                                                        <option>Select</option>
                                                        {results && results.length > 0 && results.map(user => (
                                                            <option key={user.email} value={JSON.stringify(user)}>
                                                                {user.email}
                                                            </option>
                                                        ))}
                                                    </select>



                                                </div>
                                                <div className="mb-3">
                                                    <label htmlFor="password" className="form-label">Code</label>
                                                    <input name='code' className="form-control" onChange={handleChange} type="text" required="" id="password" placeholder="Password" />
                                                </div>
                                                <div className="mb-3 text-center">
                                                    <button className="btn btn-primary" type="submit">Save</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="card">
                                    <div className="card-body">
                                        <div id='tb' className="table-responsive">
                                            <div className="col-12 text-center">

                                                {table !== null ? (
                                                    table
                                                ) : (
                                                    <div id="message" className={showMessage ? '' : 'd-none'}>
                                                        <div id='div6' className="row justify-content-center">
                                                            <div className="col-md-5">
                                                                <img
                                                                    src="assets/images/emptydata.jpg"
                                                                    alt=""
                                                                    height="300"
                                                                    width="300"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                )}

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
        </div>
    );
};

export default Home;
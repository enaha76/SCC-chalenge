import React from 'react';
import LeftSidebar from '../components/LeftSidebar';
import Footer from '../components/Footer';
import Topbar from '../components/Topbar';
import BigModal from '../components/BigModal';
import Modaltest from '../components/modaltest';
import TableComponent from '../components/TableComponent';
import Select from 'react-select';


function Home() {


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
                                            <ol className="breadcrumb m-0">

                                            </ol>
                                        </div>
                                        <h1 className="page-title mb-3 text-uppercase fw-normal fs-4"> Home <i className="fas fa-home m-2 fs-3 text-primary"></i>
                                        </h1>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-xl-6 col-md-6  d-flex">

                                    <div>

                                     

                                    </div>
                                    <div >

                                       

                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <div className="card">
                                        <div className="card-body">

                                            <div style={{ display: 'flex' }}>
                                                <div style={{ flexGrow: 1 }}>
                                                    <h5 style={{ fontFamily: 'Arial', fontSize: '16px', fontWeight: 'bold' }}>Filter type</h5>


                                                    <select
                                                        className="form-control select2"
                                                        data-toggle="select2"
                                                        value={filterValue}
                                                        onChange={handleFilterChange}
                                                        style={{ width: '90px' }}
                                                    >
                                                        <option value="All">All</option>
                                                        <option value="client">Client</option>
                                                        <option value="admin">Admin</option>
                                                    </select>
                                                </div>
                                                <div style={{ flexGrow: 1 }}>
                                                    <h5 style={{ fontFamily: 'Arial', fontSize: '16px', fontWeight: 'bold' }}>Filter Endpoints</h5>
                                                   
                                                </div>
                                                <div>

                                                 

                                                </div>
                                            </div>

                                            <div style={{ clear: 'both' }}></div>

                                            <div>

                                            </div>
                                           

                                            {/* <h1>home</h1> */}

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="card">
                                    <div className="card-body">
                                  
                                        <div id='m' style={{ display: 'none' }}>
                                            {/* type="button" class="btn btn-info" */}
                                            <button id='download' type="button" className='float-end btn btn-info' data-bs-toggle="modal" data-bs-target="#full-width-modal" style={{ display: 'none' }}>Raport <i className='uil-file-info-alt'></i></button>
                                            <table className="table">
                                                <thead>
                                                    <tr>
                                                        <th>#</th>
                                                        <th>Name</th>
                                                        <th>Work</th>
                                                        <th>Test</th>
                                                        <th>Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody id='tbodytest2'>
                                                </tbody>
                                            </table>

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
}

export default Home;

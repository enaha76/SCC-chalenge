import React from 'react';
import { Link } from 'react-router-dom';

const EvaluationSidebar = () => {
    // Add your code here

    return (
        <div>
        <div className="leftside-menu leftside-menu-detached">
   <div className="leftbar-user">
     <Link to="/">
     {/* <img src="assets/images/users/mauripay.png" alt="" height="35" /> */}
       <img src="assets/images/users/mauripay.png" alt="User Avatar" height="42" className="rounded-circle shadow-sm" />
       <span className="leftbar-user-name">Mauripay</span>
     </Link>
   </div>

   {/* Sidemenu */}
   <ul className="side-nav">
     <li className="side-nav-title side-nav-item">Navigation</li>
     <li className="side-nav-item">
       <Link to="/" className="side-nav-link">
       <i className="uil-home-alt"></i>
         <span> home </span>
       </Link>
     </li>
     <li className="side-nav-title side-nav-item">User</li>
     <li className="side-nav-item">
       <Link to="/eva" className="side-nav-link">
         <i className="uil-user-check"></i>
         <span> Evalation </span>
       </Link>
     </li>
    
      

   </ul>

   {/* End Sidebar */}
   <div className="clearfix"></div>
   {/* Sidebar -left */}
 </div>
   </div>
    );
};

export default EvaluationSidebar;
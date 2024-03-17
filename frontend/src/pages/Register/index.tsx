// login.tsx

import React, { useState , SyntheticEvent } from 'react';
import '../../style.sass';
import '../../graindashboard/css/graindashboard.css';
import axios from 'axios';
const Register: React.FC = () => {
    const [submitting, setSubmitting] = useState(false);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handerChange = async (e: SyntheticEvent) => {
    e.preventDefault();
     setSubmitting(true);
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const username = formData.get("username") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const level = formData.get("level") as string;
    const speciality = formData.get("speciality") as string;
    const role = formData.get("role") as string;
    try {
      const res = await axios.post("http://127.0.0.1:5000/users/", {
      username,  
      email,
        password,
        level,
        speciality,
        role
      });
      
      if (res.status === 200 && res.data.success) {
        console.log(res.data);
        console.log(email , password)
        localStorage.setItem("isLoggedIn", "true");
        
        
      }
    } catch (error) {
      setErrorMessage("Login failed. Please check your credentials.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
    <main className="main">

<div className="content">

      <div className="container-fluid pb-5">

          <div className="row justify-content-md-center">
              <div className="card-wrapper col-12 col-md-4 mt-5">
                  <div className="brand text-center mb-3">
                      <img src="/logo.png" />
                  </div>
                  <div className="card">
                      <div className="card-body">
                          <h4 className="card-title">Create new account</h4>
                          {errorMessage && (
                                   <div className="alert alert-danger">{errorMessage}</div>
                                )}
                          <form onSubmit={handerChange}>
      
                              <div className="form-group">
                                  <label >Name</label>
                                  <input type="text" className="form-control" id="name" name="username" disabled={submitting} />
                              </div>

                              <div className="form-group">
                                  <label >E-Mail Address</label>
                                  <input id="email" type="email" className="form-control" name="email" disabled={submitting} />
                              </div>
                              <div className="form-group">
                                  <label >Password</label>
                                  <input id="password" type="password" className="form-control" name="password" disabled={submitting} />
                              </div>

                              <div className="form-row">
                                  <div className="form-group col-md-6">
                                      <label >Level
                                      </label>
                                      <input id="level" type="text" className="form-control" name="level" disabled={submitting} />
                                  </div>
                                  <div className="form-group col-md-6">
                                      <label >Speciality
                                      </label>
                                      <input id="speciality" type="text" className="form-control" name="speciality" disabled={submitting}/>
                                  </div>
                              </div>
                              <div className="form-group">
                                  <label >Role</label>
                                  <input id="role" type="text" className="form-control" name="role" disabled={submitting} />
                              </div>

                              <div className="form-group no-margin">
                                  <button type='submit' className="btn btn-primary btn-block">
                                      Sign Up
                                  </button>
                              </div>
                              <div className="text-center mt-3 small">
                                  Already have an account? <a href="login.html">Sign In</a>
                              </div>
                          </form>
                      </div>
                  </div>
                  <footer className="footer mt-3">
                      <div className="container-fluid">
                          <div className="footer-content text-center small">
                              <span className="text-muted">&copy; 2019 Graindashboard. All Rights Reserved.</span>
                          </div>
                      </div>
                  </footer>
              </div>
          </div>



      </div>

</div>
</main>

    </>
  );
};

export default Register;

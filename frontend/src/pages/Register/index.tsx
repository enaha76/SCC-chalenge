// login.tsx

import React, { useState } from 'react';
import '../../style.sass';
import '../../graindashboard/css/graindashboard.css';
const Register: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    try {
      console.log('Connexion avec :', { username, password });
      
      setUsername('');
      setPassword('');
      setError('');
    } catch (error) {
      setError('Erreur de connexion, veuillez réessayer.');
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
                          <form>
      
                              <div className="form-group">
                                  <label >Name</label>
                                  <input type="text" className="form-control" id="name" name="name" />
                              </div>

                              <div className="form-group">
                                  <label >E-Mail Address</label>
                                  <input id="email" type="email" className="form-control" name="email" />
                              </div>

                              <div className="form-row">
                                  <div className="form-group col-md-6">
                                      <label >Password
                                      </label>
                                      <input id="password" type="password" className="form-control" name="password" />
                                  </div>
                                  <div className="form-group col-md-6">
                                      <label >Confirm Password
                                      </label>
                                      <input id="password-confirm" type="password2" className="form-control" name="password_confirmation" />
                                  </div>
                              </div>


                              <div className="form-group no-margin">
                                  <a href="/index.html" className="btn btn-primary btn-block">
                                      Sign Up
                                  </a>
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

// login.tsx

import React, { useState,SyntheticEvent } from 'react';
import '../../style.sass';
import '../../graindashboard/css/graindashboard.css';
import axios from 'axios';
const Login: React.FC = () => {
  const [submitting, setSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);


  const handerChange = async (e: SyntheticEvent) => {
    e.preventDefault();
     setSubmitting(true);
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    try {
      const res = await axios.post("http://127.0.0.1:8000/users/login/", {
        email,
        password,
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
						        <img src="/logo.png" alt="Logo" />
						</div>
						<div className="card">
							<div className="card-body">
								<h4 className="card-title">Login</h4>
								{errorMessage && (
                                   <div className="alert alert-danger">{errorMessage}</div>
                                )}

								<form onSubmit={handerChange}>
									<div className="form-group">
										<label >E-Mail Address</label>
										<input id="email" type="email" className="form-control" name="email"  disabled={submitting}/>
									</div>

									<div className="form-group">
										<label >Password
										</label>
										<input id="password" type="password" className="form-control" name="password" disabled={submitting} />
										<div className="text-right">
											<a href="password-reset.html" className="small">
												Forgot Your Password?
											</a>
										</div>
									</div>

									<div className="form-group">
										<div className="form-check position-relative mb-2">
										  <input type="checkbox" className="form-check-input d-none" id="remember" name="remember" />
										  <label className="checkbox checkbox-xxs form-check-label ml-1" 
												 data-icon="&#xe936">Remember Me</label>
										</div>
									</div>

									<div className="form-group no-margin">
										<button type='submit' disabled={submitting}
										className="btn btn-primary btn-block">
											Sign In
										</button>
									</div>
									<div className="text-center mt-3 small">
										Don't have an account? <a href="register.html">Sign Up</a>
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

export default Login;

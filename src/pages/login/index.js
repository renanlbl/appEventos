import React from 'react';
import './login.css';

function Login() {
    return (
      <div className="login-content d-flex align-items-center">
        <form className="form-signin mx-auto form-person">
          <div className="text-center mb-4">
              <img className="mb-4" src="/docs/4.4/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72" />
              <h1 className="h3 mb-3 font-weight-normal text-white">Login</h1>
          </div>

          <div className="form-label-group">
              <input type="email" id="inputEmail" className="form-control" placeholder="Email" />
              <label className="text-white" for="inputEmail">Email</label>
          </div>

          <div className="form-label-group">
              <input type="password" id="inputPassword" className="form-control" placeholder="Password" />
              <label className="text-white" for="inputPassword">Password</label>
          </div>

          
          <button className="btn btn-lg btn-warning btn-block" type="submit">Sign in</button>
          <div className="d-flex justify-content-around">
            <a href="#" className="text-white text-center">Cadastrar</a>
            <a href="#" className="text-white text-center">Recuperar senha</a>
          </div>
          <p className="mt-5 mb-3 text-white text-center">&copy; 2020</p>
        </form>
      </div>
    )
}

export default Login;
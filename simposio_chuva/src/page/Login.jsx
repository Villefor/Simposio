import React from 'react';
import { Link } from 'react-router-dom';
import logoSla from '../img/logo.svg';
import './stylePages/Login.css';

function Login() {
  return (
    <section className="login-container">
      <h2 className="title">13° Simpósio Latino Americano de Ciência de Alimentos</h2>
      <figure id="logoFigure">
        <img className="logoImg" src={logoSla} alt="logo do evento" />
      </figure>
      <div className="buttons">
        <p className="login-text">Login</p>
        <input
          name="email"
          type="email"
          placeholder="Email"
          autoComplete="none"
          className="input-login"
        />
        <br />
        <input
          name="password"
          type="password"
          minLength="6"
          placeholder="Senha"
          className="input-login"
        />
        <Link className="link-home linkBtn" to="/home">
          <button
            type="button"
          >
            Entrar
          </button>
        </Link>
      </div>
    </section>
  );
}

export default Login;

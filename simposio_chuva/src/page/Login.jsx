import React from 'react';
import { Link } from 'react-router-dom';
import logoSla from '../img/logo.svg';
import './stylePages/Login.css';

function Login() {
  const [emailInput, setEmailInput] = React.useState('');
  const [passwordInput, setPasswordInput] = React.useState('');

  const checkEmail = () => (/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/.test(emailInput));
  const minLength = 6;
  const checkPass = () => passwordInput.length > minLength;

  const handleClick = () => {
    const user = { email: emailInput };
    localStorage.setItem('user', JSON.stringify(user));
  };

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
          value={emailInput}
          autoComplete="none"
          onChange={(e) => setEmailInput(e.target.value)}
          className="input-login"
        />
        <br />
        <input
          name="password"
          type="password"
          minLength="6"
          placeholder="Senha"
          onChange={(e) => setPasswordInput(e.target.value)}
          className="input-login"
        />
        <Link className="link-home linkBtn" to="/home">
          <button
            type="button"
            disabled={!(checkEmail() && checkPass())}
            onClick={handleClick}
            className={`entrar-btn ${!(checkEmail() && checkPass())
              ? 'disable' : 'enable'}`}
          >
            Entrar
          </button>
        </Link>
      </div>
    </section>
  );
}

export default Login;

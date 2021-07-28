import React from 'react';
import { Link } from 'react-router-dom';
import not from '../img/notFound.jpg';
import './stylePages/notFound.css';

function notFound() {
  return (
    <section id="notFoundSec">
      <img id="notFoundImg" src={not} alt="not Found" />
      <section id="msgAndBtn">
        <p id="comingSoon">Contéudo em possível produção!</p>
        <Link to="/home">
          <button id="backBtn" type="button">Voltar para página inicial</button>
        </Link>
      </section>
    </section>
  );
}

export default notFound;

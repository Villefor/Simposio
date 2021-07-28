import React from 'react';
import VideoMock from '../img/VideoMock.png';
import './styleComp/Main.css';

function MainContent() {
  return (
    <section id="mainSection">
      <main id="mainCont">
        <p id="contentTitle">
          Análise sensorial de preparações funcionais desenvolvidas para escolares
          {' '}
          <br />
          entre 09 e 15 anos, do município de Campinas/SP
        </p>
        <figure id="videoMock">
          <img src={VideoMock} alt="Video mock" />
        </figure>
      </main>
      <>
        <nav className="navBtn
      "
        >
          <button type="button" id="download"> </button>

          <button type="button" id="favorite"> </button>

          <button type="button" id="doi"> </button>
        </nav>

        <p id="cite">COMO CITAR ESSE TRABALHO ?</p>

        <aside id="detailsAside">
          <p id="details">Detalhes</p>
          <span>
            Tipo de Apresentação:
            {' '}
            <bold>Pôster</bold>
          </span>
          <span>
            Eixo Temático:
            {' '}
            <bold>Alimentação e saúde (AS)</bold>
          </span>
          <span>
            Palavras-Chaves:
            {' '}
            <bold>Alimentos funcionais, alimentação escolar</bold>
          </span>
          <p>
            <bold>Autores:</bold>
            {' '}
            Galileo Galilei
            {' '}
            <br />
          </p>
        </aside>
      </>
    </section>
  );
}

export default MainContent;

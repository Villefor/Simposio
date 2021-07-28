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
          <img id="videoMockPhoto" src={VideoMock} alt="Video mock" />
        </figure>
      </main>
      <>
        <nav className="navBtn">
          <button type="button" id="download"> </button>

          <button type="button" id="favorite"> </button>

          <button type="button" id="doi"> </button>
        </nav>

        <p id="cite">COMO CITAR ESSE TRABALHO ?</p>

        <aside id="detailsAside">
          <p id="details">Detalhes</p>
          <span className="detailsParagraph">
            Tipo de Apresentação:
            {' '}
            <span className="bold">Pôster</span>
            <br />
          </span>
          <span className="detailsParagraph">
            Eixo Temático:
            {' '}
            <span className="bold">Alimentação e saúde (AS)</span>
            <br />
          </span>
          <span className="detailsParagraph">
            Palavras-Chaves:
            {' '}
            <span className="bold">Alimentos funcionais, alimentação escolar</span>
            <br />
          </span>
          <p className="detailsParagraph">
            <span className="bold">Autores:</span>
            <br />
            {' '}
            Galileo Galilei¹
            {' '}
            <br />
            {' '}
            Berta Lange de Morretes²
            {' '}
            <br />
            {' '}
            Isaac Newton³
            {' '}
            <br />
            {' '}
            Cesar Lattes¹
            {' '}
            <br />
            {' '}
            Stephen Hawking⁴
            {' '}
            <br />
          </p>
          <p className="detailsParagraph">
            {' '}
            ¹Universidade Estadual de Campinas
            {' '}
            <br />
            {' '}
            ²Universidade de São Paulo
            {' '}
            <br />
            {' '}
            ³Instituto Nacional de Pesquisas Espaciais
            {' '}
            <br />
            {' '}
            ⁴Universidade Federal do Rio de Janeiro
            {' '}
            <br />
          </p>
        </aside>
      </>
    </section>
  );
}
export default MainContent;

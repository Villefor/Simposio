import React from 'react';
import VideoMock from '../img/VideoMock.png';
import './styleComp/Main.css';

function MainContent() {
  return (
    <section>
      <main id="mainCont">
        <span id="contentTitle">
          Análise sensorial de preparações funcionais desenvolvidas para escolares
          entre 09 e 15 anos, do município de Campinas/SP
        </span>
        <figure id="videoMock">
          <img src={VideoMock} alt="Video mock" />
        </figure>
      </main>
      <>
        <nav className="navBtn
      "
        >
          <button
            type="button"
          >
            Download
          </button>
          <button
            type="button"
          >
            Favorite
          </button>
          <button
            type="button"
          >
            doi
          </button>
        </nav>
      </>
    </section>
  );
}

export default MainContent;

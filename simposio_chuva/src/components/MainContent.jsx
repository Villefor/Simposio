import React from 'react';
import VideoMock from '../img/VideoMock.png';
import './styleComp/Main.css';

function MainContent() {
  return (
    <main>
      <h3 id="contentTitle">
        Análise sensorial de preparações funcionais desenvolvidas para escolares
        entre 09 e 15 anos, do município de Campinas/SP
      </h3>
      <figure id="videoMock">
        <img src={VideoMock} alt="Video mock" />
      </figure>

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
    </main>
  );
}

export default MainContent;

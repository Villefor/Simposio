import React from 'react';
import icon1 from '../img/icone1.svg';
import icon2 from '../img/icone2.svg';
import icon3 from '../img/icone3.svg';
import card from '../img/card.svg';
import galoa from '../img/footer.svg';
import './styleComp/Resume.css';

function Resume() {
  const [comments, setComment] = React.useState([]);
  const [showComments, setShowComments] = React.useState(true);
  const [about, setAbout] = React.useState([]);
  const [subject, setSubject] = React.useState([]);
  const [click, setClick] = React.useState([]);
  const [initialRender, setInitialRender] = React.useState(true);
  const [sendFeedback, setSendFeedback] = React.useState(true);

  console.log(showComments);

  const handleAbout = (event) => {
    setAbout(event.target.value);
  };

  const handleTextArea = (event) => {
    setComment([event.target.value]);
  };

  const handleClick = () => {
    setClick([...click, comments]);
    setSubject([...subject, about]);
    setSendFeedback(!sendFeedback);
  };

  const showCom = () => {
    setShowComments(true);
    setInitialRender(false);
    setSendFeedback(!sendFeedback);
  };

  const createTopic = () => {
    setInitialRender(true);
  };

  const verifyInput = () => {
    if (about !== '' && comments !== '') {
      return false;
    }
    return true;
  };

  const handleSee = () => {
    const more = document.getElementById('showMor');
    const less = document.getElementById('showLess');
    const showBtn = document.getElementById('showBtn');
    const resume = document.getElementById('loremResume');
    if (more.style.display === 'none') {
      more.style.display = 'inline';
      less.style.display = 'none';
      resume.style.height = '69px';
      showBtn.innerHTML = 'Ver mais';
    } else {
      more.style.display = 'none';
      less.style.display = 'inline';
      resume.style.height = '200px';
      showBtn.innerHTML = 'Ver menos';
    }
  };

  return (
    <section id="commentBox">
      <section className="resumeSection">
        <p id="resum">Resumo</p>
        <p id="loremResume">
          Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Phasellus vitae turpis auctor, mollis felis ut,
          commodo turpis. Phasellus felis mauris, egestas eget cursus et,
          iaculis quis lacus. Fusce auctor eros sed magna ultricies gravida.
          Etiam aliquam dictum nisl, vel aliquet enim accumsan sit amet.
          Donec finibus nisi tellus, ut viverra lorem vestibulum ut.
          <span id="showMor">...</span>
          {' '}
          <span id="showLess">
            <br />
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Phasellus vitae turpis auctor, mollis felis ut,
            commodo turpis. Phasellus felis mauris, egestas eget cursus et,
            iaculis quis lacus. Fusce auctor eros sed magna ultricies gravida.
            Etiam aliquam dictum nisl, vel aliquet enim accumsan sit amet.
            <br />
            Donec finibus nisi tellus, ut viverra lorem vestibulum ut
            Phasellus felis mauris, egestas eget cursus et,
            iaculis quis lacus. Fusce auctor eros sed magna ultricies gravida.
            Etiam aliquam dictum nisl, vel aliquet enim accumsan sit amet.
            Donec finibus nisi tellus, ut viverra lorem vestibulum ut
          </span>
          <button id="showBtn" type="button" onClick={handleSee}>Ver mais</button>

        </p>
      </section>
      <span className="discussion">
        Discuss??es
      </span>
      {initialRender
        ? (
          <>
            <span id="shareIdea">Compartilhe suas ideias ou d??vidas com os autores!</span>
            <figure className="icons">
              <img src={icon1} alt="icon" />
              <img src={icon2} alt="icon" />
              <img src={icon3} alt="icon" />
            </figure>
            <span id="culture">
              Sabia que o maior est??mulo no desenvolvimento cient??fico e cultural
              ?? a curiosidade? Deixe seus questionamentos ou sugest??es para o autor!

            </span>
            <input className="iconTopic" type="button" onClick={showCom} />
          </>
        ) : (
          <div id="commentArea">
            {!sendFeedback

              ? (
                <>
                  <p id="suggestion">Tem uma d??vida ou sugest??o ? Compartilhe seu feedback com os autores!</p>
                  <span id="aboutBefore">Assunto</span>
                  <input id="about" type="text" placeholder="Defina um t??pico sucinto para notificar os autores..." onChange={handleAbout} />
                  <span id="aboutContent">Conte??do</span>
                  <textarea id="commentContainer" type="text" onChange={handleTextArea} />
                  <button id="sendBtn" type="button" onClick={handleClick} disabled={verifyInput()}>Enviar</button>
                </>
              )
              : (
                <>
                  <p id="firstTopic">Seu t??pico foi enviado com sucesso! :D</p>
                  <p id="secondTopic">
                    Agradecemos por sua contribui????o, uma notifica????o ser??
                    enviado ao seu email assim que seu t??pico for respondido
                  </p>
                  <span id="findOut">Descubra outros trabalhos!</span>
                  <button id="newTopic" onClick={createTopic} type="button"> </button>
                </>
              )}
          </div>
        )}
      {click.map((comment, index) => (
        <section id="userComment">
          <br />
          <span id="postAbout">{subject[index]}</span>
          <br />
          <span id="user">Adm_Chuva@galoamail.com</span>
          <br />
          <span className="aboutComment">Coment??rio</span>
          <p id="postComment">{comment}</p>
          <img id="cardLogo" src={card} alt="likes and answers" />
        </section>
      ))}
      <footer id="footer">
        <img id="footLogo" src={galoa} alt="Galo?? logo" />
      </footer>
    </section>
  );
}

export default Resume;

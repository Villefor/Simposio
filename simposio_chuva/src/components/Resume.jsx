import React from 'react';
import icon1 from '../img/icone1.svg';
import icon2 from '../img/icone2.svg';
import icon3 from '../img/icone3.svg';
import './styleComp/Resume.css';

function Resume() {
  const [email, setEmail] = React.useState();
  const [comments, setComment] = React.useState([]);
  const [showComments, setShowComments] = React.useState(false);
  // const [seeMore, setSeeMore] = React.useState(false);
  const [click, setClick] = React.useState([]);

  React.useEffect(() => {
    const emailStore = localStorage.getItem('user');
    setEmail(emailStore.split('"')[3]);
  }, []);

  const handleChange = (event) => {
    setComment([event.target.value]);
  };

  const handleClick = () => {
    setClick([...click, comments]);
  };

  const showCom = () => {
    setShowComments(true);
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
          <button id="showBtn" type="button" onClick={handleSee}>  </button>

        </p>
      </section>
      <span id="discussion">
        Discussões
      </span>
      <span id="shareIdea">Compartilhe suas ideias ou dúvidas com os autores!</span>
      <figure className="icons">
        <img src={icon1} alt="icon" />
        <img src={icon2} alt="icon" />
        <img src={icon3} alt="icon" />
      </figure>
      <span id="culture">
        Sabia que o maior estímulo no desenvolvimento científico e cultural
        é a curiosidade? Deixe seus questionamentos ou sugestões para o autor!

      </span>
      <input className="iconTopic" type="button" onClick={showCom} />
      {showComments

        ? (
          <div>
            <span>Assunto</span>
            <input id="commentEmail" type="text" placeholder={email} />
            <span>Conteúdo</span>
            <textarea id="commentContainer" type="text" onChange={handleChange} />
            <button type="button" onClick={handleClick}>Enviar</button>

            {click.map((comment) => (
              <section id="userComment">
                <p>Tem uma dúvida ou sugestão ? Compartilhe seu feedback com os autores!</p>
                <span>{email}</span>
                <p>{comment}</p>
              </section>
            ))}
          </div>
        ) : <h1>seu tópico foi enviado para a casa do bruno</h1>}

    </section>
  );
}

export default Resume;

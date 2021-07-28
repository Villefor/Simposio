import React from 'react';
import icon1 from '../img/icone1.svg';
import icon2 from '../img/icone2.svg';
import icon3 from '../img/icone3.svg';
import './styleComp/Resume.css';

function Resume() {
  const [email, setEmail] = React.useState();
  const [comments, setComment] = React.useState([]);
  const [showComments, setShowComments] = React.useState(false);
  const [seeMore, setSeeMore] = React.useState(false);
  const [click, setClick] = React.useState([]);
  const [disable, setDisable] = React.useState(false);

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
    setSeeMore(!seeMore);
    setDisable(true);
  };

  return (
    <section id="commentBox">
      <section>
        <span id="resum">Resumo</span>
        <p id="loremResume">
          Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Phasellus vitae turpis auctor, mollis felis ut,
          commodo turpis. Phasellus felis mauris, egestas eget cursus et,
          iaculis quis lacus. Fusce auctor eros sed magna ultricies gravida.
          Etiam aliquam dictum nisl, vel aliquet enim accumsan sit amet.
          Donec finibus nisi tellus, ut viverra lorem vestibulum ut...
          <input disable={disable} type="button" onClick={handleSee} value="Ver Mais" />
          {seeMore && (
          <span id="seeMore">
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Phasellus vitae turpis auctor, mollis felis ut,
            commodo turpis. Phasellus felis mauris, egestas eget cursus et,
            iaculis quis lacus. Fusce auctor eros sed magna ultricies gravida.
            Etiam aliquam dictum nisl, vel aliquet enim accumsan sit amet.
            Donec finibus nisi tellus, ut viverra lorem vestibulum ut...
          </span>
          )}
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

import React from 'react';
import './styleComp/Resume.css';

function Resume() {
  const [email, setEmail] = React.useState();
  const [comments, setComment] = React.useState('');

  React.useEffect(() => {
    const emailStore = localStorage.getItem('user');
    setEmail(emailStore.split('"')[3]);
  }, []);

  const creatingComment = () => {
    comments.map((comment) => (
      <section>
        <span>{email}</span>
        <p>{comment}</p>
      </section>
    ));
  };

  return (
    <section id="commentBox">
      <span>
        Sugestões ?
      </span>

      <div>
        <input id="commentEmail" type="text" placeholder={email} />
        <textarea id="commentContainer" type="text" onChange={(e) => setComment(e.target.value)} />
        <button type="button" onClick={creatingComment}>Adicionar Comentário</button>
      </div>
    </section>
  );
}

export default Resume;

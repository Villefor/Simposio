import React from 'react';
import { useHistory } from 'react-router-dom';
import MainContent from '../components/MainContent';
import './stylePages/Home.css';
// import { ChuvaContext } from '../context/Provider';

function Home() {
  const [email, setEmail] = React.useState();
  const history = useHistory();

  React.useEffect(() => {
    const emailStore = localStorage.getItem('user');
    setEmail(emailStore.split('"')[3]);
  }, []);

  const logoutFunc = () => {
    localStorage.clear();
    history.push('/');
  };

  return (
    <section>
      <header className="header">
        <h4 id="miniTitle">Anais do Simpósio Latino Americano de Ciência de Alimentos</h4>
        <h1 id="pageTitle">Anais do 13° Simpósio Latino Americano de Ciência de Alimentos</h1>
        <h6>ISSN: 1234-5678</h6>

        {/* <label htmlFor="language">Escolha o Idioma:</label> */}
        <select name="language" id="language">
          <option value="Português" selected>PT,BR</option>
          <option value="Inglês">En</option>
          <option value="Francês">Fr</option>
          <option value="Espanhol">Sp</option>
        </select>

        <p>
          Bem vindo,
          {' '}
          { email }
        </p>

        <figure>
          <img src="" alt="Profile" />
        </figure>

        <button
          type="button"
          onClick={logoutFunc}
        >
          Sair
        </button>
      </header>
      <MainContent />
    </section>
  );
}
export default Home;

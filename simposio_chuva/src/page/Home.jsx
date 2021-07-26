import React from 'react';
import { useHistory } from 'react-router-dom';
import MainContent from '../components/MainContent';
import './stylePages/Home.css';
import logo from '../img/Logo.png';
import profile from '../img/profile.jpeg';
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
          <option value="Inglês">EN</option>
          <option value="Francês">FR</option>
          <option value="Espanhol">SP</option>
        </select>

        <div id="welcome">
          <p>
            Bem vindo,
            {' '}
            <br />
            { email }
          </p>

          <figure>
            <img src={profile} alt="Profile" id="profilePhoto" />
          </figure>
        </div>

        <button
          id="leaveBtn"
          type="button"
          onClick={logoutFunc}
        >
          Sair
        </button>
      </header>

      <aside id="aside">
        <h1 id="asideTitle">SLACA2019</h1>
        <figure>
          <img src={logo} alt="Logo" id="slacaLogo" />
        </figure>
        <div>
          <button type="button" className="asideBtn">Apresentação</button>
          <button type="button" className="asideBtn">Comitês</button>
          <button type="button" className="asideBtn">Autores</button>
          <button type="button" className="asideBtn">Eixos temáticos</button>
          <button type="button" className="asideBtn">Trabalhos</button>
          <button type="button" className="asideBtn">Contato</button>
        </div>
      </aside>

      <MainContent />
    </section>
  );
}
export default Home;

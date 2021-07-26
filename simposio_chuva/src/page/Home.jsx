import React from 'react';
import { useHistory } from 'react-router-dom';
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
      <header>
        <h4>Anais do Simpósio Latino Americano de Ciência de Alimentos</h4>
        <h1>Anais do 13° Simpósio Latino Americano de Ciência de Alimentos</h1>

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
          data-testid="profile-logout-btn"
          onClick={logoutFunc}
        >
          Sair
        </button>
      </header>
    </section>
  );
}
export default Home;

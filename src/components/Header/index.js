import React from 'react';
import { Link } from 'react-router-dom';

import logo from '~/assets/ibn_b.svg';

import { Start, Finish } from './styles';

export default function Header() {
  return (
    <>
      <Start>
        <p>Rua José Liberato, 157 - Miramar, João Pessoa - PB, 58043-100</p>
      </Start>
      <Finish>
        <img src={logo} height="90%" alt="IBN" />
        <nav>
          <Link to="/">SOBRE</Link>
          <Link to="/">IGREJA</Link>
          <Link to="/">REDES</Link>
          <Link to="/">ENSINO</Link>
          <Link to="/">MÍDIA</Link>
          <Link to="/">EVENTOS</Link>
          <Link to="/">NOTÍCIAS</Link>
          <Link to="/">CONTATO</Link>
        </nav>
        <div>
          <button type="button">
            <p>ENVOLVA-SE</p>
            {/* <MdSearch size={30} color="#00516f" /> */}
          </button>
        </div>
      </Finish>
    </>
  );
}

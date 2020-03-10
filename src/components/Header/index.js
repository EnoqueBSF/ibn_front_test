import React from 'react';
import { MdSearch } from 'react-icons/md';
import { Link } from 'react-router-dom';

import logo from '~/assets/logob.png';

import { Container, Start, Finish } from './styles';

export default function Header() {
  return (
    <Container>
      <Start>
        <Link to="/">SOBRE</Link>
        <Link to="/">IGREJA</Link>
        <Link to="/">REDES</Link>
        <Link to="/">ENSINO</Link>
        <Link to="/">MÍDIA</Link>
        <Link to="/">EVENTOS</Link>
        <Link to="/">NOTÍCIAS</Link>
        <Link to="/">CONTATO</Link>
      </Start>
      <Finish>
        <img src={logo} width="60px" alt="IBN" />
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
          <input placeholder="Buscar..." />
          <button type="button">
            <MdSearch size={30} color="#00516f" />
          </button>
        </div>
      </Finish>
    </Container>
  );
}

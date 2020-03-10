import React from 'react';
import { Link } from 'react-router-dom';

import { MdLocalPostOffice, MdSearch } from 'react-icons/md';

import logo from '~/assets/logobr.png';

import { Container, Box, BoxImage, Card, Carta, Email } from './styles';

export default function Footer() {
  return (
    <div>
      <Card>
        <Carta>
          <MdLocalPostOffice size={40} color="#FFF" />
          <div>
            <h1>Receba nossas novidades</h1>
            <p>Mantenha-se atualizado com nosso conteúdo</p>
          </div>
        </Carta>
        <Email>
          <input placeholder="Seu email..." />
          <button type="button">
            <MdSearch size={30} color="#00516f" />
          </button>
        </Email>
      </Card>

      <Container>
        <BoxImage>
          <img src={logo} alt="IBN" width="50%" height="50%" />
        </BoxImage>
        <Box>
          <p>IGREJA</p>
          <Link to="/">Fundação</Link>
          <Link to="/">História</Link>
          <Link to="/">Ministérios</Link>
          <Link to="/">Camps</Link>
        </Box>
        <Box>
          <p>IGREJA</p>
          <Link to="/">Fundação</Link>
          <Link to="/">História</Link>
          <Link to="/">Ministérios</Link>
          <Link to="/">Camps</Link>
        </Box>
        <Box>
          <p>IGREJA</p>
          <Link to="/">Fundação</Link>
          <Link to="/">História</Link>
          <Link to="/">Ministérios</Link>
          <Link to="/">Camps</Link>
        </Box>
        <Box>
          <p>IGREJA</p>
          <Link to="/">Fundação</Link>
          <Link to="/">História</Link>
          <Link to="/">Ministérios</Link>
          <Link to="/">Camps</Link>
        </Box>
      </Container>
    </div>
  );
}

import React, { useState, useEffect } from 'react';

import api from '~/services/api';

import { Container, Header, Footer, List, Title, Time } from './styles';

function NewsList() {
  const [tidings, setTidings] = useState([]);

  useEffect(() => {
    async function loadTidings() {
      const response = await api.get('news');

      setTidings(response.data);
    }

    loadTidings();
  }, []);

  return (
    <Container>
      <Header>
        <p>IBN NOTÍCIAS</p>
      </Header>
      <List>
        {tidings.map(tiding => (
          <li key={tiding.id}>
            <img src={tiding.img} alt={tiding.title} />
            <Title>{tiding.title}</Title>
            <Time>10 DE DEZEMBRO ÀS 9:50</Time>
          </li>
        ))}
      </List>
      <Footer />
    </Container>
  );
}

export default NewsList;

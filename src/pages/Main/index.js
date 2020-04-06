import React from 'react';
import { Link } from 'react-router-dom';

import NewsList from '~/components/NewsList';
import SchedulesList from '~/components/SchedulesList';

import capa from '~/assets/capa.svg';
import ibntv from '~/assets/ibntv.svg';

import { Container, IbnTV } from './styles';

export default function Main() {
  return (
    <Container>
      <img src={capa} alt="Painel" width="100%" />
      <IbnTV>
        <img src={ibntv} height="100%" alt="IBNTV" />
        <p>DOMINGOS 7h | 09:30h | 15h | 17h | 19:30h</p>
        <Link to="/">ASSISTIR TRANSMISSÃO</Link>
      </IbnTV>
      <NewsList />
      <SchedulesList />
    </Container>
  );
}

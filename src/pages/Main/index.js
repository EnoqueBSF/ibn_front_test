import React from 'react';

import NewsList from '~/components/NewsList';
import SchedulesList from '~/components/SchedulesList';

import { Container } from './styles';

export default function Main() {
  return (
    <Container>
      <img
        src="https://estiloadoracao.com/wp-content/uploads/2019/04/Orar-no-Esp%C3%ADrito.jpg"
        alt="Painel"
        width="100%"
        height="675px"
      />
      <NewsList />
      <SchedulesList />
    </Container>
  );
}

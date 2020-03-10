import React, { useState, useEffect } from 'react';

import { MdToday } from 'react-icons/md';

import api from '~/services/api';

import {
  Container,
  Body,
  Header,
  Footer,
  Bottom,
  List,
  Top,
  Box1,
  Box2,
} from './styles';

export default function SchedulesList() {
  const [schedules, setSchedules] = useState([]);

  useEffect(() => {
    async function loadSchedules() {
      const response = await api.get('schedules');

      setSchedules(response.data);
    }

    loadSchedules();
  }, []);

  return (
    <Container>
      <Header>
        <p>AGENDA</p>
      </Header>
      <Body>
        <MdToday size={40} color="#FFF" />
        <List>
          {schedules.map(schedule => (
            <li key={schedule.id}>
              <Top>
                <Box1>{schedule.day}</Box1>
                <Box2>
                  <p>{schedule.event}</p>
                </Box2>
              </Top>
              <Bottom>{schedule.month}</Bottom>
            </li>
          ))}
        </List>
      </Body>
      <Footer />
    </Container>
  );
}

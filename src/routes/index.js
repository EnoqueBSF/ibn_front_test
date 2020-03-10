import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Main from '~/pages/Main';
import News from '~/pages/News';
import Dashboard from '~/pages/Dashboard';

import notFound from '~/pages/notFound';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/news" exact component={News} />

      <Route path="/dashboard" exact component={Dashboard} isPrivate />

      <Route path="/" component={notFound} />
    </Switch>
  );
}

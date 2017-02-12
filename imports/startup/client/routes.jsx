import React from 'react';
import { render } from  'react-dom';
import { Router, Route, browserHistory } from 'react-router';

import { Dashboard } from '../../ui/components/beers/dashboard.jsx';
import { WantBeer } from '../../ui/components/beers/beertest.jsx';

Meteor.startup( () => {
  render(
    <Router history={browserHistory}>
      <Route path="/" component={Dashboard}/>
    </Router>,
    document.getElementById('render-target')
  )
  render(
    <Router history={browserHistory}>
      <Route path="/" component={WantBeer}/>
    </Router>,
    document.getElementById('render-beermessage')
  )
});

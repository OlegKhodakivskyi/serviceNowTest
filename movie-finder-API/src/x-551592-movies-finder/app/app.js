import { createCustomElement } from '@servicenow/ui-core';
import snabbdom from '@servicenow/ui-renderer-snabbdom';
import '@servicenow/now-dropdown';
import '../card-items/card';
import '../pagination/pagination';
import appActions from './appActions';
import view from './view';
import styles from './app.scss';

createCustomElement('x-551592-movies-finder', {
  renderer: { type: snabbdom },
  view,
  initialState: {
    movies: [],
    sortBy: 'revenue.desc',
    activePage: 1,
    totalPages: [],
  },
  styles,
  ...appActions,
});

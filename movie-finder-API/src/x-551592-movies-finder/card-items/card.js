import { createCustomElement } from '@servicenow/ui-core';
import snabbdom from '@servicenow/ui-renderer-snabbdom';
import '@servicenow/now-card';
import '@servicenow/now-modal';
import '../modal-module/modal';
import cardActions from './cardActions';
import view from './view';
import styles from './card.scss';

createCustomElement('card-items', {
  renderer: { type: snabbdom },
  view,
  initialState: {
    modalIsOpen: false,
  },
  properties: {
    movies: [],
    modalModule: {
      title: '',
      overview: '',
      date: '',
      path: '',
      vote: 0,
    },
  },
  styles,
  ...cardActions,
});

import { createCustomElement } from '@servicenow/ui-core';
import snabbdom from '@servicenow/ui-renderer-snabbdom';
import view from './view';
import styles from './modal.scss';

createCustomElement('modal-module', {
  renderer: { type: snabbdom },
  view,
  properties: {
    isOpen: false,
    title: '',
    overview: '',
    date: '',
    path: '',
    vote: 0,
  },
  styles,
});

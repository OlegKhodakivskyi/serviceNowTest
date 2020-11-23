import { createCustomElement } from '@servicenow/ui-core';
import snabbdom from '@servicenow/ui-renderer-snabbdom';
import view from './view';
import styles from './pagination.scss';

createCustomElement('pagination-module', {
  renderer: { type: snabbdom },
  view,
  properties: {
    activePage: 1,
    totalPages: [],
  },
  styles,
});

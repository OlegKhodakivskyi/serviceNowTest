import {createCustomElement} from '@servicenow/ui-core';
import snabbdom from '@servicenow/ui-renderer-snabbdom';
import css from './styles.scss';

const view = (state, { updateState }) => {
	return (
		<div class="add">
			Welcome to my world!	
		</div>
	);
};

createCustomElement('x-551592-hello-world', {
	renderer: {type: snabbdom},
	view,
	styles:css
});



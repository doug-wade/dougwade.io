import { defineComponent, html } from '@tybalt/core';
import { compose, required, string, url } from '@tybalt/validator';

import css from './link.css';

defineComponent({
    name: 'dbw-link',
    css,
    props: {
        href: {
            validator: compose(required(), string(), url()),
        },
    },
    render({ href }) {
        return html`<a href="${href}"><slot>link</slot></a>`;
    },
});

import { defineComponent, html } from '@tybalt/core';

import css from './header.css';

const links = [
    { text: 'github', href: 'https://www.github.com/doug-wade' },
    { text: 'linkedin', href: 'https://www.linkedin.com/in/doug-wade-3440893b/' },
    { text: 'mastodon', href: 'https://mastodon.xyz/@dougwade' }
];

export default defineComponent({
    name: 'dbw-header',
    css,
    render() {
        return html`
            <header>
                <div>
                    welcome to dougwade.io
                </div>
                <div>
                    ${links.map(link => `<a href=${link.href}>${link.text}</a>`).join(' ')}
                </div>
            </header>
        `;
    }
});
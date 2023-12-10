import { defineComponent, html } from '@tybalt/core';

const engagements = [
    {
        name: 'React Netherlands',
        presentation: 'Presenting react-server',
        url: 'https://github.com/doug-wade/old-slides/blob/gh-pages/meet-react-server.html'
    },
    {
        name: 'SeattleJS',
        presentation: 'Dual Publishing to Deno and npm',
        url: 'https://github.com/doug-wade/spectacle-slides/blob/master/presentation/dual-publish-node-deno.js'
    },
    {
        name: 'Seattle Api Meetup',
        presentation: 'Using the Walkscore API',
        url: 'https://github.com/doug-wade/old-slides/blob/gh-pages/walk-score-api.html'
    },
    {
        name: 'Puget Sound Programming in Python',
        presentation: 'Python at Redfin',
        url: 'https://github.com/doug-wade/old-slides/blob/gh-pages/python-at-redfin.html'
    }
];

export default defineComponent({
    name: 'dbw-speaking-list',
    setup() {
        const speakingLis = engagements.map((engagement) => {
            return html`
                <li>
                    ${engagement.name}: "${engagement.presentation}" (<dbw-link href="${engagement.url}">slides</dbw-link>)
                </li>
            `;
        });

        return {
            speakingLis
        }
    },
    render({ speakingLis }) {
        return html`
            <dbw-typography variant="h3">Spoken at</dbw-typography>
            <ul>
                ${speakingLis} 
            </ul>
        `;
    }
});

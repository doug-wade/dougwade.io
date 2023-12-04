import { defineComponent, html } from '@tybalt/core';

export default defineComponent({
    name: 'dbw-speaking-list',
    setup() {
        const jobs = [
            {
                name: 'React Netherlands',
                url: ''
            },
            {
                name: 'SeattleJS',
                url: ''
            },
            {
                name: 'Seattle Api Meetup',
                url: ''
            },
            {
                name: 'Puget Sound Programming in Python',
                url: ''
            }
        ];

        const speakingLis = jobs.map((job) => {
            return html`
                <li>
                    <dbw-link href="${job.url}">${job.name}</dbw-link>
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
import { defineComponent, html } from '@tybalt/core';

export default defineComponent({
    name: 'dbw-contact-form',
    css: `
        dbw-button {
            margin-top: 2em;
            margin-bottom: 2em;
        }
    `,
    render() {
        return html`
            <form name="contact" netlify>
                <dbw-typography variant="h2">
                    Contact Me!
                </dbw-typography>
                <dbw-text-input required="true" name="subject" label="Subject"></dbw-text-input>
                <dbw-text-input required="true" name="email" type="email" label="Reply-To"></dbw-text-input>
                <dbw-text-area required="true" name="message" label="Message"></dbw-text-area>
                <dbw-button type="submit">
                    Send message
                </dbw-button>
            </form>
        `;
    }
});
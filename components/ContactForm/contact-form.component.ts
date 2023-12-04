import { defineComponent, html } from '@tybalt/core';

export default defineComponent({
    name: 'dbw-contact-form',
    render() {
        return html`
            <form>
                <dbw-typography variant="h2">
                    Contact Me!
                </dbw-typography>
                <dbw-text-input name="subject" label="Subject"></dbw-text-input>
                <dbw-text-input name="email" label="Reply-To"></dbw-text-input>
                <dbw-text-area name="message" label="Message"></dbw-text-area>
                <dbw-button type="submit">
                    Send message
                </dbw-button>
            </form>
        `;
    }
});
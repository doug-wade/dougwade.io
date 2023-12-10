import { defineComponent, html } from '@tybalt/core';
import { BehaviorSubject } from 'rxjs';

export default defineComponent({
    name: 'dbw-contact-form',
    css: `
        dbw-button {
            margin-top: 2em;
            margin-bottom: 2em;
        }
    `,
    setup() {
        const hasSubmitted = new BehaviorSubject(false);
        const clickHandler = () => {
            hasSubmitted.next(true);
        }

        const subject = new BehaviorSubject({ value: '', valid: false });
        const email = new BehaviorSubject({ value: '', valid: false });
        const message = new BehaviorSubject({ value: '', valid: false });

        const subjectHandler = (evt) => { console.log('evt.detail', evt.detail); subject.next(evt.detail) };
        const emailHandler = (evt) => email.next(evt.detail);
        const messageHandler = (evt) => message.next(evt.detail);

        return {
            clickHandler,
            hasSubmitted,
            subjectHandler,
            emailHandler,
            messageHandler,
            subject,
            email,
            message
        }
    },
    render({ 
        subject,
        email,
        message, 
        clickHandler, 
        hasSubmitted, 
        messageHandler, 
        emailHandler, 
        subjectHandler 
    }) {
        if (hasSubmitted) {
            return html`<div>Thanks for contacting me!</div>`;
        }

        return html`
            <form name="contact" netlify>
                <dbw-typography variant="h2">
                    Contact Me!
                </dbw-typography>
                <dbw-text-input 
                    required="true" 
                    name="subject" 
                    label="Subject" 
                    value="${subject.value}" 
                    @change="${subjectHandler}">
                </dbw-text-input>
                <dbw-text-input 
                    required="true" 
                    name="email" 
                    type="email" 
                    label="Reply-To" 
                    value="${email.value}" 
                    @change="${emailHandler}">
                </dbw-text-input>
                <dbw-text-area 
                    required="true" 
                    name="message" 
                    label="Message" 
                    value=${message.value} 
                    @change="${messageHandler}">
                </dbw-text-area>
                <dbw-button 
                    type="submit" 
                    @click="${clickHandler}"
                    disabled="${!(subject.valid && email.valid && message.valid)}">
                        Send message
                </dbw-button>
            </form>
        `;
    }
});

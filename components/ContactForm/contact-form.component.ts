import { defineComponent, html } from '@tybalt/core';
import { derive, reactive } from '@tybalt/reactive';

import css from './contact-form.css';

export default defineComponent({
    name: 'dbw-contact-form',
    css,
    setup() {
        const hasSubmitted = reactive(false);
        const clickHandler = () => {
            hasSubmitted.value = true;
        }

        const subject = reactive({ value: '', valid: false });
        const email = reactive({ value: '', valid: false });
        const message = reactive({ value: '', valid: false });

        const subjectHandler = (evt: CustomEvent) => subject.value = evt.detail;
        const emailHandler = (evt: CustomEvent) => email.value = evt.detail;
        const messageHandler = (evt: CustomEvent) => message.value = evt.detail;

        const buttonDisabled = derive([subject, email, message], ([s, e, m]) => {
            return !(s.valid && e.valid && m.valid);
        });

        return {
            buttonDisabled,
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
        buttonDisabled,
        subject,
        email,
        message, 
        clickHandler, 
        hasSubmitted, 
        messageHandler, 
        emailHandler, 
        subjectHandler 
    }) {
        if (hasSubmitted.value) {
            return html`<div>Thanks for contacting me!</div>`;
        }

        return html`
            <form class="dbw-contact-form" name="contact" netlify>
                <dbw-typography variant="h2">
                    Contact Me!
                </dbw-typography>
                <dbw-text-input 
                    required="true" 
                    name="subject" 
                    label="Subject" 
                    value="${subject.value.value}" 
                    @change="${subjectHandler}">
                </dbw-text-input>
                <dbw-text-input 
                    required="true" 
                    name="email" 
                    type="email" 
                    label="Reply-To" 
                    value="${email.value.value}" 
                    @change="${emailHandler}">
                </dbw-text-input>
                <dbw-text-area 
                    required="true" 
                    name="message" 
                    label="Message" 
                    value="${message.value.value}"
                    @change="${messageHandler}">
                </dbw-text-area>
                <dbw-button 
                    type="submit" 
                    @click="${clickHandler}"
                    disabled="${buttonDisabled}">
                        Send message
                </dbw-button>
            </form>
        `;
    }
});

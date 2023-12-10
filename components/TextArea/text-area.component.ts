import { defineComponent, html } from '@tybalt/core';
import { compose, string, required } from '@tybalt/validator';
import { BehaviorSubject } from 'rxjs';

import css from './text-area.css';

export default defineComponent({
    name: 'dbw-text-area',
    css,
    props: {
        name: {
            validator: string,
        },
        label: {
            validator: compose(string, required)
        },
        required: {
            default: false,
        },
        value: {
            default: '',
            validator: string,
        }
    },
    setup({ required: isRequired, value: valueProp }, { emit }) {
        const validator = compose(...[
            isRequired ? required() : null,
            string()
        ].filter(v => !!v));

        let hasRun = false;
        const textareaClasses = new BehaviorSubject('');
        const blurHandler = () => {
            if (!hasRun) {
                textareaClasses.next('has-blurred');
                hasRun = true;
            }
        };

        const value = new BehaviorSubject(valueProp);
        const changeHandler = async (evt) => {
            evt.stopPropagation();

            const newValue = evt.target?.value;
            value.next(newValue);
            const validationResult = await validator.validate(newValue);

            emit('change', { 
                value: newValue,
                valid: validationResult.passed
            });
        }

        return {
            blurHandler,
            changeHandler,
            textareaClasses,
            value
        }
    },
    render({ name, label, required, textareaClasses, blurHandler, changeHandler, value }) {
        return html`
            <label>
                <dbw-typography variant="body">${label}:</dbw-typography>
                <textarea 
                    class="${textareaClasses}"
                    required="${required}" 
                    name="${name}"
                    value="${value}"
                    @blur="${blurHandler}"
                    @change="${changeHandler}"></textarea> 
            </label>
        `;
    }
});

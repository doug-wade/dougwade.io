import { defineComponent, html } from '@tybalt/core';
import { compose, string, required } from '@tybalt/validator';
import { string as stringParser } from '@tybalt/parser';
import { derive, reactive } from "@tybalt/reactive";
import { v4 as uuid } from 'uuid';

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
            parser: stringParser
        }
    },
    setup({ required: isRequired, value: valueProp }, { emit }) {
        const id = uuid();

        const validator = compose(
            isRequired ? required() : null,
            string()
        );

        let hasRun = false;
        const hasBlurredClasses = reactive('');
        const blurHandler = () => {
            if (!hasRun) {
                hasBlurredClasses.value = 'has-blurred';
                hasRun = true;
            }
        };

        // Persist the value of the text input between renders
        const value = reactive(valueProp.value);
        const validClasses = reactive(isRequired ? 'invalid' : ''); 
        valueProp.addListener(valuePropUpdate => value.value = valuePropUpdate);
        const inputHandler = async (evt) => {
            evt.stopPropagation();

            const newValue = evt.target?.value;
            value.value = newValue;
            const validationResult = await validator.validate(newValue);
            validClasses.value = validationResult.passed ? '' : 'invalid';

            emit('change', { 
                value: newValue,
                valid: validationResult.passed
            });
        }

        const wrapperClasses = derive([hasBlurredClasses, validClasses], ([h, v]) => {
            return `${h} ${v}`;
        });

        return {
            id,
            blurHandler,
            inputHandler,
            wrapperClasses,
            value
        }
    },
    render({ name, label, required, wrapperClasses, blurHandler, inputHandler, value, id }) {
        return html`
            <div class="dbw-text-area ${wrapperClasses}">
                <label for="${id}">
                    <dbw-typography variant="body">${label}:</dbw-typography>
                </label>
                <textarea
                    id="${id}"
                    required="${required}" 
                    name="${name}"
                    @blur="${blurHandler}"
                    @input="${inputHandler}">${value.value}</textarea> 
            </div>
        `;
    }
});

// Core
import React, { Component, createRef } from 'react';
import { Formik, Form, Field } from 'formik';

// Instruments
import Styles from './styles.m.css';
import { composer } from '../../bus/forms/shapes'; // изначальное состояние и правила валидации отсюда

export default class Composer extends Component {
    formikForm = createRef();

    _submitForm = (formData, actions) => { // 1 парам - данные о форме, строка с текстом поста
        this._createPost(formData);
        actions.resetForm();
    };

    _createPost = (data) => {
        if (!data.comment) {
            return null;
        }

        this.props.actions.createPostAsync(data);
    };

    _submitFormOnEnter = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();

            this.formikForm.current.submitForm();
        }
    };

    render () {
        const { profile } = this.props;

        return (
            <Formik
                initialValues = { composer.shape }
                ref = { this.formikForm }
                render = { () => {
                    return (
                        <section className = { Styles.composer }>
                            <img src = { profile.get('avatar') } />
                            <Form>
                                <Field
                                    component = 'textarea'
                                    name = 'comment'
                                    placeholder = { `What's on your mind, ${profile.get('firstName')}?` }
                                    type = 'text'
                                    onKeyPress = { this._submitFormOnEnter }
                                />
                                <input type = 'submit' value = 'Запостить' />
                            </Form>
                        </section>
                    );
                } }
                validationSchema = { composer.schema }
                onSubmit = { this._submitForm }
            />
        );
    }
}

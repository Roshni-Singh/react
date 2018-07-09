import _ from 'lodash';
import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { addTodo } from '../actions';

class todoAdd extends Component {

    renderField(field) {
        const { meta: { touched, error } } = field;
        const className = `form-group ${touched && error ? 'has-danger' : ''}`;

        return (
            <div className={className}>
                <label>{field.label}</label>
                <input
                    className='form-control'
                    type='text'
                    {...field.input}
                />
                <div className="text-help">
                    {touched ? error : ''}
                </div>
            </div>
        );
    }

    onSubmit(values) {
        this.props.addTodo(values.newTodo);
        this.props.history.push('/');
    }

    render() {
        const { handleSubmit } = this.props;

        return (
            <div>
                <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                    <Field
                        label = 'Task for Todo-List'
                        name = 'newTodo'
                        component = {this.renderField}
                    />
                    <button type='submit' className='btn btn-primary'>Submit</button>
                    <Link className='btn btn-danger' to='/'>
                        Cancel
                    </Link>
                </form>
            </div>
        );
    }
}

function validate(values) {
    const errors = {};

    // Validate the inputs from 'values'
    if (!values.newTodo) {
        //console.log("There is an error");
        errors.newTodo = 'Enter a Task!!';
    }
    return errors;
}

export default reduxForm({
    validate,
    form: 'newForm',
})(connect(null, { addTodo })(withRouter(todoAdd)));

import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Link, withRouter } from 'react-router-dom';
import { setCurrentTodo, editTodo } from '../actions';

class TodoEdit extends Component {
    componentDidMount() {
        if (!this.props.todos[this.props.match.params.id]) {
            this.props.history.push('/');
        } else {
            this.props.setCurrentTodo(this.props.match.params.id);
        }
    }

    onSubmit(fields) {
        console.log('On Submit Fields', fields);
        console.log('On Submit ID', this.props.match.params.id);

        // create action to edit todo
        this.props.editTodo({ newVal: fields.todo, index: this.props.match.params.id });
        // pass this as an argument:

        // { newVal: fields.todo, index: this.props.match.params.id }

        // pass that object as a payload to the reducers

        // in your reducer, use the index property to update the todos array 
        // in redux to the newVal property
        
        // then redirect this.props.history.push('/');
        this.props.history.push('/');
    }

    renderField(field) {
        const { meta: { touched, error } } = field;

        return (
            <div>
                <label>{field.label}</label>
                <input type='text' {...field.input} />
                <h3>{touched && error ? error : ''}</h3>
            </div>
        );
    }

    render () {
        const { handleSubmit } = this.props;

        return (
            <div>
                <form onSubmit={ handleSubmit(this.onSubmit.bind(this)) }>
                    <Field name='todo' label='Edit Todo' component={ this.renderField } />

                    <button type='submit'>Save Changes</button>
                </form>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        todos: state.todos.todos,
        currentTodo: state.todos.currentTodo,
        initialValues: {
            todo: state.todos.currentTodo
        }
    };
}

function validate(values, ownProps) {
    const errors = {};

    if (!values.todo) {
        errors.todo = 'Please enter a todo to save changes';
    }
 
    if (values.todo === ownProps.currentTodo) {
        errors.todo = 'Please enter a different todo';
    }

    return errors;
}

const InitializeFromStateForm = reduxForm({ validate, form: 'TodosEditForm', enableReinitialize: true })(withRouter(TodoEdit));

export default connect(mapStateToProps, { setCurrentTodo, editTodo })(InitializeFromStateForm);

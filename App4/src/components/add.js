//import _ from 'lodash';
import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { addDIY } from '../actions';

class add extends Component {

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
                <div className='text-help'>
                    {touched ? error : ''}
                </div>
            </div>
        );
    }

    onSubmit(values) {
        console.log(values);
        this.props.addDIY(values);
        this.props.history.push('/explore')
        // this.props.addDIY(values, () => {
        //     this.props.history.push('/explore');
        // });
    }

    render() {
        const { handleSubmit } = this.props;

        return (
            <div>
                <h1>Add DIY</h1>
                <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                    <Field
                        label='Title'
                        name='title'
                        component={this.renderField}
                    />
                    <Field
                        label='How-To'
                        name='description'
                        component={this.renderField}
                    />
                    <button
                    className='btn btn-danger btn-sm'
                    style={{ display: 'inline', float: 'right' }}
                    >
                    Submit
                    </button>
                    <Link
                    className='goBack'
                    to={'/'}
                    >
                    Go Back
                    </Link>
                </form>
            </div>
        )
    }
}

export default reduxForm({
    form: 'PostsNewDIY'
})(
    connect(null, { addDIY })(withRouter(add))
);
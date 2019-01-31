import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createStream } from '../../actions';

class StreamCreate extends React.Component {
  renderError({ touched, error}) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }

  renderInput = ({input, label, meta}) => {
    const clazz = `field ${meta.error && meta.error ? `error` : ``}`;
    return (
      <div className={clazz}>
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    );
  }

  onSubmit = (formValues) => {
    this.props.createStream(formValues);
  }

  render() {
    return (
      <form 
        className="form ui error"
        onSubmit={this.props.handleSubmit(this.onSubmit)} >
        <Field 
          name="title" 
          component={this.renderInput} 
          label="enter title"/>
        <Field 
          name="description" 
          component={this.renderInput} 
          label="enter description"/>
        <button className="ui button primary">submit</button>
      </form>          
    );
  }
}

const validate = (formValues) => {
  const errors = {};

  if (!formValues.title) {
    errors.title = 'please, enter title';
  } 

  if (!formValues.description) {
    errors.description = 'please, enter description';
  } 

  return errors;
}

const formWrapped = reduxForm({
  form: 'streamCreate',
  validate
})(StreamCreate);


export default connect(null, { createStream })(formWrapped);

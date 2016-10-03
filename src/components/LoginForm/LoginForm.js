import React, { Component } from 'react';
import { reduxForm, propTypes } from 'redux-form';
import loginValidation from './loginValidation';
// import Col from 'react-bootstrap/lib/Col';
// import Form from 'react-bootstrap/lib/Form';
// import FormGroup from 'react-bootstrap/lib/FormGroup';
// import FormControl from 'react-bootstrap/lib/FormControl';
import Button from 'react-bootstrap/lib/Button';
// import Checkbox from 'react-bootstrap/lib/Checkbox';

@reduxForm({
  form: 'login',
  fields: ['email', 'password'],
  validate: loginValidation
})
export default class LoginForm extends Component {
  static propTypes = {
    ...propTypes
  };

  render() {
    const styles = require('./LoginForm.scss');
    const {
      fields: { email, password },
      handleSubmit,
      error
    } = this.props;

    const renderInput = (field, label, type = 'text') =>
      <div className={`form-group ${field.error && field.touched ? 'has-error' : ''}`}>
        <label htmlFor={field.name} className={`col-sm-12 text-left ${styles.controlLabel}`}>{label}</label>
        <div className={`col-sm-12 right-block ${styles.inputFormContainer}`}>
          <input type={type} className="form-control" id={field.name} name={field.name} {...field} />
          {field.error && field.touched && <span className="glyphicon glyphicon-remove form-control-feedback"></span>}
          {field.error && field.touched &&
            <div className={`text-danger ${styles.textDanger}`}><strong>{field.error}</strong></div>}
        </div>
      </div>;

    return (
      <form className="form-horizontal" onSubmit={handleSubmit}>
        {renderInput(email, 'Электронная почта')}
        {renderInput(password, 'Пароль', 'password')}
        {error && <p className={`text-danger ${styles.textDanger}`}><strong>{error}</strong></p>}
        <Button className="btn btn-success center-block" block type="submit">
          {/* <i className="fa fa-sign-in" /> */}{' '}Войти
        </Button>
      </form>
    );
  }
}

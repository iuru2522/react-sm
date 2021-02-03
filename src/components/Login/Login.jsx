import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { required } from "../../utils/validators/validators";
import { Input } from "../common/FormsControls/FormsControls";
import { login } from "../../redux/auth-reducer"
import { Redirect } from "react-router-dom";
const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field placeholder={"Email"}
          validate={[required]}
          name={"email"}
          component={Input} />
      </div>

      <div>
        <Field placeholder={"Password"}
          validate={[required]}
          name={"password"}
          type={"password"}
          component={Input} />
      </div>
      <div>
        <Field component={Input} name={"rememberMe"} type={"checkbox"} /> remember me

       </div>
      <div>
        <button>Login</button>
      </div>
    </form>
  )
};

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)



const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe);
  }

  if (props.isAuth) {
    return <Redirect to={"/profile"} />
  }
  return <div>
    <h1>LOGIN</h1>
    <LoginReduxForm onSubmit={onSubmit} />
  </div>

};

export default connect(null, { login })(Login);

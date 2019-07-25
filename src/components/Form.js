import React, { Component } from "react";
import { PropTypes } from "prop-types";

import Message from "./Message";

// Regex for email validation
const validEmailRegex = RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);

// Regex for phone validation
const validPhoneNumberRegex = RegExp(/^[2-9]\d{2}-\d{3}-\d{4}$/);

// Regex for url validation
const validUrlRegex = RegExp(
  /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/
);

const validNameRegex = RegExp(/^[a-zA-Z]{3,30}$/);

const validateForm = errors => {
  let valid = true;
  Object.values(errors).forEach(val => val.length > 0 && (valid = false));
  return valid;
};

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      name: "",
      phone: "",
      url: "",
      isEmailValid: false,
      isNameValid: false,
      isPhoneValid: false,
      isUrlValid: false
    };
  }

  getContent = () => {
    const { isEmailValid, isNameValid } = this.state;
    const invalidField = isEmailValid && isNameValid;
    const trueError = invalidField ? true : false;
    this.props.callback(trueError);
  };

  handleNameChange = event => {
    this.setState({ name: event.target.value }, () => {
      this.validateName(this.state.name);
    });
  };

  handleChange = event => {
    event.preventDefault();
    const { name, value } = event.target;

    switch (name) {
      case "name":
        this.validateName(this.state.name);
        break;
      case "email":
        this.validateEmail(this.state.email);
        break;
      default:
        break;
    }

    this.setState({ [name]: value });
  };

  validateName = name => {
    const nameTest = validNameRegex.test(name);
    this.setState({
      isNameValid: nameTest
    });
  };

  validateEmail = email => {
    const emailTest = validEmailRegex.test(email);
    this.setState({
      isEmailValid: emailTest
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { name, email } = this.state;
    this.getContent();
    console.log(this.state)
  };

  render() {
    const { email, name, phone, url } = this.state;
    return (
      <div className="row">
        <h1 className="text-center">Form Validation</h1>
        <form onSubmit={this.handleSubmit} noValidate>
          <h3>Name:</h3>
          <input
            name="name"
            type="text"
            value={name}
            onChange={this.handleChange}
          />
          <h3>Email:</h3>
          <input
            name="email"
            type="email"
            value={email}
            onChange={this.handleChange}
          />
          {/* <h3>Phone:</h3>
          <input name="isPhone" type="number" value={isPhone} />
          <h3>Blog URL: </h3>
          <input name="isUrl" type="text" value={isUrl} /> */}

          <div className="small-6 small-centered text-center columns">
            <button
              type="submit"
              className="button success expand round text-center"
            >
              Verify
            </button>
          </div>
        </form>
        {/* {console.log(this.state.errors)} */}
      </div>
    );
  }
}

Form.propTypes = {
  //   isEmail: PropTypes.string.isRequired,
  //   isName: PropTypes.string.isRequired,
  //   isPhone: PropTypes.number.isRequired,
  //   isUrl: PropTypes.string.isRequired,
  //   isEmailValid: PropTypes.boolean,
  //   isNameValid: PropTypes.boolean,
  //   isPhoneValid: PropTypes.boolean,
  //   isUrlValid: PropTypes.boolean,
  // callback : PropTypes.func,
};

export default Form;

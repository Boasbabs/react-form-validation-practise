import React, { Component } from "react";
import { PropTypes } from "prop-types";

import {
  validEmailRegex,
  validUrlRegex,
  validNameRegex,
  validPhoneNumberRegex
} from "../utils";

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

  validatePhone = phone => {
    const phoneTest = validPhoneNumberRegex.test(phone);
    this.setState({
      isPhoneValid: phoneTest
    });
  };

  validateUrl = url => {
    const urlTest = validUrlRegex.test(url);
    this.setState({
      isUrlValid: urlTest
    });
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
      case "phone":
        this.validatePhone(this.state.phone);
        break;
      case "url":
        this.validateUrl(this.state.url);
        break;
      default:
        break;
    }
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.getErrorState();
  };

  getErrorState = () => {
    const { isEmailValid, isNameValid, isUrlValid, isPhoneValid } = this.state;

    const checkForInvalidField =
      isEmailValid && isNameValid && isPhoneValid && isUrlValid;

    const isError = checkForInvalidField ? true : false;

    this.props.raiseFormError(isError);
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
          <h3>Phone: <small>(+234)</small> </h3>
          <input
            name="phone"
            type="text"
            value={phone}
            onChange={this.handleChange}
          />
          <h3>Blog URL: </h3>
          <input
            name="url"
            type="text"
            value={url}
            onChange={this.handleChange}
          />

          <div className="small-6 small-centered text-center columns">
            <button
              type="submit"
              className="button success expand round text-center"
            >
              Verify
            </button>
          </div>
        </form>
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
  raiseFormError: PropTypes.func
};

export default Form;

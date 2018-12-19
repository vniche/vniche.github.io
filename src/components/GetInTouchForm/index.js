import React, { PureComponent } from 'react';
import * as Styled from './elements';
import { getInTouch } from '../../services/getInTouch';

export default class GetInTouchForm extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      message: "",
      sending: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async componentWillMount() {
    this.setState({
      name: "",
      email: "",
      message: "",
      sending: false
    });
  };

  async handleSubmit(event) {
    event.preventDefault();

    this.setState({
      sending: true
    });

    try {
      const response = await getInTouch({
        name: this.state.name,
        email: this.state.email,
        message: this.state.message
      });
      console.log(response);
      setTimeout(() => {
        this.setState({
          name: "",
          email: "",
          message: "",
          sending: false
        });
      }, 2000);
    } catch (error) {
      console.error(error);
      this.setState({
        sending: false
      });
    }
  };

  handleChange = (event) => {
    switch (event.target.name) {
      case "name":
        this.setState({
          name: event.target.value
        });
        break;
      case "email":
        this.setState({
          email: event.target.value
        });
        break;
      case "message":
        this.setState({
          message: event.target.value
        });
        break;
      default:
      // do nothing
    };
  };

  render() {
    const {
      name,
      email,
      message,
      sending
    } = this.state;

    let icon;
    if (!sending) {
      icon = <Styled.Send />;
    } else {
      icon = <Styled.Loading />;
    }

    return (
      <Styled.Form onSubmit={this.handleSubmit}>
        <Styled.h3>Get in touch:</Styled.h3>
        <Styled.Input placeholder="Name" name="name" type="text" required value={name} onChange={this.handleChange} disabled={sending} />
        <Styled.Input placeholder="Email" name="email" type="email" required value={email} onChange={this.handleChange} disabled={sending} />
        <Styled.TextArea placeholder="Type your message here..." required name="message" value={message} onChange={this.handleChange} disabled={sending} />
        <Styled.Button primary type="submit" value="Submit">
          {icon}
        </Styled.Button>
      </Styled.Form>
    );
  }
};

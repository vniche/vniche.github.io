import React, { PureComponent } from 'react';
import * as Styled from './elements';
import { getInTouch } from '../../services/getInTouch';

const initialState = {
  name: "",
  email: "",
  message: "",
  sending: false,
  success: false,
  error: null
};

export default class GetInTouchForm extends PureComponent {
  constructor(props) {
    super(props);


    this.state = initialState;

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async componentWillMount() {
    this.setState(initialState);
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
      this.setState({
        sending: false
      });

      if (response.status === 200) {
        this.setState({
          success: true
        });
      } else {
        this.setState({
          error: true
        });
      };
       
      setTimeout(() => {
        this.setState(initialState);
      }, 2000);
    } catch (error) {
      console.error(error);
      this.setState({
        sending: false,
        error: true
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
      sending,
      success,
      error
    } = this.state;

    let icon = !sending ?
      (!success ? <Styled.Send /> : <Styled.Check />) :
      <Styled.Loading />;

    return (
      <Styled.Form onSubmit={this.handleSubmit}>
        <Styled.h3>Get in touch:</Styled.h3>
        <Styled.Input placeholder="Name" name="name" type="text" required value={name} onChange={this.handleChange} disabled={sending} />
        <Styled.Input placeholder="Email" name="email" type="email" required value={email} onChange={this.handleChange} disabled={sending} />
        <Styled.TextArea placeholder="Type your message here..." required name="message" value={message} onChange={this.handleChange} disabled={sending} />
        <Styled.Button primary type="submit" disabled={sending && !success} sending={sending} success={success} value="Submit">
          {icon}{error && " Please, try again."}{success && " Message sent."}
        </Styled.Button>
      </Styled.Form>
    );
  }
};

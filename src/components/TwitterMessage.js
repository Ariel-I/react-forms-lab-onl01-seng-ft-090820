import React from "react";
import LoginForm from "./LoginForm"

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ""
    };
  }

  handleChange = (event) => {
    this.setState({
      message: event.target.value
    })
  }
  
  remainingChars = () => {
    return (
      <h2>{this.props.maxChars - this.state.message.length}</h2>
    )
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={this.handleChange} value={this.state.message} />
        {this.remainingChars()}
      </div>
    );
  }
}

export default TwitterMessage;

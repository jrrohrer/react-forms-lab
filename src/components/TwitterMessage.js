import React from "react";

class TwitterMessage extends React.Component {
  state = {
    message: ''
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    let numOfChars = this.props.maxChars - this.state.message.length
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={this.handleChange} value={this.state.message}/>
        <p>Characters left: {numOfChars}</p>
      </div>
    );
  }
}

export default TwitterMessage;

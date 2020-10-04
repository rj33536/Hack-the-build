import React, { Component } from 'react';




export class Otp extends Component {

  render() {
    return (
      <div>
   
        <div id="recaptcha"></div>
        <Button onClick={this.handleClick}>Verify Phone Number</Button>
      </div>
    );
  }
}

export default Otp;
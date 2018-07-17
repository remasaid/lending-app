import React, { Component } from "react";
import "./Messages.css";

export default class Messages extends Component {
  constructor() {
    super();
    this.state = {
      messages: [
        {
          from: "Jina Mcinery",
          re: "Loan Dispuresement Amount",
          date: "1/1/2018"
        },
        {
          from: "Samuel Jackson",
          re: "New Loan",
          date: "1/1/2018"
        },
        {
          from: "Donnie Trump",
          re: "Loan Agreement",
          date: "1/1/2018"
        },
        {
          from: "Judy Macyintyre",
          re: "Mortgage Agreement",
          date: "1/1/2018"
        },
        {
          from: "Evgeny P",
          re: "Interest Rates",
          date: "1/1/2018"
        },
        {
          from: "Al S",
          re: "New Mortgage",
          date: "1/1/2018"
        }
      ]
    };
  }

  render() {
    let { messages } = this.state;

    let messagesJsx = messages.map((message, index) => {
      return (
        <div className="message-placeholder">
          <div className="message-text-container">
            <div className="message-title">{message.re}</div>
            <div className="message-info-container">
              <div className="message-from"> {message.from}</div>
              <div className="message-date"> {message.date}</div>
            </div>
          </div>
          <button className="message-view">VIEW</button>
        </div>
      );
    });

    return (
      <div className="messages-overlay">
        <div className="messages-positioner">
          <div className="header-positioner">
            <p className="messages-header">Messages</p>
            <button className="messages-button">
              <p className="message-button-text">Close</p>
            </button>
          </div>
          <button className="messages-new-message">
            <p className="new-message-text">NEW MESSAGE</p>
          </button>
          <div className="message-container">{messagesJsx}</div>
        </div>
      </div>
    );
  }
}

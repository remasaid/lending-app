import React, { Component } from "react";
import "./ImportantNews.css";

export default class ImportantNews extends Component {
  constructor() {
    super();
    this.state = {
      importantNewsItem: "Important News information ticker goes here"
    };
  }
  render() {
    const { importantNewsItem } = this.state;
    return <div className="important-news-container">{importantNewsItem}</div>;
  }
}

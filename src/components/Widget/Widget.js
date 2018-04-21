import React, { Component } from "react";
import "./Widget.css";

export default class Widget extends Component {
  constructor() {
    super();
    this.state = {
      widget: [
        {
          type: "bar",
          text: "ASSETS UNDER ADMINISTRATION",
          amount: "4.5 M",
          label1: "2017",
          progress1: ".8",
          label2: "2018",
          progress2: ".6"
        },
        {
          type: "bar",
          text: "RENEWALS IN NEXT 30 DAYS",
          amount: "1 M",
          label1: "DEC",
          progress1: ".8",
          label2: "JAN",
          progress2: ".6"
        },
        {
          type: "line",
          text: "ANOTHER METRIC",
          amount: "100K",
          label1: "2017",
          label2: "2018",
          x: "100",
          y: "200"
        },
        {
          type: "bar",
          text: "ANOTHER REPORTING METRIC",
          amount: "90,000",
          label1: "2017",
          progress1: ".8",
          label2: "2018",
          progress2: ".6"
        },
        {
          type: "bar",
          text: "A LONG NUMBER",
          amount: "18,000,000",
          label1: "2017",
          progress1: ".8",
          label2: "2018",
          progress2: ".6"
        },
        {
          type: "bar",
          text: "A CURRENCY METRIC",
          amount: "$1,034,002.92",
          label1: "2017",
          progress1: ".8",
          label2: "2018",
          progress2: ".6"
        }
      ]
    };
  }
  render() {
    let { widget } = this.state;
    let widgetJSX = widget.map((widget, index) => {
      if (widget.type === "bar") {
        return (
          <div className="widget" key={index}>
            <div className="widget-name">{widget.text}</div>
            <div className="widget-number">{widget.amount}</div>
            <div className="widget-graph-container">
              <div className="widget-label">{widget.label1}</div>
              <div className="widget-progress " />
            </div>
            <div className="widget-graph-container">
              <div className="widget-label">{widget.label2}</div>
              <div className="widget-progress progress-bottom" />
            </div>
          </div>
        );
      } else if (widget.type === "line") {
        return (
          <div className="widget" key={index}>
            <div className="widget-name">{widget.text}</div>
            <div className="widget-number">{widget.amount}</div>
            <div className="widget-graph-container">
              <div className="widget-label">{widget.label1}</div>
              <div className="widget-graph">{widget.x}</div>
            </div>
            <div className="widget-graph-container">
              <div className="widget-label">{widget.label2}</div>
              <div className="widget-graph">{widget.y}</div>
            </div>
          </div>
        );
      }
    });
    return <div className="widget-container">{widgetJSX}</div>;
  }
}

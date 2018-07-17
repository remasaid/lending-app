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
          amount: 4.5,
          label1: "2017",
          progress1: ".8",
          label2: "2018",
          progress2: ".6",
          fullProgress: 5
        },
        {
          type: "bar",
          text: "RENEWALS IN NEXT 30 DAYS",
          amount: 1,
          label1: "DEC",
          progress1: ".8",
          label2: "JAN",
          progress2: ".6",
          fullProgress: 2
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
          amount: 90000,
          label1: "2017",
          progress1: ".8",
          label2: "2018",
          progress2: ".6",
          fullProgress: 100000
        },
        {
          type: "bar",
          text: "A LONG NUMBER",
          amount: 18000000,
          label1: "2017",
          progress1: ".8",
          label2: "2018",
          progress2: ".6",
          fullProgress: 18000000
        },
        {
          type: "bar",
          text: "A CURRENCY METRIC",
          amount: 103400292,
          label1: "2017",
          progress1: ".8",
          label2: "2018",
          progress2: ".6",
          fullProgress: 200400500,
          currency: true
        }
      ]
    };
  }
  render() {
    let { widget } = this.state;
    let widgetJSX = widget.map((widget, index) => {
      if (widget.type === "bar") {
        let width = widget.amount / widget.fullProgress * 90;
        let amount = widget.amount;
        if (amount) {
          amount = amount.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
        }
        if (widget.currency) {
          amount = "$" + amount;
        }
        return (
          <div className="widget" key={index}>
            <div className="widget-name">{widget.text}</div>
            <div className="widget-number">{amount}</div>
            <div className="widget-graph-container">
              <div className="widget-label">{widget.label1}</div>
              <div
                className="widget-progress"
                style={{ width: width + "px" }}
              />
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

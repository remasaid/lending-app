import React, { Component } from "react";
import "./DocumentExchange.css";
import { Link } from "react-router-dom";

//ICONS
import Upload from "../../img/upload.svg";
import JPG from "../../img/jpg.svg";
import PDF from "../../img/pdf.svg";
import DOC from "../../img/doc.svg";
import XLS from "../../img/xls.svg";

// EXTERNAL COMPONENTS
import FileDrop from "react-file-drop";

export default class DocumentExchange extends Component {
  constructor() {
    super();
    this.state = {
      documentList: [
        {
          type: "jpg",
          title: "Consolidated Portfolio",
          date: "May 17, 2017",
          src: JPG
        },
        {
          type: "pdf",
          title: "Transactional Extract",
          date: "May 17, 2017",
          src: PDF
        },
        {
          type: "doc",
          title: "Dictionary (Portfolio Data)",
          date: "May 17, 2017",
          src: DOC
        },
        {
          type: "xls",
          title: "Monthly Report",
          date: "May 17, 2017",
          src: XLS
        }
      ]
    };
  }
  handleDrop = (files, event) => {
    console.log(files, event);
  };

  render() {
    const { documentList } = this.state;
    let documentExchangeJsx = documentList.map((document, index) => {
      return (
        <div className="document-list-item">
          <img src={document.src} alt="" className="document-list-img" />
          <div className="document-list-details">
            <div className="document-list-title">{document.title}</div>

            <div className="document-list-date">{document.date}</div>
          </div>
        </div>
      );
    });

    return (
      <div className="document-exchange-container">
        <div className="document-exchange-positioner">
          <p className="document-exchange-heading">DOCUMENT EXCHANGE</p>
          <div id="react-file-drop-demo">
            <FileDrop onDrop={this.handleDrop}>
              <div className="document-exchange-content">
                <img src={Upload} className="document-exchange-upload" />
                <p>Drag document into this area or click here </p>
              </div>
            </FileDrop>
          </div>
          <div className="document-list-container">{documentExchangeJsx}</div>
        </div>
      </div>
    );
  }
}

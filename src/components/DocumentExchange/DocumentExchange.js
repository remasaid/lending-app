import React, { Component } from "react";
import "./DocumentExchange.css";

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
          title: "Consolidated Portfolie",
          date: "May 17, 2017"
        },
        {
          type: "jpg",
          title: "Consolidated Portfolie",
          date: "May 17, 2017"
        },
        {
          type: "jpg",
          title: "Consolidated Portfolie",
          date: "May 17, 2017"
        },
        {
          type: "jpg",
          title: "Consolidated Portfolie",
          date: "May 17, 2017"
        }
      ]
    };
  }
  handleDrop = (files, event) => {
    console.log(files, event);
  };

  render() {
    const styles = {
      border: "1px solid black",
      width: "456px",
      height: "60",
      color: "black",
      padding: 20,
      backgroundColor: "red"
    };
    return (
      <div className="document-exchange-container">
        <div className="document-exchange-positioner">
          DOCUMENT EXCHANGE
          <div id="react-file-drop-demo">
            <FileDrop onDrop={this.handleDrop}>
              <div className="document-exchange-content">
                <img src={Upload} className="document-exchange-upload" />
                <p>Drag document into this area or click here </p>
              </div>
            </FileDrop>
          </div>
        </div>
      </div>
    );
  }
}

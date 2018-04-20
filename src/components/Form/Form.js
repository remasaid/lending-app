import React, { Component } from "react";
import "./Form.css";

//ICONS
import Arrow from "../../img/dropdown_arrow.svg";
import MagnifyingGlass from "../../img/search-glass.svg";

//MATERIAL COMPONENTS
import SelectField from "material-ui/SelectField";
import MenuItem from "material-ui/MenuItem";
// import { SelectField } from "material-ui";

//COMPONENTS

export default class View extends Component {
  constructor(props) {
    super(props);
    this.state = { value: 1 };
  }

  handleChange = (event, index, value) => this.setState({ value });
  render() {
    let formInput;

    formInput = [
      {
        text: "",
        type: "img",
        src: Arrow
      },
      {
        text: "MCAP #, Lender Ref # or Last Name",
        type: "input"
      },

      {
        text: "SMART FILTERS",
        type: "label"
      },
      {
        text: "MCAP #",
        type: "input"
      },
      {
        text: "Lender Ref #",
        type: "input"
      },
      {
        text: "OR",
        type: "label"
      },
      {
        text: "First Name",
        type: "input"
      },
      {
        text: "Last Name",
        type: "input"
      },
      {
        text: "Street",
        type: "input"
      },
      {
        text: "Postal Code",
        type: "input"
      },
      {
        text: "Home Telephone #",
        type: "input"
      },
      {
        text: "ING Ref #",
        type: "input"
      },
      {
        text: "Brand",
        type: "dropDown",
        options: ["Option 1", "Option 2", "Option 3", "Option 4", "Option 5"]
      },
      {
        text: "Lender",
        type: "dropDown",
        options: ["Option 1", "Option 2", "Option 3", "Option 4", "Option 5"]
      }
    ];
    const styles = {
      customWidth: {
        width: "300px",
        flex: "0 1 47%",
        marginBottom: "28px"
      },
      labelStyle: {
        fontSize: "12px",
        color: "#101542",
        fontWeight: "200"
      }
    };

    const formInputJsx = formInput.map((form, index) => {
      if (form.type === "input") {
        return (
          <input
            className={
              form.text === "MCAP #, Lender Ref # or Last Name" ||
              form.text === "Street"
                ? "form-input-long"
                : "form-input"
            }
            placeHolder={form.text}
          />
        );
      } else if (form.type === "label") {
        return (
          <label
            className={
              form.text === "SMART FILTERS" ? "form-label" : "form-label-center"
            }
          >
            {form.text}
          </label>
        );
      } else if (form.type === "img") {
        return (
          <img
            src={form.src}
            className="form-arrow"
            onClick={this.props.formField}
            alt=""
          />
        );
      } else if (form.type === "dropDown") {
        let menuItems = form.options.map((option, index) => {
          return <MenuItem value={index + 1} primaryText={option} />;
        });
        return (
          <SelectField
            className="form-drop-down"
            floatingLabelText={form.text}
            value={this.state.value}
            style={styles.customWidth}
            labelStyle={styles.labelStyle}
            iconStyle={styles.iconStyle}
            autoWidth={false}
            onChange={this.handleChange}
          >
            {menuItems}
          </SelectField>
        );
      }
    });

    return (
      <div className="form-field-positioner">
        <div className="form-field-container">
          <img src={MagnifyingGlass} class="form-magnifying-glass" alt="" />
          {formInputJsx}
          <div className="form-field-button-container">
            <button className="form-field-reset">Reset</button>
            <button className="form-field-button">Search</button>
          </div>
        </div>
      </div>
    );
  }
}

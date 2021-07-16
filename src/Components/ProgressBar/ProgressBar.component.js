import React, { PureComponent } from "react";
import "./ProgressBar.styles.css";
import Tick from "../../tick.svg";

class ProgressBar extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const { checkoutStep } = this.props;
    return (
      <div className="ProgressBar">
        <div className="ProgressBar-Container">
          <div className="ProgressBar-GreyColor">
            <div className="ProgressBar-RedColor-Placeholder">
              <div
                className="ProgressBar-RedColor"
                style={
                  checkoutStep === "SHIPPING_STEP" ||
                  "BILLING_STEP" ||
                  "DETAILS_STEP"
                    ? { width: "100%" }
                    : null
                }
              ></div>
            </div>
            <div className="ProgressBar-Steps">
              <div className="ProgressBar-Step Step-Shipping">
                {checkoutStep === "SHIPPING_STEP" ? "1" : "✔"}
              </div>
              <div className="ProgressBar-RedColor-Placeholder RedColor-middle">
                <div
                  className="ProgressBar-RedColor"
                  style={
                    checkoutStep === "BILLING_STEP" ||
                    checkoutStep === "DETAILS_STEP"
                      ? { width: "100%" }
                      : null
                  }
                ></div>
              </div>
              <div className="ProgressBar-Step Step-Billing">
                {checkoutStep === "DETAILS_STEP" ? "✔" : "2"}
              </div>
            </div>
            <div className="ProgressBar-RedColor-Placeholder">
              <div
                className="ProgressBar-RedColor"
                style={
                  checkoutStep === "DETAILS_STEP" ? { width: "100%" } : null
                }
              ></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProgressBar;

// checkoutStep === "SHIPPING_STEP" ? "active" : null;

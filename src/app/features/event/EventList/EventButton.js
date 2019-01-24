import React from "react";
import { NavLink, Link, withRouter } from "react-router-dom";

const EventButton = () => {
  return (
    <div className="container-fluid">
      <div className="Billing-section-container">
        <header className="Billing-section-header">
          <div>
            <div className="Billing-section-title">Information Card</div>
            <div className="Billing-section-description">
              Add basic information about your course and the author.
            </div>
          </div>

          <Link
            className="Button btn Billing-section-add-card-button"
            to="/createEvent"
          >
            Add A New Card
          </Link>
        </header>
        <div className="Billing-credit-cards-container" />
      </div>
    </div>
  );
};

export default EventButton;

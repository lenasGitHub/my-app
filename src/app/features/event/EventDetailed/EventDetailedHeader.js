import React from "react";
import { Link } from "react-router-dom";

const EventDetailedHeader = ({ event }) => {
  return (
    <div className="ng-scope">
      <div id="tickets-app">
        <div className="contact-main content-box-main ng-scope">
          <div className="banner banner-people ng-scope">&nbsp;</div>
          <h2 className="ng-scope">{event.studentName}</h2>
          <div className="help-categories ng-scope">
            <div className="help-category-row ng-scope">
              <a className="help-category ng-scope" href="#/form/bug">
                <img
                  src="https://d3gvvapon6fqzo.cloudfront.net/icons/icon-bug.svg"
                  className="category-image"
                />
                <div className="category-title ng-binding">
                  {event.studentEmail}
                </div>

                <div className="category-description ng-binding">
                  Get in touch with our team with any questions you may have
                  about your Teachable school.
                </div>
                <br />
                <Link
                  className="category-title ng-binding"
                  to={`/manage/${event.id}`}
                >
                  Manage
                </Link>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetailedHeader;

import React, { Component } from "react";
import { Link } from "react-router-dom";

class EventListItem extends Component {
  render() {
    const { event, deleteEvent } = this.props;

    var divStyle = {
      backgroundImage: "url(" + event.hostPhotoURL + ")"
    };
    return (
      <div>
        <h1>{event.cardName}</h1>
        <div className="schools-list ">
          <a
            className="school-card school-has-default-thumbnail"
            style={divStyle}
          >
            <div className="school-info">
              <img
                className="school-favicon"
                src="https://d3gvvapon6fqzo.cloudfront.net/icons/default-favicon-school.svg"
              />
              <Link className="school-name" to={`/event/${event.id}`}>
                {event.studentName}
              </Link>
              <p className="school-url">{event.studentEmail}</p>
              <label className="label label-user-type label-free">free</label>

              <button
                type="submit"
                className="Button btn btn-orange"
                onClick={deleteEvent(event.id)}
              >
                Delete
              </button>
            </div>
          </a>
        </div>
      </div>
    );
  }
}

export default EventListItem;

// https://lena1.teachable.com/?sa=eyJ1c2VyX2lkIjoxOTM4NTYzMSwiZXhwaXJlc19hdCI6MTU0NzMyMTk3Ny41MDE3ODMxLCJzY2hvb2xfaWQiOjMwMDE3NCwiYXV0aGVudGljYXRpb25fdG9rZW4iOiJIZkdNeGRuOHp6RXhrOGJ2VGU0OW8xU0VZeDZ3SFlSM2tnIn0%3D--30b1f008593bcdbaff75d78d15fe8f75ac8f268c&redirect=admin

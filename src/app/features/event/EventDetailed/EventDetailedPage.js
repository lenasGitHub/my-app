import React from "react";
import { connect } from "react-redux";
import EventDetailedHeader from "./EventDetailedHeader";

const mapState = (state, ownProps) => {
  const eventId = ownProps.match.params.id;

  let event = {};

  if (eventId && state.events.length > 0) {
    event = state.events.filter(event => event.id === eventId)[0];
  }

  return {
    event
  };
};

const EventDetailedPage = ({ event }) => {
  return (
    <div>
      <EventDetailedHeader event={event} />
    </div>
  );
};

export default connect(mapState)(EventDetailedPage);

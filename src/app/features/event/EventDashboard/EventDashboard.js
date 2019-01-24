import React, { Component } from "react";
import cuid from "cuid";

import { connect } from "react-redux";
import { deleteEvent } from "../eventActions";

import EventForm from "../EventForm/EventForm";
import EventList from "../EventList/EventList";
import EventButton from "../EventList/EventButton";

const mapState = state => ({
  events: state.events
});

const actions = {
  deleteEvent
};

class EventDashboard extends Component {
  // state = {
  //   events: eventsDashboard,
  //   isOpen: false,
  //   selectedEvent: null
  // };

  // handleFormOpen = () => {
  //   this.setState({
  //     selectedEvent: null,
  //     isOpen: true
  //   });
  // };

  // handleUpdateEvent = updatedEvent => {
  //   // console.log(updatedEvent);

  //   this.setState({
  //     events: this.state.events.map(event => {
  //       // console.log(event);

  //       // console.log(event.id);
  //       // console.log(updatedEvent.id);
  //       if (event.id === updatedEvent.id) {
  //         return Object.assign({}, updatedEvent);
  //       } else {
  //         return event;
  //       }
  //     }),
  //     isOpen: false,
  //     selectedEvent: null
  //   });
  // };

  // handleOpenEvent = eventToOpen => () => {
  //   // console.log(eventToOpen);
  //   this.setState({
  //     selectedEvent: eventToOpen,
  //     isOpen: true
  //   });
  // };

  // handleCreateEvent = newEvent => {
  //   newEvent.id = cuid();
  //   newEvent.hostPhotoURL =
  //     "https://d3gvvapon6fqzo.cloudfront.net/icons/default-thumbnail-school.svg";
  //   const updatedEvents = [...this.state.events, newEvent];
  //   // console.log(newEvent);
  //   // console.log(...this.state.events);

  //   this.setState({
  //     events: updatedEvents,
  //     isOpen: false
  //   });
  // };

  // handleCancel = () => {
  //   console.log("handleCancel");
  //   this.setState({
  //     isOpen: false
  //   });
  // };

  // handleDeleteEvent = eventId => () => {
  //   const updatedEvents = this.state.events.filter(e => e.id !== eventId);
  //   this.setState({
  //     events: updatedEvents
  //   });
  // };

  handleDeleteEvent = eventId => () => {
    this.props.deleteEvent(eventId);
  };
  render() {
    // const { selectedEvent } = this.state;
    const { events } = this.props;
    return (
      <div>
        <div id="billingApp">
          <EventButton />
        </div>

        <EventList events={events} deleteEvent={this.handleDeleteEvent} />
      </div>
    );
  }
}

export default connect(
  mapState,
  actions
)(EventDashboard);

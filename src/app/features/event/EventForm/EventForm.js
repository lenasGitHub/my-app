import React, { Component } from "react";
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";
import {
  composeValidators,
  combineValidators,
  isRequired,
  hasLengthGreaterThan
} from "revalidate";

import TextInput from "../../../common/form/TextInput";

import { createEvent, updateEvent } from "../eventActions";
import cuid from "cuid";

const mapState = (state, ownProps) => {
  const eventId = ownProps.match.params.id;

  let event = {};

  if (eventId && state.events.length > 0) {
    event = state.events.filter(event => event.id === eventId)[0];
  }

  return {
    initialValues: event
  };
};

const actions = {
  createEvent,
  updateEvent
};

const validate = combineValidators({
  cardName: isRequired({ message: "The Card Name is required" }),
  studentName: isRequired({ message: "Please provide a Name" }),
  studentEmail: isRequired({ message: "Please provide a Email" })
});
class EventForm extends Component {
  // componentDidMount() {
  //   if (this.props.selectedEvent !== null) {
  //     this.setState({
  //       event: this.props.selectedEvent
  //     });
  //   }
  // }

  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.selectedEvent !== this.props.selectedEvent) {
  //     this.setState({
  //       event: nextProps.selectedEvent || emptyEvent
  //     });
  //   }
  // }

  onFormSubmit = values => {
    if (this.props.initialValues.id) {
      this.props.updateEvent(values);
      this.props.history.goBack();
    } else {
      const newEvent = {
        ...values,
        id: cuid(),
        hostPhotoURL:
          "https://d3gvvapon6fqzo.cloudfront.net/icons/default-thumbnail-school.svg",
        hostedBy: "Bob"
      };
      this.props.createEvent(newEvent);
      this.props.history.push("/events");
    }
  };
  render() {
    const { invalid, submitting, pristine } = this.props;

    // const { formCancel } = this.props;
    return (
      <div>
        <div className="sticky-center-container">
          <div className="CreditCardForm-container content-box">
            <button
              class="CreditCardForm-back-btn"
              onClick={this.props.history.goBack}
            >
              <i
                class="CreditCardForm-back-icon fa fa-angle-left"
                aria-hidden="true"
              />
              Cancel
            </button>
            <div className="CreditCardForm-header">
              <div className="CreditCardForm-title">Add Credit Card</div>
              <div className="CreditCardForm-description">
                This card will be available to use for course enrollments on
                schools.
              </div>
            </div>
            <form
              className="StripeForm row"
              onSubmit={this.props.handleSubmit(this.onFormSubmit)}
            >
              {/* <div className="form-group col-md-12">
                <label>Card Name</label>
                <input
                  name="cardName"
                  className="StripeForm-input-container StripeElement StripeElement--empty"
                  placeholder="Card Name"
                  onChange={this.onInputChange}
                  value={event.cardName}
                />
              </div> */}
              <Field
                name="cardName"
                type="text"
                label="Card Name"
                component={TextInput}
                placeholder="Card Name"
              />
              <Field
                name="studentName"
                label="Student Name"
                type="text"
                component={TextInput}
                placeholder="Card Name"
              />
              <Field
                name="studentEmail"
                type="text"
                label="Student Email"
                component={TextInput}
                placeholder="Card Name"
              />

              <div className="StripeForm-actions col-md-12 ">
                <button type="submit" className="Button btn btn-orange">
                  Add Card
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  mapState,
  actions
)(
  reduxForm({ form: "eventForm", enableReinitialize: true, validate })(
    EventForm
  )
);

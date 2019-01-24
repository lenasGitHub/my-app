import { createReducer } from "../../common/util/reducerUtil";
import { CREATE_EVENT, DELETE_EVENT, UPDATE_EVENT } from "./eventConstants";

const initialState = [
  {
    id: "1",
    studentName: "Trip to Tower of London",
    cardName: "London, UK",
    studentEmail: "Bob",
    hostPhotoURL:
      "https://d3gvvapon6fqzo.cloudfront.net/icons/default-thumbnail-school.svg"
  },
  {
    id: "2",
    studentName: "Trip to Punch and Judy Pub",
    cardName: "London, UK",
    studentEmail: "Tom",
    hostPhotoURL:
      "https://d3gvvapon6fqzo.cloudfront.net/icons/default-thumbnail-school.svg"
  }
];

export const createEvent = (state, payload) => {
  return [...state, Object.assign({}, payload.event)];
};

export const updateEvent = (state, payload) => {
  return [
    ...state.filter(event => event.id !== payload.event.id),
    Object.assign({}, payload.event)
  ];
};

export const deleteEvent = (state, payload) => {
  return [...state.filter(event => event.id !== payload.eventId)];
};

export default createReducer(initialState, {
  [CREATE_EVENT]: createEvent,
  [UPDATE_EVENT]: updateEvent,
  [DELETE_EVENT]: deleteEvent
});

import { combineReducers } from "redux";
import { reducer as FormReducer } from "redux-form";

import testReducer from "../../features/testarea/testReducer";
import eventReducer from "../features/event/eventReducer";
import authReducer from "../../app/features/auth/authReducer";

const rootReducer = combineReducers({
  test: testReducer,
  events: eventReducer,
  form: FormReducer,
  auth: authReducer
});

export default rootReducer;

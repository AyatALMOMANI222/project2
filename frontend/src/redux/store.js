import { configureStore } from "@reduxjs/toolkit";
//
import auth from "../redux/reducers/auth"
export default configureStore({
  // the reducer object is empty for now but after creating reducers we add them to this object
  reducer: {
    auth:auth
  },
});
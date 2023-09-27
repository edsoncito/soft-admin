import { combineReducers, configureStore } from "@reduxjs/toolkit";
import newsNoticeSlice from "../newsNotices/newsNoticeSlice";

const combinedReducer = combineReducers({
  newsNotice: newsNoticeSlice,
});

const rootReducer = (state, action) => {
  // if (action.type === 'login/logout') {
  //   state = undefined;
  // }
  return combinedReducer(state, action);
};

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      // serializableCheck: { ignoredPaths: ['attentionPoints.points'] },
      immutableCheck: false,
      serializableCheck: false,
    }),
});

export default store;

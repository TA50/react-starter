import { createStore, combineReducers } from "redux";

import { AppStore } from "./types";
import commonReducer from "./ducx/Common/common.reducer";


const rootReducer = combineReducers({

	common: commonReducer,

});

const store: AppStore = createStore(rootReducer);
export type AppDispatch = typeof store.dispatch;
export default store;

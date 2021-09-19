import { createStore, combineReducers } from "redux";

import { AppStore } from "./types";
import commonReducer from "./ducx/Common/common.reducer";
import dataReducer from "./ducx/Data/data.reducer";


const rootReducer = combineReducers({

	common: commonReducer,
	data: dataReducer

});

const store: AppStore = createStore(rootReducer);
export type AppDispatch = typeof store.dispatch;
export {store};

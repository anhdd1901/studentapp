import { combineReducers } from "redux";

import Students from "./Reducers/Students";
import Pagination from "./Reducers/Pagination";

export default combineReducers({ Students, Pagination });

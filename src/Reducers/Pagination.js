// import { actionType } from "./../actions";

const initialState = {
  currentPage: 1,
  pageSize: 3,
};

export default function Pagination(state = initialState, action) {
  switch (action.type) {
    case "changePage":
      return { ...state, currentPage: action.payload.targetedPage };
    default:
      return state;
  }
}

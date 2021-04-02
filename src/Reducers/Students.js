import { v4 as uuidv4 } from "uuid";
// import { actionType } from "./../actions";

const allStudents = [
//   {
//     id: 1,
//     name: "Bruce Wayne",
//     phoneNumber: "055555",
//     gender: true,
//     birthday: "",
//     img: "",
//   },
//   {
//     id: 2,
//     name: "Lois Lane",
//     phoneNumber: "044444",
//     gender: false,
//     birthday: "",
//     img: "",
//   },
//   {
//     id: 3,
//     name: "Clark Kent",
//     phoneNumber: "033333",
//     gender: true,
//     birthday: "",
//     img: "",
//   },
//   {
//     id: 4,
//     name: "Diana",
//     phoneNumber: "022222",
//     gender: false,
//     birthday: "",
//     img: "",
//   },
//   {
//     id: 5,
//     name: "Barry Allen",
//     phoneNumber: "011111",
//     gender: true,
//     birthday: "",
//     img: "",
//   },
];

export default function Students(
  state = { allStudents, selectedID: 0 },
  action
) {
  switch (action.type) {
    case "AddNewStudent": {
      action.payload.newStudent.id = uuidv4();
      return {
        ...state,
        allStudents: [action.payload.newStudent, ...state.allStudents],
      };
    }
    case "ClickStudentData": {
      return { ...state, selectedID: action.payload.ID };
    }
    case "UpdateStudentData": {
      state.allStudents = state.allStudents.filter(
        (x) => x.id !== action.payload.updatedStudentInfo.id
      );
      return {
        ...state,
        allStudents: [action.payload.updatedStudentInfo, ...state.allStudents],
      };
    }
    default:
      return state;
  }
}

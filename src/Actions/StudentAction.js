export const AddNewStudent = (newStudent) => {
  return {
    type: "AddNewStudent",
    payload: {
      newStudent,
    },
  };
};

export const ClickStudentData = (ID) => {
  return {
    type: "ClickStudentData",
    payload: {
      ID,
    },
  };
};

export const UpdateStudentData = (updatedStudentInfo) => {
  return {
    type: "UpdateStudentData",
    payload: {
      updatedStudentInfo,
    },
  };
};
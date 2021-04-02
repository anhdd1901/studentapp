import axios from "axios";

export const addStudent = async (newStudent) => {
  let fd = new FormData();

  fd.append("name", newStudent.name);

  return await axios.post(addStudentEndpoint, fd, {
    headers: {
      "Content-Type": `multipart/form-data boundary=${fd._boundary}`,
    },
  });
};
// dùng cái này do có post cả ảnh lên server => mà ảnh lại phải cắt nhỏ từng phần

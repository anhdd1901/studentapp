import style from "./Detail.module.css";
import { UpdateStudentData } from "../Actions/StudentAction";

import React from "react";
import { useHistory } from "react-router-dom";
import { LeftOutlined } from "@ant-design/icons";
import Button from "antd/lib/button";
import Radio from "antd/lib/radio";
import "antd/dist/antd.css";
import { useSelector, useDispatch } from "react-redux";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export default function List() {
  const dispatch = useDispatch();
  const history = useHistory();  
  const selectedID = useSelector((state) => state.Students.selectedID);
  const studentInfo = useSelector((state) => state.Students.allStudents).find(
    (x) => x.id === selectedID
  );
  const [gender, setGender] = React.useState(studentInfo.gender);
  return (
    <div className={style.all}>
      <div className={style.headerDetail}>
        <LeftOutlined
          className={style.backButton}
          onClick={() => history.push("/")}
        />
        <div>Danh sách</div>
      </div>
      <Formik
        initialValues={{
          id: studentInfo.id,
          name: studentInfo.name,
          phoneNumber: studentInfo.phoneNumber,
          gender: studentInfo.gender,
          birthday: studentInfo.birthday,
          img: studentInfo.img,
        }}
        validateOnMount={true}
        validationSchema={Yup.object().shape({
          img: Yup.string().required(),
          name: Yup.string()
            .required("Vui lòng nhập tên")
            .matches(
              /^[^`~!@#$%^&*()_+={}[\]|\\:;“’<,>.?๐฿]*$/,
              "Tên không được chứa ký tự đặc biệt"
            ),
          phoneNumber: Yup.string()
            .required("Vui lòng nhập số điện thoại")
            .matches(
              /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
              "Số điện thoại chưa hợp lệ"
            ),
          birthday: Yup.string().required("Vui lòng nhập ngày sinh"),
        })}
      >
        {({ values, setFieldValue, isValid }) => {
          return (
            <>
              <div className={style.main}>
                <div className={style.avatar}>
                  <label htmlFor="imageUpload">
                    <input
                      type="file"
                      id="imageUpload"
                      className={style.file}
                      onChange={(e) =>
                        setFieldValue(
                          "img",
                          URL.createObjectURL(e.target.files[0]),
                          true
                        )
                      }
                    />
                    <img src={values.img} />
                  </label>
                </div>
                <div className={style.otherData}>
                  <Field
                    onChange={(e) => setFieldValue("name", e.target.value)}
                    type="text"
                    name="name"
                    placeholder="Họ và tên"
                  />
                  <ErrorMessage name="name" />
                  <Field
                    onChange={(e) => setFieldValue("birthday", e.target.value)}
                    type="date"
                    name="birthday"
                  />
                  <ErrorMessage name="birthday" />
                  <Radio.Group
                    name="gender"
                    className={style.gender}
                    onChange={(e) => {
                      setGender(e.target.value);
                      setFieldValue("gender", e.target.value);
                    }}
                    value={gender}
                  >
                    <Radio value={true}>Nam</Radio>
                    <Radio value={false}>Nữ</Radio>
                  </Radio.Group>
                  <Field
                    onChange={(e) =>
                      setFieldValue("phoneNumber", e.target.value)
                    }
                    type="text"
                    name="phoneNumber"
                    placeholder="Số điện thoại"
                  />
                  <ErrorMessage name="phoneNumber" />
                  <div className={style.buttons}>
                    <Button
                      disabled={!isValid || values.name === ""}
                      onClick={() => {
                        dispatch(UpdateStudentData(values));
                        history.push("/");
                      }}
                      type="primary"
                      className={style.addButton}
                    >
                      Sửa
                    </Button>

                    <Button
                      type="default"
                      onClick={() => history.push("/")}
                      className={style.cancelButton}
                    >
                      Hủy
                    </Button>
                  </div>
                </div>
              </div>
            </>
          );
        }}
      </Formik>
    </div>
  );
}

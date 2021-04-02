import style from "./StudentTag.module.css";
import { ClickStudentData } from "./../../Actions/StudentAction";

import { ManOutlined, WomanOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

export default function StudentTag({ studentInfo }) {
  const history = useHistory();
  const dispatch = useDispatch();

  return (
    <div
      onClick={() => {
        dispatch(ClickStudentData(studentInfo.id));
        history.push("/update-student-infomation");
      }}
      className={style.all}
    >
      <div className={style.detail}>
        <div className={style.avatar}>
          <img src={studentInfo.img} />
        </div>
        <div className={style.nameAndNumber}>
          <div className={style.name}>{studentInfo.name}</div>
          <div className={style.number}>{studentInfo.phoneNumber}</div>
        </div>
      </div>
      {studentInfo.gender ? (
        <ManOutlined className={style.male} />
      ) : (
        <WomanOutlined className={style.female} />
      )}
    </div>
  );
}
